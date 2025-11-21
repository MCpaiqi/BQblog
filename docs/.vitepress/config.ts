import { defineConfig } from 'vitepress'
import { Teek } from 'vitepress-theme-teek'

export default defineConfig({
  extends: Teek.config({
    ignoreDeadLinks: true,
    theme: 'teek'   // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←← 关键就在这一行！！！
  }),

  lang: 'zh-CN',
  title: 'MCpaiqi 的博客',
  description: '一个使用 Teek 主题的个人博客',

  themeConfig: Teek.themeConfig({
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
  })
})
