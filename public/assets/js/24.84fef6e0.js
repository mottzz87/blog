(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{521:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("在本文中，你将学习如何在提高"),a("code",[s._v("github")]),s._v("代码克隆速度")])]),s._v(" "),a("p",[s._v("众所周知，因为某知名原因，天朝访问"),a("code",[s._v("github")]),s._v("克隆代码的时候，网速经常十多k每秒，越来越刷新作为一名资深程序员的崩溃的下限。"),a("br"),s._v("\n怎么解决呢，当然方法有很多，这里讲两种比较方便快速的方法：")]),s._v(" "),a("h2",{attrs:{id:"一、镜像克隆法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、镜像克隆法"}},[s._v("#")]),s._v(" 一、镜像克隆法")]),s._v(" "),a("p",[s._v("这种方法不需要借助其他类似"),a("code",[s._v("gitee")]),s._v("等外部网站，能够提高十倍速度访问"),a("code",[s._v("github")]),s._v("及clone项目（不要问我10倍怎么来的，蒙的)"),a("br"),s._v("\n正常克隆地址:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/somebody/something.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("镜像法")]),s._v(" 就是去"),a("code",[s._v("github")]),s._v(" 镜像网站克隆代码"),a("br"),s._v("\n他长下面这样：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com.cnpmjs.org/somebody/something.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("这样 是不是很简单呀（弱智脸）")])]),s._v(" "),a("h2",{attrs:{id:"二、socks-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、socks-5"}},[s._v("#")]),s._v(" 二、Socks 5")]),s._v(" "),a("p",[s._v("这种方法 效果同样很好，不需要依靠外部辅助，只要你有可以访问外网的梯子就可以。\n假设你已经有了梯子，打开你的面板，记住"),a("code",[s._v("Socks 5")]),s._v("代理的端口。\n我的面板长这样"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hudiegu/cdn/img/20200515013521.png",alt:"20200515013521"}})]),s._v(" "),a("h3",{attrs:{id:"_1-在cmd-iterm中输入以下指令-端口号为上面截图的端口号，对应填上你的就可以："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在cmd-iterm中输入以下指令-端口号为上面截图的端口号，对应填上你的就可以："}},[s._v("#")]),s._v(" 1. 在cmd/iTerm中输入以下指令,端口号为上面截图的端口号，对应填上你的就可以：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config --global http.proxy socks5://127.0.0.1:7891\ngit config --global https.proxy socks5://127.0.0.1:7891\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果要取消代理修改：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config --global --unset http.proxy\ngit config --global --unset https.proxy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",[s._v("上述方法挂了全局代理，但是如果要克隆码云、coding等国内仓库，速度就会很慢。更好的方法是只对github进行代理，不会影响国内仓库")])]),s._v(" "),a("h3",{attrs:{id:"_2-重新在cmd-iterm中输入以下指令，方法同上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-重新在cmd-iterm中输入以下指令，方法同上"}},[s._v("#")]),s._v(" 2. 重新在cmd/iTerm中输入以下指令，方法同上")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.https://github.com.proxy https://127.0.0.1:7891\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global https.https://github.com.proxy https://127.0.0.1:7891\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("enjoy it！"),a("br")]),s._v(" "),a("p",[s._v("以上便是本篇教程全部内容，如有疑问，欢迎留言交流")])])}),[],!1,null,null,null);t.default=n.exports}}]);