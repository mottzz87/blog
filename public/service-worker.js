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
    "revision": "2b7b16b28d353b3c7287e655ee327899"
  },
  {
    "url": "assets/css/0.styles.c2f8bcf3.css",
    "revision": "84cd938fb3978c36bd67ad58c5d54f3b"
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
    "url": "assets/js/1.4a61f008.js",
    "revision": "556d5a27ed6c001c2aebc2ceec9cf9b8"
  },
  {
    "url": "assets/js/10.9f7788ba.js",
    "revision": "290262f95fb941229788740a80ce4d31"
  },
  {
    "url": "assets/js/11.f39547cc.js",
    "revision": "1cc19c2ec26bbeed56eb09033d683178"
  },
  {
    "url": "assets/js/12.434f6153.js",
    "revision": "814f87b0e147477110e6ac6ef6d894d9"
  },
  {
    "url": "assets/js/13.f6c7f4a6.js",
    "revision": "035c107cdce34f2954e2e94741cd9c01"
  },
  {
    "url": "assets/js/14.c9da2eca.js",
    "revision": "73cec835f43450daebad4f333fa928c2"
  },
  {
    "url": "assets/js/15.990ab508.js",
    "revision": "e131aade8ecd8c3184b01805945193e5"
  },
  {
    "url": "assets/js/16.be686809.js",
    "revision": "674926c93610d99bf20fdb0f4c1cbaeb"
  },
  {
    "url": "assets/js/17.f1ace65d.js",
    "revision": "fed7435071f26202e8b247af0ca650dd"
  },
  {
    "url": "assets/js/18.9f26b769.js",
    "revision": "1e0ea04f0d869e19e0fd8f8943385b7b"
  },
  {
    "url": "assets/js/19.659e5e49.js",
    "revision": "05443ee216154c75f5dcef036116e312"
  },
  {
    "url": "assets/js/20.65571201.js",
    "revision": "fd65bc7248efd3c1872cc246eef3d96f"
  },
  {
    "url": "assets/js/21.7fc39c79.js",
    "revision": "1ff3f5ab3b00c27770f8c28be5d08540"
  },
  {
    "url": "assets/js/22.1b868fe7.js",
    "revision": "baa9729ba84b0be476a1c5a4078c0941"
  },
  {
    "url": "assets/js/23.bbe9d0e0.js",
    "revision": "2f63022a7fe6946bd40ef98e492d251b"
  },
  {
    "url": "assets/js/24.7c72ca50.js",
    "revision": "e1891c10f79d97db2f43d6e2e4312337"
  },
  {
    "url": "assets/js/25.76d7443c.js",
    "revision": "0e4362af5f93489391b7483d28f9e264"
  },
  {
    "url": "assets/js/26.7ff544a3.js",
    "revision": "f72d6a827dea6800bc2b5505f2a6063a"
  },
  {
    "url": "assets/js/27.0bbf8e2d.js",
    "revision": "cf82355bd54d96235a84a8bffcbf2a11"
  },
  {
    "url": "assets/js/4.bead5732.js",
    "revision": "de4cd4316c4c8de8f0a43cf8d358ef6c"
  },
  {
    "url": "assets/js/5.75d2afbb.js",
    "revision": "9fe75ab05e70f48eb59f99fe7c573e43"
  },
  {
    "url": "assets/js/6.00515644.js",
    "revision": "f5bb86fb514cda7dd441ac78b5a74477"
  },
  {
    "url": "assets/js/7.ae34c5b9.js",
    "revision": "bee1effd3dd77de7b250e3b70abea4b8"
  },
  {
    "url": "assets/js/8.6e9599fe.js",
    "revision": "0be2d0161532c09a1736acfaa68e00ad"
  },
  {
    "url": "assets/js/9.98980224.js",
    "revision": "3e6975b85c2de99c55ca44f37d109044"
  },
  {
    "url": "assets/js/app.3c540c06.js",
    "revision": "d6bb4f77193c44ab859ee465a273f154"
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
    "revision": "84d419dd8b7c6de382ba00c7e0a176c0"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "8f7ae9b6d43c7b7dced63ffac3c68e14"
  },
  {
    "url": "categories/index.html",
    "revision": "d2214614acc688adf90fce59d888e4e5"
  },
  {
    "url": "categories/other/index.html",
    "revision": "fe96cf3bd150891dcf0b937737012e0a"
  },
  {
    "url": "categories/system/index.html",
    "revision": "3f33ef1a36625f4b6b2646fb13be5bb1"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "02be9250834be04d958a8c7370e10cd0"
  },
  {
    "url": "logo.png",
    "revision": "421974f67b152a05a618555d43d9ed31"
  },
  {
    "url": "tag/index.html",
    "revision": "fed39c54feff0b12d7ae43758ac496f5"
  },
  {
    "url": "tags/debian/index.html",
    "revision": "452eb9d0df0284edaafabc05f40668bd"
  },
  {
    "url": "tags/github/index.html",
    "revision": "2442c02f9a2f4c631af701142152b460"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "cd8c89f5a64a9c9807d4291a61bb96be"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "633ef350b6b8698aea8a5fa5ed1be833"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f40a55661cf7c44564bc4b0128ceda56"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "683a50c31798ddf1df3818674677e581"
  },
  {
    "url": "tags/个人信息/index.html",
    "revision": "76619f848fb373fa62c5aa9da58368bc"
  },
  {
    "url": "tags/图床/index.html",
    "revision": "170b81c835866fd7c723c42812595460"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "426b7e3f7ee6f0c8dc01a067831bfd1c"
  },
  {
    "url": "tags/系统软件/index.html",
    "revision": "772f3494b68e7da94544cf41603fc5d4"
  },
  {
    "url": "timeline/index.html",
    "revision": "f28cb9419e2330b06a19f0ff44b6bf81"
  },
  {
    "url": "views/backEnd/2020/050101.html",
    "revision": "47f4ce57540d07e83c5d300b88de8d48"
  },
  {
    "url": "views/backEnd/2020/050102.html",
    "revision": "d66aa6f3cb752bc016e2077bc1e146ab"
  },
  {
    "url": "views/backEnd/2020/050301.html",
    "revision": "f5b5f3ca4b85665cec94876aec117e6e"
  },
  {
    "url": "views/backEnd/2020/050302.html",
    "revision": "91cfe1cfb9ea742ee830820cc160a819"
  },
  {
    "url": "views/backEnd/2020/050501.html",
    "revision": "a4c266004f779fce32805a62161a19b2"
  },
  {
    "url": "views/frontEnd/2017/052401.html",
    "revision": "725393d3685646fdb102097c28d4a2b9"
  },
  {
    "url": "views/frontEnd/2018/081101.html",
    "revision": "17cedda3ce9ceda5a45de972312d0020"
  },
  {
    "url": "views/frontEnd/2018/111301.html",
    "revision": "81de02d93b8e53370b5608fee98a17f5"
  },
  {
    "url": "views/frontEnd/2019/072401.html",
    "revision": "dbb09cb732f80e4995f9ae5c62fa5c14"
  },
  {
    "url": "views/index.html",
    "revision": "2e0643fa9140dac9a897b37672829ded"
  },
  {
    "url": "views/other/2019/031201.html",
    "revision": "f78206b4844ce7fef403bfae1b0154c1"
  },
  {
    "url": "views/other/guide.html",
    "revision": "8a323ebc5e6479f307a9daf8a90b3e68"
  },
  {
    "url": "views/personalInfo/index.html",
    "revision": "e63238347f83e9f0ee071de541578139"
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
