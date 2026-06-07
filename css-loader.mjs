/**
 * Node.js ESM loader hook for Node 24+ compatibility with VitePress + Teek.
 *
 * Node 24's stricter ESM loader doesn't handle:
 * 1. .css/.scss/.vue files → return empty modules (Vite handles them during actual build)
 * 2. Extension-less imports (vitepress uses `./foo` not `./foo.js`) → add .js
 * 3. `vitepress` bare specifier from client code → redirect to vitepress/client
 * 4. @siteData virtual module → return stub
 * 5. import.meta.env in client modules → replace with inline values
 */
const KNOWN_EXT = /\.(js|mjs|cjs|ts|mts|cts|json|node|wasm)$/i;

export async function resolve(specifier, context, nextResolve) {
  // Handle VitePress virtual modules
  if (
    specifier === '@siteData' ||
    specifier.startsWith('@mdit') ||
    specifier === '@prismicio'
  ) {
    return {
      format: 'module',
      shortCircuit: true,
      url: 'data:text/javascript,export default {}',
    };
  }

  // Redirect bare 'vitepress' → 'vitepress/client' from client-side code
  if (specifier === 'vitepress' && context.parentURL) {
    const parent = context.parentURL.replace(/\\/g, '/');
    if (
      parent.includes('/vitepress/dist/client/') ||
      parent.includes('/vitepress-theme-teek/es/') ||
      parent.includes('/vitepress-theme-teek/src/')
    ) {
      return nextResolve('vitepress/client', context);
    }
  }

  // Handle extension-less imports
  if (
    !specifier.startsWith('node:') &&
    !specifier.startsWith('data:') &&
    !specifier.includes('://') &&
    !KNOWN_EXT.test(specifier.split('?')[0].split('#')[0])
  ) {
    try {
      return await nextResolve(specifier + '.js', context);
    } catch {
      // fall through
    }
  }

  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  const urlStr = url.replace(/\\/g, '/');

  // CSS/SCSS/Vue files — Node can't load them; Vite handles them during SSR
  if (/\.(css|scss|sass|vue)$/i.test(urlStr)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default {}',
    };
  }

  const result = await nextLoad(url, context);

  // Inject import.meta.env shim for vitepress/teek client modules
  if (
    result.format === 'module' &&
    (urlStr.includes('/vitepress/dist/client/') ||
     urlStr.includes('/vitepress-theme-teek/es/'))
  ) {
    // Source can be string, Buffer, or ArrayBuffer
    let source = result.source;
    if (source instanceof Uint8Array) {
      source = new TextDecoder().decode(source);
    } else if (Buffer.isBuffer(source)) {
      source = source.toString('utf8');
    }
    if (typeof source === 'string') {
      const env = { BASE_URL: "'/'", MODE: "'production'", DEV: 'false', PROD: 'true', SSR: 'true' };
      const shimmed = source
        .replace(/import\.meta\.env\.(\w+)/g, (_, key) => env[key] || 'undefined')
        .replace(/import\.meta\.hot/g, 'undefined');
      return { ...result, source: shimmed };
    }
  }

  return result;
}
