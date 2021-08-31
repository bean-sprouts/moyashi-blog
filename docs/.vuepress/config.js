module.exports = {
    base: '/moyashi-blog/',
    title: '豆芽',
    description: '技术分享博客',
    themeConfig: {
        repo: 'https://github.com/bean-sprouts', // git仓库
        smoothScroll: true, // 页面滚动效果
        nav: [
            { text: "主页", link: "/" },
            { text: "工作", link: "/work/tech-learning" },
        ],
        sidebar: {
            '/work/': [
                ['tech-learning', '新技术学习'],
                ['typora-nextcloud-upload', 'typora图片自动上传nextcloud'],
                // ['typora自动上传nextcloud', 'Explicit link text'],
            ]
        },
        lastUpdated: '最近更新',
        displayAllHeaders: true, // 显示所有页面的标题链接，展开侧边栏
        // activeHeaderLinks: false, // 活动的标题链接,嵌套的标题链接和 URL 中的 Hash 值实时更新
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',

            // 其他的 Vssue 配置
            locale: 'zh',
            autoCreateIssue: true,
            owner: 'bean-sprouts',
            repo: 'moyashi-blog',
            clientId: '3d38769098dd064fa2d9',
            clientSecret: '65589fdccfead5952b7a45669f4903ba2d312d44',
        },
        '@vuepress/back-to-top': {},
    }
}
