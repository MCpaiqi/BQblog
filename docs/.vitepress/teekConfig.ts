import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: true, // 是否开启博客首页
  vpHome: false, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "MCpaiqi", link: "https://github.com/MCpaiqi" },

  // 首页 Banner 配置
  banner: {
    enabled: true,
    name: "MCpaiqi",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg4.webp"],
    imgInterval: 15000,
    mask: true,
    maskBg: "rgba(0, 0, 0, 0.4)",
    descStyle: "types",
    description: [
      "冲就完事了！—— MCpaiqi",
      "积跬步以至千里，致敬每个爱学习的你。",
    ],
  },

  // 博主信息卡片
  blogger: {
    name: "MCpaiqi",
    slogan: "冲就完事了！",
    avatar: "/avatar.png",
    shape: "circle-rotate",
    circleBgImg: "/blog/bg4.webp",
    circleBgMask: true,
    circleSize: 100,
    //status: {
    //  icon: "💻",
    //  size: 24,
    //  title: "Coding",
    //},
  },

  // 博客功能配置
  topArticle: { enabled: true, title: (icon) => `${icon}精选文章`, limit: 5 },
  category: {
    enabled: true,
    path: "/categories",
    pageTitle: (icon) => `${icon}全部分类`,
    homeTitle: (icon) => `${icon}文章分类`,
    limit: 10,
  },
  tag: {
    enabled: true,
    path: "/tags",
    pageTitle: (icon) => `${icon}全部标签`,
    homeTitle: (icon) => `${icon}热门标签`,
    limit: 21,
  },
  friendLink: {
    enabled: true,
    title: (icon) => `${icon}友情链接`,
    list: [
      {
        name: "LUNCHAH's Blog",
        desc: "ctf-re糕手",
        avatar: "https://lunchah.github.io/avatar/head.jpg",
        link: "https://lunchah.github.io/",
      },
      {
        name: "Weir_su's Blog",
        desc: "ctf-pwn糕手",
        avatar: "https://weirsu.cn/weir-su-avatar.jpg",
        link: "https://weirsu.cn/",
      },
      {
        name: "yu1i's Blog",
        desc: "ctf-misc糕手",
        avatar: "https://www.yu1i.cn/wp-content/uploads/2026/03/cropped-b3428bf10c8e7b8c54cc7d1f538c9ffb-1.jpg",
        link: "https://www.yu1i.cn/",
      },
      {
        name: "hunsil's Blog",
        desc: "ctf-web糕手",
        avatar: "https://hunsil-sudo.github.io/assets/%E5%9B%BE%E6%A0%87/%E9%87%91%E6%AF%9B.jpg",
        link: "https://hunsil-sudo.github.io/",
      },
    ],
    limit: 5,
  },
  docAnalysis: {
    enabled: true,
    createTime: "2025-06-01",
    wordCount: true,
    readingTime: true,
    statistics: { provider: "busuanzi", siteView: true, pageView: true },
  },

  // 社交链接
  social: [
    { icon: "mdi:github", name: "GitHub", link: "https://github.com/MCpaiqi" },
    { icon: "mdi:telegram", name: "Telegram", link: "https://t.me/bbq114514" },
    { icon: "simple-icons:bilibili", name: "Bilibili", link: "https://space.bilibili.com/3546916981835812" },
    // { icon: "simple-icons:gitee", name: "Gitee", link: "https://gitee.com/你的用户名" },
    // { icon: "mdi:email-outline", name: "Email", link: "zcqzbq@163.com" },
  ],

  // 评论配置 (Giscus - 需要你在 https://giscus.app 配置后填入完整信息)
  comment: {
    provider: "giscus",
    options: {
      repo: "MCpaiqi/BQblog",
      // repoId: "your-repo-id",       // 请在 https://giscus.app 获取
      // category: "Announcements",    // 请在 https://giscus.app 获取
      // categoryId: "your-category-id", // 请在 https://giscus.app 获取
    },
  },

  // 页脚配置
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "MCpaiqi",
    },
  },

  // 代码块
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },

  // 文章分享
  articleShare: { enabled: true },

  // 文章信息展示
  articleAnalyze: {
    showIcon: true,
    dateFormat: "yyyy-MM-dd",
    showAuthor: true,
    showCreateDate: true,
    showCategory: false,
    showTag: false,
  },

  // 面包屑
  breadcrumb: {
    enabled: true,
    homeLabel: "首页",
    separator: "/",
  },

  // 主题增强面板
  themeEnhance: {
    enabled: true,
    position: "top",
  },

  // Vite 插件配置
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
});
