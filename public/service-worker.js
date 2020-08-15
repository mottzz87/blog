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
    "revision": "0c1af651017b717a9c27f41f71c47851"
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
    "url": "assets/js/11.707ee167.js",
    "revision": "5e873981a11b6dc3b6c631fcd88ad892"
  },
  {
    "url": "assets/js/12.d7053ec9.js",
    "revision": "0f41edfb2d43d2ba076362c56abbe823"
  },
  {
    "url": "assets/js/13.a7e44687.js",
    "revision": "f9e812f30b8a00e2f5d8e41d460086c7"
  },
  {
    "url": "assets/js/14.23e09744.js",
    "revision": "1cb7416b2636196bf4013b8932dd5eba"
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
    "url": "assets/js/17.97f37c4b.js",
    "revision": "5fdcde17f0eb0c0352b5de7d4631a921"
  },
  {
    "url": "assets/js/18.211e595b.js",
    "revision": "667f789aff46460c3e066a37ad85baab"
  },
  {
    "url": "assets/js/19.a538c0dc.js",
    "revision": "22cc1d5f2df40c06edaeeb60fe5b3b33"
  },
  {
    "url": "assets/js/20.a07ed6a1.js",
    "revision": "aaae20ea322ec1346744266889f7b35c"
  },
  {
    "url": "assets/js/21.720e26ee.js",
    "revision": "27865e4ac112c33206e361bd974b5d97"
  },
  {
    "url": "assets/js/22.93fd38f3.js",
    "revision": "ef6b6d46e09af5aeff74d75911afa390"
  },
  {
    "url": "assets/js/23.64b4a960.js",
    "revision": "bc88d310004d95445992129dffa40543"
  },
  {
    "url": "assets/js/24.84fef6e0.js",
    "revision": "efe682669670aeb42b119e7d88fb464b"
  },
  {
    "url": "assets/js/25.89d16133.js",
    "revision": "cdf43a343432624903081f0bf4cd28ad"
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
    "url": "assets/js/28.f9cceaea.js",
    "revision": "5e117eae6a9d7b48f2503362b6b7e9fe"
  },
  {
    "url": "assets/js/29.d7100100.js",
    "revision": "517e03fd5293016dcf61ddcb73954b60"
  },
  {
    "url": "assets/js/30.37d1ddbb.js",
    "revision": "96b7642cf978084aadc75a9e1350caa0"
  },
  {
    "url": "assets/js/31.1e671649.js",
    "revision": "5816b5a0cf8f536f74934ffb23be05fa"
  },
  {
    "url": "assets/js/32.d9957d13.js",
    "revision": "97cd985aec32237ea4e795d6b97e3008"
  },
  {
    "url": "assets/js/33.a899ad65.js",
    "revision": "632142ea85bfa7d67f7b22ca30dcc820"
  },
  {
    "url": "assets/js/34.83909b0b.js",
    "revision": "808b7bae2271106e44ccf6790e7d2c9d"
  },
  {
    "url": "assets/js/35.c0775a97.js",
    "revision": "66874dfd43696c6586709c2b90c22733"
  },
  {
    "url": "assets/js/36.ba925824.js",
    "revision": "280c33a62b0fed4b96e53317acaef239"
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
    "url": "assets/js/app.a9efc5df.js",
    "revision": "37888321a73d5f60862937345470755f"
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
    "revision": "a766b5a17fed074d5dd973251192eb76"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "e916a99f9acde943a6f8765532582a1c"
  },
  {
    "url": "categories/index.html",
    "revision": "694fd4387c066887770145e5bc621e13"
  },
  {
    "url": "categories/mac/index.html",
    "revision": "dd83fa4b1b64db263f87b69f9db747c7"
  },
  {
    "url": "categories/other/index.html",
    "revision": "ff2b66e8d5874d816802e2e28a0fe494"
  },
  {
    "url": "categories/system/index.html",
    "revision": "2a23403777caa0a5d81bee1941e628cc"
  },
  {
    "url": "categories/系统/index.html",
    "revision": "26c65072f7bfa1d2da1e04b766e2c161"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "90ce79eee6d62f9e415b00e09a2b583e"
  },
  {
    "url": "logo.png",
    "revision": "421974f67b152a05a618555d43d9ed31"
  },
  {
    "url": "tag/index.html",
    "revision": "39546afe036d4512bb5514d836cd24f5"
  },
  {
    "url": "tags/bt面板/index.html",
    "revision": "2100386aeff693df2fcc068b336d8f74"
  },
  {
    "url": "tags/debian/index.html",
    "revision": "851c15146b5326c25842346912e7852d"
  },
  {
    "url": "tags/github/index.html",
    "revision": "798fc8dcd7744f7d6bb6cf94cf0e4582"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "d9ea84149eb0e669e055d1dda27d088b"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "30a04c49e49f16eb52a508368dc9ea3a"
  },
  {
    "url": "tags/Mac/index.html",
    "revision": "87eaa63568ee995dd3d5a1353850b908"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "924f727a6b54f5f01cc4849e0f37c542"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "3fd87d482a2a244454723924eb74169c"
  },
  {
    "url": "tags/Wikimedia/index.html",
    "revision": "ce3df858c27078d74fb58ea5a93040ca"
  },
  {
    "url": "tags/个人信息/index.html",
    "revision": "3ee9f838cdd0bca4646ac27bcfb2630d"
  },
  {
    "url": "tags/图床/index.html",
    "revision": "d880819532d3593a63b291096dc14fec"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "8cb678566fe39f5cf682c00da68e8834"
  },
  {
    "url": "tags/系统软件/index.html",
    "revision": "48477b87b1b557e3d5dff2134f704c9d"
  },
  {
    "url": "tags/黑苹果/index.html",
    "revision": "a46da9025e38a0a45d3fbfcb4135043f"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba3a7e34165060ad51181beedd557c1b"
  },
  {
    "url": "views/backEnd/2020/050101.html",
    "revision": "46a786e0a6b043d1c2e2b080549eb1f1"
  },
  {
    "url": "views/backEnd/2020/050102.html",
    "revision": "cd2ec4470c9213584dd729c78fbec4ae"
  },
  {
    "url": "views/backEnd/2020/050301.html",
    "revision": "397f6249be018fe456f677d30e6fbc33"
  },
  {
    "url": "views/backEnd/2020/050302.html",
    "revision": "accafebea4f1f98890c8a3d10ce4b0ec"
  },
  {
    "url": "views/backEnd/2020/050501.html",
    "revision": "daf2fca3b1954b92160477b0dc9905bc"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "2a6e131e0d426b3fc188902ac6726d87"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "35396708296aa68ef0f671304d012f73"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "bd45d8c1630727bd189ca101308dc16d"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "9ae8d28b44de9d5c72a6b394056b3f4f"
  },
  {
    "url": "views/index.html",
    "revision": "63c3ca783b5449f009bbd39bbe2e24aa"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "2decb6f147e777253609fb60562ad554"
  },
  {
    "url": "views/other/2020/051501.html",
    "revision": "8ad32f2bdedd45364866b8281d988712"
  },
  {
    "url": "views/other/2020/051502.html",
    "revision": "686cecd71ac0c26758e20e310540c8d1"
  },
  {
    "url": "views/other/2020/051701.html",
    "revision": "2f7c76fcc423cc0e32dac46e64b80ccf"
  },
  {
    "url": "views/other/2020/070401.html",
    "revision": "f50037e71ce467fbc88ed2deb128034a"
  },
  {
    "url": "views/other/2020/070501.html",
    "revision": "7f7988d084fa7ebc9687360a31814a18"
  },
  {
    "url": "views/other/2020/070801.html",
    "revision": "4095587c00c35d62168a38c421799ecc"
  },
  {
    "url": "views/other/2020/080901.html",
    "revision": "9c7d59d7659c9f2cd801d433dcd06a77"
  },
  {
    "url": "views/other/2020/081301.html",
    "revision": "4f53eb17d42e0859b6c799c38720251a"
  },
  {
    "url": "views/other/2020/081401.html",
    "revision": "144594809e73412d2312eae3867cda3d"
  },
  {
    "url": "views/other/guide.html",
    "revision": "ff15dc0454bd7bad19a155d727b9dcbf"
  },
  {
    "url": "views/personalInfo/index.html",
    "revision": "c400539acda8e226c5db7d9b43fa81bb"
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
