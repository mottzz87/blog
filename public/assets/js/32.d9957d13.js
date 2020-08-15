(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{527:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("本章我们学习如何快速搭建bt面板和一个纯洁的网站")])]),s._v(" "),t("h1",{attrs:{id:"环境："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境："}},[s._v("#")]),s._v(" 环境：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("debian 9")])]),s._v(" "),t("li",[t("code",[s._v("bbrp 4.14")])])]),s._v(" "),t("h1",{attrs:{id:"使用bt面板部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用bt面板部署"}},[s._v("#")]),s._v(" 使用bt面板部署")]),s._v(" "),t("h2",{attrs:{id:"_1-配置bt面板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置bt面板"}},[s._v("#")]),s._v(" 1.配置bt面板")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" install.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如需其他系统安装，请移步 "),t("a",{attrs:{href:"https://www.bt.cn/bbs/thread-19376-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("bt面板安装"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("安装完成后我们登陆 "),t("code",[s._v("bt面板")]),s._v(" 进行环境的安装。"),t("br"),s._v("\n选择使用LNMP的环境安装方式勾选如下信息:")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("Nginx 1.18")]),s._v("(当前最新)")]),s._v(" "),t("li",[t("code",[s._v("MySQL 5.6")]),s._v("(内存小于2G)")]),s._v(" "),t("li",[t("code",[s._v("PHP 7.4")]),s._v("(当前最新)")])]),s._v(" "),t("p",[s._v("选择 Fast 快速编译后进行安装。")]),s._v(" "),t("h2",{attrs:{id:"_2-安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装redis"}},[s._v("#")]),s._v(" 2.安装"),t("code",[s._v("Redis")])]),s._v(" "),t("p",[t("code",[s._v("bt面板")]),s._v(" > "),t("code",[s._v("应用商店")]),s._v(" > 找到"),t("code",[s._v("PHP 7.4")]),s._v("点击配置 > "),t("code",[s._v("安装扩展")]),s._v(" > "),t("code",[s._v("redis")]),s._v(" 进行安装。")]),s._v(" "),t("h2",{attrs:{id:"_3-解除被禁止的函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-解除被禁止的函数"}},[s._v("#")]),s._v(" 3.解除被禁止的函数")]),s._v(" "),t("p",[t("code",[s._v("bt面板")]),s._v(" > "),t("code",[s._v("应用商店")]),s._v(" > 找到"),t("code",[s._v("PHP 7.4")]),s._v("点击配置 > "),t("code",[s._v("禁用函数")]),s._v("   删除:"),t("br"),s._v(" "),t("code",[s._v("putenv")]),s._v(" "),t("code",[s._v("proc_open")]),s._v(" "),t("code",[s._v("pcntl_alarm")]),s._v(" "),t("code",[s._v("pcntl_signal")])]),s._v(" "),t("h2",{attrs:{id:"_4-添加站点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加站点"}},[s._v("#")]),s._v(" 4.添加站点")]),s._v(" "),t("p",[t("code",[s._v("bt面板")]),s._v(" > "),t("code",[s._v("网站")]),s._v(" > "),t("code",[s._v("添加站点。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("在 域名 填入你指向服务器的域名"),t("br"),s._v("\n在 数据库 选择"),t("code",[s._v("MySQL")]),s._v("\n在 "),t("code",[s._v("PHP")]),s._v(" 版本 选择"),t("code",[s._v("PHP-74")])])]),s._v(" "),t("p",[s._v("此时点击站点配置，找到"),t("code",[s._v("ssl")]),s._v("先利用宝塔生成免费证书。（如遇403失败，则按步骤向下安装，教程结尾贴出成功方式）")]),s._v(" "),t("h2",{attrs:{id:"_5-安装-v2board"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装-v2board"}},[s._v("#")]),s._v(" 5.安装 "),t("code",[s._v("V2board")])]),s._v(" "),t("p",[s._v("通过SSH登录到服务器后访问站点路径如："),t("code",[s._v("/www/wwwroot/你的站点域名")]),s._v("。")]),s._v(" "),t("p",[s._v("以下命令都需要在站点目录进行执行。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("chattr -i .user.ini\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf .htaccess "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(".html index.html .user.ini\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/v2board/v2board.git ./\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://getcomposer.org/download/1.9.0/composer.phar\nphp composer.phar "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nphp artisan v2board:install\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("根据提示完成安装")]),s._v(" "),t("h2",{attrs:{id:"_6-配置站点目录及伪静态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置站点目录及伪静态"}},[s._v("#")]),s._v(" 6.配置站点目录及伪静态")]),s._v(" "),t("p",[s._v("添加完成后编辑添加的站点 > "),t("code",[s._v("网站目录")]),s._v(" > "),t("code",[s._v("运行目录")]),s._v(" 选择"),t("code",[s._v("/public")]),s._v(" 保存。")]),s._v(" "),t("p",[s._v("添加完成后编辑添加的站点 > "),t("code",[s._v("重定向")]),s._v(" 填入伪静态信息。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("location /downloads "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \n  rewrite V2rayN.zip https://github.com/2dust/v2rayN/releases/latest/download/v2rayN-core.zip permanent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  rewrite ClashX.dmg https://github.com/yichengchen/clashX/releases/latest/download/ClashX.dmg permanent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  rewrite V2rayNG.apk https://github.com/2dust/v2rayNG/releases/latest permanent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    try_files "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.php"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$is_args")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$query_string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nlocation ~ .*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?$\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    expires 1h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    error_log off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    access_log /dev/null"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ~ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    deny all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"_7-配置定时任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置定时任务"}},[s._v("#")]),s._v(" 7.配置定时任务")]),s._v(" "),t("p",[t("code",[s._v("bt面板")]),s._v(" > "),t("code",[s._v("计划任务")]),s._v(" > "),t("code",[s._v("添加站点")]),s._v("。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("任务类型："),t("code",[s._v("shell脚本")]),t("br"),s._v("\n任务名称："),t("code",[s._v("V2board")]),t("br"),s._v("\n执行周期："),t("code",[s._v("N分钟 1分钟")]),t("br"),s._v("\n脚本内容："),t("code",[s._v("php /www/wwwroot/网站目录/artisan schedule:run")])])]),s._v(" "),t("p",[s._v("根据上述信息添加每1分钟执行一次的定时任务。")]),s._v(" "),t("h2",{attrs:{id:"_8-启动队列服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-启动队列服务"}},[s._v("#")]),s._v(" 8.启动队列服务")]),s._v(" "),t("p",[t("code",[s._v("V2board")]),s._v("的邮件系统强依赖队列服务，你想要使用邮件验证及群发邮件必须启动队列服务。下面以"),t("code",[s._v("nodejs")]),s._v("的"),t("code",[s._v("PM2")]),s._v("服务来守护队列服务作为演示。\n"),t("code",[s._v("bt面板")]),s._v(" > "),t("code",[s._v("软件商店")]),s._v(" > "),t("code",[s._v("应用搜索")]),t("br"),s._v("\n找到"),t("code",[s._v("PM2 Manager")]),s._v(" 进行安装，安装完成后按照如下填写")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("项目所在目录："),t("code",[s._v("shell脚本")]),t("br"),s._v("\n启动文件名称："),t("code",[s._v("pm2.yaml")]),t("br"),s._v("\n项目名称："),t("code",[s._v("V2board")])])]),s._v(" "),t("p",[s._v("填写后点击Add添加即可运行。当然你也可以使用pm2开机自启进行守护。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://rpm.nodesource.com/setup_10.x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodejs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g n\nn latest\nn\nnode -v\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g pm2\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/wwwroot/网站目录/\npm2 start pm2.yaml --name v2board\npm2 startup\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pm2 describe V2Board  查看进程具体情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pm2 restart V2Board   重启进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pm2 logs V2Board      查看进程日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pm2 startup           设置pm2开机自启")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"可能碰到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可能碰到的问题"}},[s._v("#")]),s._v(" 可能碰到的问题")]),s._v(" "),t("h3",{attrs:{id:"_1、500-server-error-解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、500-server-error-解决办法"}},[s._v("#")]),s._v(" 1、500 | Server Error 解决办法")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[s._v("检查站点根目录权限，递归755，保证目录有可写文件的权限，也有可能是"),t("code",[s._v("Redis")]),s._v("扩展没有安装或者"),t("code",[s._v("Redis")]),s._v("没有按照造成的。")])]),s._v(" "),t("ul",[t("li",[s._v("将"),t("code",[s._v(".env")]),s._v(" 的 "),t("code",[s._v("APP_DEBUG")]),s._v(" 改成"),t("code",[s._v("true")])]),s._v(" "),t("li",[s._v("清除缓存的配置 "),t("code",[s._v("php artisan config:clear")])]),s._v(" "),t("li",[s._v("根据错误信息，修复问题")]),s._v(" "),t("li",[s._v("将 "),t("code",[s._v(".env")]),s._v(" 的 "),t("code",[s._v("APP_DEBUG")]),s._v(" 改成 "),t("code",[s._v("false")])]),s._v(" "),t("li",[s._v("缓存配置 "),t("code",[s._v("php artisan config:cache")])])]),s._v(" "),t("h3",{attrs:{id:"_2、宝塔面板证书安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、宝塔面板证书安装"}},[s._v("#")]),s._v(" 2、宝塔面板证书安装")]),s._v(" "),t("p",[s._v("如一直遇到"),t("code",[s._v("403 forbidden")]),s._v("失败，则可以新建一个站点绑定当前站点的域名（当前域名解绑，换成其他不相关的域名暂绑即可，利用新建的站点重新生成站点证书，复制其"),t("code",[s._v("key")]),s._v("和"),t("code",[s._v("cert")]),s._v("，然后把暂绑定的域名还原回原域名）"),t("br"),s._v("\n重新点击本站的"),t("code",[s._v("ssl")]),s._v("，选择其他证书，将之前复制的秘钥和证书分别粘贴保存即可")]),s._v(" "),t("h3",{attrs:{id:"_3-邮箱正确配置（gmail为例）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-邮箱正确配置（gmail为例）"}},[s._v("#")]),s._v(" 3.邮箱正确配置（gmail为例）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_DRIVER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp.gmail.com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("465")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12345678")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_ENCRYPTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ssl\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_FROM_ADDRESS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx@gmail.com\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAIL_FROM_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("小美\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILGUN_DOMAIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILGUN_SECRET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"_4-聊天小秘书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-聊天小秘书"}},[s._v("#")]),s._v(" 4.聊天小秘书")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://app.crisp.chat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("前往官网"),t("OutboundLink")],1),s._v("，具体根据官网配置，这里不再赘述"),t("br"),s._v("\n配置完成后进入网站目录下："),t("code",[s._v("/www/wwwroot/网站目录/resource/views/app.blade.php")]),s._v(",贴下一下代码段"),t("br"),s._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hudiegu/cdn/img/2020/08/15/20200815192351.png",alt:"20200815192351"}}),t("br"),s._v("\n代码来源："),t("br"),s._v(" "),t("a",{attrs:{href:"https://app.crisp.chat/",target:"_blank",rel:"noopener noreferrer"}},[s._v("前往官网"),t("OutboundLink")],1),s._v(" > 设置 > 网站设置 > 显示整合 > 选择 "),t("code",[s._v("HTML")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hudiegu/cdn/img/20200815192744.png",alt:"20200815192744"}})]),s._v(" "),t("p",[s._v("enjoy it！"),t("br")]),s._v(" "),t("p",[s._v("以上便是本篇教程全部内容，如有疑问，欢迎留言交流")])])}),[],!1,null,null,null);a.default=e.exports}}]);