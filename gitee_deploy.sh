#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build

# 进入生成的文件夹
cd public/

# init
git init
git add -A
git commit -m ':construction: deploy:'+$(date "+%Y-%m-%d-%H:%M:%S")

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@gitee.com:vaned/blog.git master

cd -

curl 'https://gitee.com/vaned/blog/pages/rebuild' -H 'authority: gitee.com' -H 'pragma: no-cache' -H 'cache-control: no-cache' -H 'accept: */*' -H 'origin: https://gitee.com' -H 'x-csrf-token: FZrNE8abMcWBZtcAwI9eQSDHXnJNaakGiyHIZv3RQB8=' -H 'x-requested-with: XMLHttpRequest' -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36' -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' -H 'sec-fetch-site: same-origin' -H 'sec-fetch-mode: cors' -H 'referer: https://gitee.com/vaned/blog/pages' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7,zh-TW;q=0.6,ja;q=0.5,de;q=0.4,sk;q=0.3,ca;q=0.2,vi;q=0.1,nl;q=0.1,mt;q=0.1,hmn;q=0.1,lb;q=0.1,fr;q=0.1' -H 'cookie: user_locale=zh-CN; oschina_new_user=false; Serve_State=true; remote_way=ssh; tz=Asia%2FShanghai; Hm_lvt_24f17767262929947cc3631f99bfd274=1587797415,1587822368,1587832804,1588318293; Hm_lpvt_24f17767262929947cc3631f99bfd274=1588318366; gitee-session-n=TkFyWE5Ka0xxbmg1emJ4eXNUVVJFQkNPV2ZreW11ZmdsTUEzK3M5WkdBNUI3aktkVnJNd1pNamh6U1k1aWFvTGZYRW9mcXJrUXF2UTlGdUg5TVlNQVk2d0xmNXNwc0kzOVdBMU1HdmdZQzNxZk5Ub2FqeW0xVlJmc1ExRUlVSHVBTDFNMW40ZEk5bmxreGxmVWxPdFNPMXVXcGIrbXZvMlJLUVQ0U0MzZXF3SEROT3RpNXFCdmJzNzFqTHRlQTJrUVZLbmhuL1d6T2thT2Uwenk4eTBNU0dla0RZaVJoN0had0JUWWs2Um9HWjFVZTluTm9tWFVwV1piZVdONGJFZHZpOU92RzJDa0wyRWYwdWZ1OE1QYzAzSmVDVWVjYjBhYnRnejlNM01wOWhSY3RlbUJpT1NEdUtTY3RtSW9qZGNxd2JwdzlIOGd6MXUraFNoeVEweVdDaGJHYjBCUGZtSmpHMTZHT0dsVVBtV3YwYzl3VzFNbkdoSTV3Ykk1blIxc05WV3ZXT3VKS213Q2sxRWxnMUJJYjI3WW8vVlpLU2NvSHhucFY5ZWpKR0JjclNPb1lSZVhkNFJDRHVmUXFqVC0tZXJCdDExVTR5T0pjU2NIdGtRTXJyZz09--53008ab0037f4df761090663ea7430c727a70f56' --data 'branch=master&build_directory=&force_https=false' --compressed > /dev/null 2>&1