(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{510:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("相信使用"),a("code",[s._v("gitee Pages")]),s._v("的朋友一定碰到过，gitee在部署静态服务的时候仍然需要到"),a("code",[s._v("gitee Pages")]),s._v("页面点击更新、确认之后才能完成部署的情况，你是不是和我一样觉得那是脱裤子放屁（多此一举）————开个玩笑，存在即是合理，但对于程序员来说，能用技术实现的咱就不bb。懒，其实也是一种病。")])]),s._v(" "),a("p",[s._v("这里主要实现提交代码"),a("code",[s._v("gitee Pages")]),s._v("可以自动更新部署，下面进入教程：")]),s._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),a("p",[a("code",[s._v("gitee Pages")]),s._v("在点击更新后发送了两个请求:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gitee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pages"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rebuild\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gitee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pages\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("实际用于更新部署的只有rebuild那个接口，换句话说，想要更新部署其实只需要主动调用这个接口即可。下面我们来模拟调用环境")]),s._v(" "),a("h2",{attrs:{id:"脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),a("p",[s._v("这里我们使用更新、部署脚本来实现")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run build")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" public/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# init")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("':construction: deploy:'")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y-%m-%d-%H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@gitee.com:xxx/xxx.git master\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://gitee.com/xxx/blog/pages/rebuild'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'authority: gitee.com'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pragma: no-cache'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cache-control: no-cache'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: */*'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin: https://gitee.com'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x-csrf-token: FZrNE8abMcWBZtcAwI9eQSDHXnJNaakGiyHIZv3RQB8='")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x-requested-with: XMLHttpRequest'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'content-type: application/x-www-form-urlencoded; charset=UTF-8'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sec-fetch-site: same-origin'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sec-fetch-mode: cors'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'referer: https://gitee.com/xxx/blog/pages'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept-encoding: gzip, deflate, br'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept-language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7,zh-TW;q=0.6,ja;q=0.5,de;q=0.4,sk;q=0.3,ca;q=0.2,vi;q=0.1,nl;q=0.1,mt;q=0.1,hmn;q=0.1,lb;q=0.1,fr;q=0.1'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cookie: 123'")]),s._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'branch=master&build_directory=&force_https=false'")]),s._v(" --compressed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[a("code",[s._v("上述信息需要处理几个地方，项目实际调用的接口和项目gitee Pages的项目地址以及码云本地的cookie（F12查看），其他参数不需要做更改")])]),s._v(" "),a("h2",{attrs:{id:"_3-x-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-测试"}},[s._v("#")]),s._v(" 3.x 测试")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" ./sh/gitee-auto-pages.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("至此，需要99元/年的付费自动部署, 轻松收入囊中，美滋滋~~")]),s._v(" "),a("p",[s._v("以上便是本篇教程全部内容，如有疑问，欢迎留言交流")])])}),[],!1,null,null,null);t.default=n.exports}}]);