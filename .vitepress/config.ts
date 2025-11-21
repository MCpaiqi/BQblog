import { defineConfig } from 'vitepress'
import { Teek } from 'vitepress-theme-teek'

export default defineConfig({
  extends: Teek.config(),

  // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
  // 你就加在这下面这一行！！！
  ignoreDeadLinks: true,
  // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

  lang: 'zh-CN',
  title: 'MCpaiqi 的博客',
  description: '一个使用 Teek 主题的个人博客',
  themeConfig: Teek.themeConfig({
    avatar: '/avatar.png',
    name: 'MCpaiqi',
    motto: '冲就完事了！',
    comment: {
      type: 'giscus', 
      repo: 'MCpaiqi/BQblog',  // ← 这里顺便改成你的仓库
      // repoId 和 categoryId 先不用填，后面再配也行
    },
    sidebar: true,
    tags: true,
    archives: true,
    reading: true,
    llms: true,
  })
})
