module.exports = {
    base: '/vuepress-test2/',
    title: 'xx的博客',
    head: [
        ['link', {rel: 'icon', href: '/avater.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['link', {rel: 'apple-touch-icon', href: '/spider.png'}],
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/avater.png',
        nav: [
            {text: '首页', link: '/'},
            {
                text: '技术文档', 
                link: '/tech/',
                items: [
                    { text: 'Deploy', link: '/tech/deploy' }
                ]
            },
            {text: '简书首页', link: 'https://www.jianshu.com/'},
        ],
        sidebar: 'auto',
        sidebarDepth: 4,
        displayAllHeaders: true,
    }
}