module.exports = {
    title: '王雄宁',
    description: '个人笔记',
    dest: 'build/.vuepress/dist',
    host: 'localhost',
    port: '8080',
    base: '/test-blog2/',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}

