import { defineConfig } from 'vitepress'
import { Teek } from 'vitepress-theme-teek'

export default defineConfig({
  extends: Teek.config(),
  lang: 'zh-CN',
  title: 'MCpaiqi 的博客',
  description: '一个使用 Teek 主题的个人博客',
  themeConfig: Teek.themeConfig({
    avatar: '/avatar.png',              // 你的头像
    name: 'MCpaiqi',
    motto: '冲就完事了！',
    // 开启评论（任选其一）
    comment: {
      type: 'giscus',
      repo: '你的用户名/仓库名',
      repoId: 'xxxx',
      category: 'Announcements',
      categoryId: 'xxxx',
    },
    // 其他功能全开
    sidebar: true,
    tags: true,
    archives: true,
    reading: true,
    llms: true,
  })
})
