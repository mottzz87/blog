const themeConfig = require('./config/theme/')

module.exports = {
  title: "南城旧曲",
  description: '..',
  base: '/blog/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 支持流程图
    ['flowchart'],

    //阅读进度条
    ['reading-progress'],

    //seo
    ['vuepress-plugin-seo'],

    //锚点滚动
    ['vuepress-plugin-smooth-scroll'],

    // 图片放大
    ['@vuepress/medium-zoom', { selector: 'p > img' }],

    //pwa
    ['@vuepress/pwa', { serviceWorker: true, updatePopup: true }],

    //Google Anakytics
    ['@vuepress/google-analytics',{ 'ga': 'UA-164819479-1' } ],  // UA-00000000-0
    // BGM播放器
    [
        '@vuepress-reco/vuepress-plugin-bgm-player',  
        {
          audios: [
            {name: '爱太痛',artist: '吴克群',url: 'https://m7.music.126.net/20200427230403/7442c3fc75bff2b29e2bb8c136359bce/ymusic/d260/bf6e/c45c/fe975bd2f2ee1c1de9c60b362121caed.mp3',cover: 'https://p1.music.126.net/JDBrrfHYWwGNqfVcmmhcQg==/112150186046503.jpg'},
            // {name: 'Dawn',artist: 'DDRKirby(ISQ)',url: 'https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3',cover: 'https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg'},
          ],
          autoShrink: true, //是否默认缩小
          position:{
            bottom: '100px',
            'z-index': '999999999'
          },
          floatStyle:{
            bottom: '136px', 
            'z-index': '999999999'
          }
        },
    ]
  ]
}  