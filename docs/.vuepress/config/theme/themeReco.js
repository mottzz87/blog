module.exports = {
  type: 'blog',
  huawei: true,
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'vane',
  authorAvatar: "/avatar.png",
  logo: "/logo.png",
  // 备案号
  record: '京ICP备',
  // 项目开始时间
  startYear: '2017',
  valineConfig: {
    appId: 'WEmaPOlACNWJ2N4ftTrvwyGI-gzGzoHsz',// your appId
    appKey: 'YR9hEOCBUgqfCiQvdN639YtV', // your appKey
    visitor: true,
    placeholder: 'enjoy yourself',
    avatar: '',
    recordIP: true
  },
}