module.exports = [
    {
        text: '个人简介', link: '/guide/'
    },
    {
        text: '交易系统',
        items: [
            {text: '交易日记', link: '/transaction/diary/'},
            {text: '交易策略', link: '/transaction/strategy/'}
        ]
    },
    {
        text: '基础教程',
        items: [
			{
                text: '前端',
				items: [
					{text: 'TypeScript简明教程', link: '/base/typescript/'}
				]
            },
            {
                text: '后端',
                items: [
                    {text: 'GRPC', link: '/base/grpc/'}
                ]
            }
        ]
    },
    {
        text: '面试宝典', link: '/interview/',
        items: [
            {text: '系统设计', link: '/interview/system-design/'},
            {text: '数据结构与算法', link: '/interview/data-structure-and-algorithm/'},
            {text: '分布式协议与算法', link: '/interview/distributed-protocol-and-algorithm/'},
            {text: 'Redis', link: '/interview/redis/'},
            {text: 'MySQL', link: '/interview/mysql/'},
            {
                text: '题目汇总', link: '/interview/questions/',
                items: [
                    {text: 'MySQL题目汇总', link: '/interview/MySQL-questions/'},
                    {text: 'Redis题目汇总', link: '/interview/Redis-questions/'},
                    {text: 'Golang题目汇总', link: '/interview/Golang-questions/'},
                    {text: 'Linux题目汇总', link: '/interview/Linux-questions/'},
                ]
            },
        ]
    },
    {
        text: 'LeetCode', link: '/leetcode/'
    },
    {
        text: 'GitHub', link: 'https://github.com/wxning1107'
    },
]
