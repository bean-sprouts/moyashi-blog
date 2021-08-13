module.exports = {
    base: '/blog/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: 'auto',
        smoothScroll: true, // 页面滚动效果

        /*sidebar: [
            '/',
            {
                title: '分组一',
                children : [
                    '/OWL前端架构',
                    ['/会议记录', 'hhhh']
                ]
            },
        ],*/
        // displayAllHeaders: false, // 显示所有页面的标题链接
        // activeHeaderLinks: true, // 活动的标题链接
    }
}
