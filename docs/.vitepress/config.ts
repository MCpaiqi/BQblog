import { defineConfig } from 'vitepress'
import { teekConfig } from './teekConfig'

// Teek 主题核心配置（Vite 插件、Markdown 扩展等）
export default defineConfig({
  extends: teekConfig,

  lang: 'zh-CN',
  title: 'MCpaiqi 的博客',
  description: '一个使用 Teek 主题的个人博客',

  // Node 24 兼容性修复
  vite: {
    ssr: {
      noExternal: ['vitepress', 'vitepress-theme-teek'],
    },
  },
})
