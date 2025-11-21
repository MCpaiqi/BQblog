import { defineConfig } from 'vitepress'
import { Teek } from 'vitepress-theme-teek'

export default defineConfig({
  extends: Teek.config({
    // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
    // 死链忽略必须写在这里！！！
    ignoreDeadLinks: true,
    // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
  }),

  lang: 'zh-CN',
  title: 'MCpaiqi 的博客',
  description: '一个使用 Teek 主题的个人博客',

  themeConfig: Teek.themeConfig({
    avatar: '/avatar.png',
    name: 'MCpaiqi',
    motto: '冲就完事了！',

    // 评论（先把 repo 改成你的，后面再配 repoId/categoryId 也行）
    comment: {
      type: 'giscus',
      repo: 'MCpaiqi/BQblog',
      // repoId: 'xxx',       // 先不填也没事
      // category: 'Announcements',
      // categoryId: 'xxx',
    },

    sidebar: true,
    tags: true,
    archives: true,
    reading: true,
    llms: true,
  })
})
