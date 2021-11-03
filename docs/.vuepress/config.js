module.exports = {
    title: '王雄宁',
    description: '终生学习者',
    dest: 'build/.vuepress/dist',
    host: 'localhost',
    port: '8080',
    base: '/wxning-blog/',
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
        lastUpdated: '上次更新',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: '有新内容更新啦~',
                buttonText: '立即获取新内容，确定后稍后自动刷新'
            }
        }],
        ['@vuepress/medium-zoom', {
            selector: '.theme-default-content img'
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['vuepress-plugin-code-copy', true],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
            }
        }],
        ['vuepress-plugin-tags'],
    ]
}

