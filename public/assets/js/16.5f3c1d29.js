(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{509:function(s,a,n){"use strict";n.r(a);var t=n(2),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[s._v("目前国外VPS通过搭建工具直接进行科学上网，网速不是那么给力，致使很多VPS需要通过国内服务器中转下流量改善线路才能把速度提上去。如何用Brook中转(端口转发) "),n("code",[s._v("(Debian/Ubuntu)")]),s._v(",这里说下通过Brook脚本中转加速上网的方法，本脚本可转发"),n("code",[s._v("TCP/UDP")]),s._v("流量，支持动态域名转发，不支持端口段转发，但可以添加多个单端口转发。")])]),s._v(" "),n("h2",{attrs:{id:"_1-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-x"}},[s._v("#")]),s._v(" 1.x")]),s._v(" "),n("p",[s._v("通过Xshell连接上服务器，使用root用户登录vps服务器，命令行输入下方命令下载执行脚本：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/mottzz87/brook.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/brook\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x brook-pf-mod.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./brook-pf-mod.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这样就可以调出一键脚本了。")]),s._v(" "),n("h2",{attrs:{id:"_2-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-x"}},[s._v("#")]),s._v(" 2.x")]),s._v(" "),n("p",[s._v("输入1、4、7 分别安装、开启和设置brook")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("Brook 端口转发 一键管理脚本修改版"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DDNS支持"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("v1.0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(". 升级脚本\n————————————\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 安装 Brook\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 更新 Brook\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 卸载 Brook\n————————————\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 启动 Brook\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(". 停止 Brook\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(". 重启 Brook\n————————————\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(". 设置 Brook 端口转发\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(". 查看 Brook 端口转发\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(". 查看 Brook 日志\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(". 监控 Brook 运行状态"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如果使用ddns必须打开"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n————————————\n\n 当前状态: 已安装 并 已启动\n\n 请输入数字 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("这时候你就得看你是ddns还是ip了，如果是ddns就输入0，如果是ip就输入1")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("当前端口转发总数:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  当前服务器IP:  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("199.255")]),s._v(".97.35 \n本地监听端口: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\t 被转发IP: xxxx\t 被转发端口: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\t 状态: 启用\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_3-x"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-x"}},[s._v("#")]),s._v(" 3.x")]),s._v(" "),n("p",[s._v("我们这里用1做演示，这里需要输入本地监听端口，如果是普通vps就随便选一个可用的端口就可以，如果是nat就选一个你拥有的端口"),n("br"),s._v("\n被转发的ip就是你需要转发到那台服务器的ip (如果选ddns这里就填你的或者商家提供的ddns地址)"),n("br"),s._v("\n被转发的端口就是你上面填ip的服务器的代理端口。")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("本地监听端口：中转服务器要使用的端口，被转发IP：落地服务器的IP地址，被转发端口：落地服务器的端口号\n按照自己的设置好后然后回车或输入Y进行启动端口转发功能，或继续添加单个端口号进行添加其它需要转发的落地服务器。\n客户端使用方法：跟 iptables 方法一样，只需要在SS/SSR客户端把IP端口修改为中转服务器的IP地址和端口即可。")])]),s._v(" "),n("p",[s._v("以上便是本篇教程全部内容，如有疑问，欢迎留言交流")])])}),[],!1,null,null,null);a.default=r.exports}}]);