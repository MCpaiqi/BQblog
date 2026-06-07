import { defineConfig } from 'vitepress'
import { defineTeekConfig } from 'vitepress-theme-teek/config'

// Teek 主题核心配置（Vite 插件、Markdown 扩展等）
const teek = defineTeekConfig({
  ignoreDeadLinks: true,
})

export default defineConfig({
  extends: teek,

  lang: 'zh-CN',
  title: 'MCpaiqi 的博客',
  description: '一个使用 Teek 主题的个人博客',

  // Node 24 兼容性修复
  vite: {
    ssr: {
      noExternal: ['vitepress', 'vitepress-theme-teek'],
    },
  },

  themeConfig: {
    avatar: '/avatar.png',
    name: 'MCpaiqi',
    motto: '冲就完事了！',
    comment: {
      type: 'giscus',
      repo: 'MCpaiqi/BQblog',
    },
    sidebar: true,
    tags: true,
    archives: true,
    reading: true,
    llms: true,
  },
})
