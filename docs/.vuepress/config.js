module.exports = {
    base: '/moyashi-blog/',
    title: '思考的豆芽',
    description: '技术分享博客',
    themeConfig: {
        smoothScroll: true, // 页面滚动效果
        nav: [{text: "主页", link: "/"      },
            { text: "工作", link: "/work/新技术学习" },
        ],
        sidebar: {
            '/work/': ['新技术学习']
        },
        // displayAllHeaders: false, // 显示所有页面的标题链接
        // activeHeaderLinks: true, // 活动的标题链接
    }
}
