
module.export = [
  ['cursor-effects'],
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
          {name: '爱太痛',artist: '吴克群',url: '/blog/sources/aitaitong.mp3',cover: 'https://p1.music.126.net/JDBrrfHYWwGNqfVcmmhcQg==/112150186046503.jpg'},
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
  ],
  ['reward', {
    btnText: '打赏', // reward button text.
    title: '给作者赏一杯咖啡吧', // First reward text.
    subTitle: '您的支持将是我继续更新下去的动力', // Second reward text.
    rewardOption: [ // your QR code image.
      {
        text: '微信',
        url: '/WeChat.png' // ddd your picture to docs/.vuepress/public
      },
      {
        text: '支付宝',
        url: '/Alipay.png' // ddd your picture to docs/.vuepress/public
      }
    ],
    showInMobile: false // whether to display on the mobile side, default: false.
  }]
]