module.exports = {
    title: 'xx的博客',
    head: [
        ['link', {rel: 'icon', href: '/avater.png'}]
    ],
    themeConfig: {
        logo: '/avater.png',
        nav: [
            {text: '首页', link: '/'},
            {text: '技术文档', link: '/tech/'},
            {text: '简书首页', link: 'https://www.jianshu.com/'},
        ],
        sidebar: 'auto',
        sidebarDepth: 4,
    }
}