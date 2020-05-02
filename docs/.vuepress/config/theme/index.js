const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  friendLink: [
    {
      title: '耶稣的旧花园',
      desc: '最懂你的翻墙小工具',
      avatar: "",
      link: 'https://vuepress-theme-reco.recoluan.com'
    },
  ],
  valineConfig: {
    appId: 'WEmaPOlACNWJ2N4ftTrvwyGI-gzGzoHsz',// your appId
    appKey: 'YR9hEOCBUgqfCiQvdN639YtV', // your appKey
    visitor: true,
    placeholder: 'enjoy yourself',
    avatar: ''
  },
})