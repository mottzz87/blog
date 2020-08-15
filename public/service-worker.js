/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6b9146a8f1fd21dfaa2c270d1189d3fd"
  },
  {
    "url": "assets/css/0.styles.840ffa06.css",
    "revision": "05d19e96b3dab531f8ef4d3f3349b0b8"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.816a178a.js",
    "revision": "9c86aaef4daa44aa861f55930ef79cf6"
  },
  {
    "url": "assets/js/10.55443a06.js",
    "revision": "311a9da50604136cb8fe8b52073741b1"
  },
  {
    "url": "assets/js/11.d747df50.js",
    "revision": "20edb45f642655b227a9d840dd95d50c"
  },
  {
    "url": "assets/js/12.d7053ec9.js",
    "revision": "0f41edfb2d43d2ba076362c56abbe823"
  },
  {
    "url": "assets/js/13.5c399416.js",
    "revision": "b9f49afca70876cf7ba21aaeea375ea9"
  },
  {
    "url": "assets/js/14.c9da2eca.js",
    "revision": "73cec835f43450daebad4f333fa928c2"
  },
  {
    "url": "assets/js/15.d3faed2c.js",
    "revision": "0f0ae08e32a64463c7e54b522f443870"
  },
  {
    "url": "assets/js/16.5f3c1d29.js",
    "revision": "7fdf42a7e2484edf4b79154fe48ca561"
  },
  {
    "url": "assets/js/17.f1ace65d.js",
    "revision": "fed7435071f26202e8b247af0ca650dd"
  },
  {
    "url": "assets/js/18.9c36ac51.js",
    "revision": "dfe069c83c715af2164808a50a3dda70"
  },
  {
    "url": "assets/js/19.87b6f63e.js",
    "revision": "3ca2d3619f3d9b8b00d785e1d3856f39"
  },
  {
    "url": "assets/js/20.b2b92e65.js",
    "revision": "825d0d7ae9a273d280addb41b5955545"
  },
  {
    "url": "assets/js/21.720e26ee.js",
    "revision": "27865e4ac112c33206e361bd974b5d97"
  },
  {
    "url": "assets/js/22.b44475e9.js",
    "revision": "54089087b05e9eedcfbe44c9fe636300"
  },
  {
    "url": "assets/js/23.3f4d2183.js",
    "revision": "a208e73cd3204433e6bb52fede0b13fb"
  },
  {
    "url": "assets/js/24.18d3e37b.js",
    "revision": "56137cb66cd7c3640548b207c575af82"
  },
  {
    "url": "assets/js/25.b5c1bd66.js",
    "revision": "6e12782976bcccf42ebf2b2dce6e7151"
  },
  {
    "url": "assets/js/26.2f36ac87.js",
    "revision": "f7c5956b7359f1daf6537f6b42950148"
  },
  {
    "url": "assets/js/27.e0c8179e.js",
    "revision": "f008e4b6409620ebe6e9160bbc63e7c0"
  },
  {
    "url": "assets/js/28.d8579b9a.js",
    "revision": "dddb937d5647c281abba84f68b5ce249"
  },
  {
    "url": "assets/js/29.d7100100.js",
    "revision": "517e03fd5293016dcf61ddcb73954b60"
  },
  {
    "url": "assets/js/30.75dd4ab8.js",
    "revision": "0d5e94194ed7b223f21bbe05d62c41dd"
  },
  {
    "url": "assets/js/31.7062947b.js",
    "revision": "3edf70d7cbb79efab2fd64f58b98a0a4"
  },
  {
    "url": "assets/js/32.8933b347.js",
    "revision": "50e167255a91135243edc352c3549f55"
  },
  {
    "url": "assets/js/33.8547dc31.js",
    "revision": "1096627b981be569deda583beeb65260"
  },
  {
    "url": "assets/js/34.81ea6cdc.js",
    "revision": "8fc1f15b095e8a17625860c7f5ae0a7f"
  },
  {
    "url": "assets/js/35.24c66afa.js",
    "revision": "052febf44f261d89ebdd48df62920e2b"
  },
  {
    "url": "assets/js/4.99f96f0d.js",
    "revision": "4802c47fea31a75b31a780f068c4c646"
  },
  {
    "url": "assets/js/5.6d05983c.js",
    "revision": "cb6682a102cbf5876e0b61a601aa109c"
  },
  {
    "url": "assets/js/6.d092ba23.js",
    "revision": "e2904ffa1abd2971a76f84467f4a8ba2"
  },
  {
    "url": "assets/js/7.90b12371.js",
    "revision": "ee3f332fe002fcb35d2e43cce1a7584c"
  },
  {
    "url": "assets/js/8.ca4fa00e.js",
    "revision": "95fdb77aa2524cfc6dfc05b1188b15f6"
  },
  {
    "url": "assets/js/9.be6937eb.js",
    "revision": "5879766f9b33c2118190e735825fa26f"
  },
  {
    "url": "assets/js/app.357cbf1a.js",
    "revision": "e36b4832cf17d4d2ef77151654ebae8b"
  },
  {
    "url": "assets/js/vendors~flowchart.4d7b96fd.js",
    "revision": "783264f350fea9692638aa078ce56a57"
  },
  {
    "url": "avatar.png",
    "revision": "d8540a215e16f00a9f8df39db57fb822"
  },
  {
    "url": "banner.jpg",
    "revision": "38ad7665b3d03e2eb2edcf02347ea21e"
  },
  {
    "url": "bg.jpg",
    "revision": "9d8356b49ff83ecdfa411a8490eefad6"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "db8c1878699aa20b5ba1bd0ea06857bf"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "9f8bebfdb8f6a55e42bb588420dd0ac9"
  },
  {
    "url": "categories/index.html",
    "revision": "26b7de3222cb713410fe7994f277c446"
  },
  {
    "url": "categories/mac/index.html",
    "revision": "a8bc7434fa651f92f7f642d276b30e40"
  },
  {
    "url": "categories/other/index.html",
    "revision": "45540dccbbe569794291dcd63b5de99a"
  },
  {
    "url": "categories/system/index.html",
    "revision": "ee1d552b5851292cebebb2edc2c8f44c"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "331d2221eb16235ca0d344db6d61baf8"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "be280dc2803c7f233cfca478edb7e249"
  },
  {
    "url": "logo.png",
    "revision": "421974f67b152a05a618555d43d9ed31"
  },
  {
    "url": "tag/index.html",
    "revision": "41ab895de83610ce27f890a8b06ec99c"
  },
  {
    "url": "tags/bt面板/index.html",
    "revision": "fcd9de7f0d9eadc2dd66e78fef6603a3"
  },
  {
    "url": "tags/debian/index.html",
    "revision": "9011381c5cca9562f6ce378850c50eef"
  },
  {
    "url": "tags/github/index.html",
    "revision": "0ccc69d298de1125f8fd20d597c53e11"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "1312f92c59fc7c6790e5c61f354f4441"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "fa76ca2513ba481b7dfadb52540af8e9"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "85c5b007e35ecf48d3efd5089520dbb4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1cfdfbf59f1579bcd5a9f88122ac54a6"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "4eadf2b8d88368371ace16a81edd3aac"
  },
  {
    "url": "tags/Wikimedia/index.html",
    "revision": "4e1e3600f7daa82c3fa5faf8e4323240"
  },
  {
    "url": "tags/个人信息/index.html",
    "revision": "f042f776e9286c0b6b28cefb104a9cdc"
  },
  {
    "url": "tags/图床/index.html",
    "revision": "f7bd446f967198351437feef009269c6"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "8e159a8e424b674a19e0ff9dd1c3a2fb"
  },
  {
    "url": "tags/系统软件/index.html",
    "revision": "3371fec0f3ec6edd49f602e4b4901cf4"
  },
  {
    "url": "tags/黑苹果/index.html",
    "revision": "6fded5a0ba7821f5944faa3c945e19c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "af151c1cb686ec79b9a2a703dc57574c"
  },
  {
    "url": "views/backEnd/2020/050101.html",
    "revision": "9c830ce79d30b5f4214eae11d89471d3"
  },
  {
    "url": "views/backEnd/2020/050102.html",
    "revision": "215a37792c04ef1d667e4b31a03e3eac"
  },
  {
    "url": "views/backEnd/2020/050301.html",
    "revision": "aec79f17d862916ea9deb37bbfd77c0f"
  },
  {
    "url": "views/backEnd/2020/050302.html",
    "revision": "5b24d58cb3993a35c85a652ff588ad8b"
  },
  {
    "url": "views/backEnd/2020/050501.html",
    "revision": "1999f1f0ca225a581cfacc023703bc31"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "ef4bbb0ba2b011cba4a4d55d754e4181"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "3529e4f725d7c0dbd1971e8c79274e6a"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "e032a18aab246c1d04ca9946668048d1"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "f7de285c386ec528515cba6c70fea089"
  },
  {
    "url": "views/index.html",
    "revision": "85b9e6c96bd6d3f9ba90db94f1e79d8b"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "410f928c586b4a839aa5666dee0b94a5"
  },
  {
    "url": "views/other/2020/051501.html",
    "revision": "8b9fc8e975bae29fcfcfac3170ec274a"
  },
  {
    "url": "views/other/2020/051502.html",
    "revision": "8925ba44bbe4d131016e36f2ea8650cc"
  },
  {
    "url": "views/other/2020/051701.html",
    "revision": "e5c09dc0165983dec0ea69418c825785"
  },
  {
    "url": "views/other/2020/070401.html",
    "revision": "f1593ff448dff351082a87c7b88d6dd9"
  },
  {
    "url": "views/other/2020/070501.html",
    "revision": "0e2b93b11639dda76028a56708407ea6"
  },
  {
    "url": "views/other/2020/070801.html",
    "revision": "fffe75c8faf88e1a0fc1697131d8823e"
  },
  {
    "url": "views/other/2020/080901.html",
    "revision": "1ec959a151088aa60488bb5464500e77"
  },
  {
    "url": "views/other/2020/081301.html",
    "revision": "6b93ad5e27a655e1d762a4e09094efb2"
  },
  {
    "url": "views/other/guide.html",
    "revision": "be00deeaec4b835825b38a8eca7309fa"
  },
  {
    "url": "views/personalInfo/index.html",
    "revision": "73d850d8dd2f7296a4c02420763d41f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
