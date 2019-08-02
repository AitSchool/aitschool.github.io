(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1282:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_1-3-微信开发者工具介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-微信开发者工具介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 微信开发者工具介绍")]),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开发者工具")]),t._v(" 是官方发布的微信开发 SDK，可以帮助我们简单、高效地开发和调试小程序。")]),s("p",[t._v("本小节中，我们将带你安装和配置微信开发者工具，并从这里开始开发我们的  "),s("code",[t._v("larabbs-weapp")]),t._v(" 项目。")]),s("h2",{attrs:{id:"_1-安装开发者工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装开发者工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 安装开发者工具")]),s("p",[t._v("微信开发者工具目前只有 Windows 版和 Mac 版，在 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v(" 下载你需要的版本，直接安装即可。")]),s("blockquote",[s("p",[t._v("尽量保持微信开发者工具为最新版本，避免因为工具的原因造成误解。本教程使用的是 Mac 版本的开发者工具进行演示，可能某些地方会与 Windows 的不一致，如果有疑惑，可以直接在课程下方进行提问。")])]),s("p",[t._v("安装成功后，打开微信开发者工具，使用微信扫描二维码登录，然后选择小程序项目。")]),s("p",[s("img",{attrs:{src:a(581),alt:"file"}})]),s("h2",{attrs:{id:"_2-新建小程序项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建小程序项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 新建小程序项目")]),s("p",[t._v("我们会进入小程序项目的管理界面，点击加号添加项目。")]),s("p",[s("img",{attrs:{src:a(580),alt:"file"}})]),s("p",[t._v("可以看到添加项目需要一个项目目录，小程序 AppID，以及项目名称。")]),s("p",[s("img",{attrs:{src:a(579),alt:"file"}})]),s("p",[t._v("接下来我们需前往 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/wxopen/initprofile?action=home&lang=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序控制台")]),t._v(" 获取 "),s("code",[t._v("AppID")]),t._v("，使用上一节注册的个人小程序账号登录微信公众平台，进入『设置』->『开发设置』，即可看到小程序的 "),s("code",[t._v("AppID")]),t._v("。")]),s("p",[s("img",{attrs:{src:a(578),alt:"file"}})]),s("p",[t._v("选择 "),s("code",[t._v("larabbs-weapp")]),t._v(" 目录，填写 "),s("code",[t._v("AppID")]),t._v(" 和 "),s("code",[t._v("项目名称")]),t._v("：")]),s("p",[s("img",{attrs:{src:a(577),alt:"file"}})]),s("blockquote",[s("p",[t._v("如果是在 Windows 环境下进行开发，这里可能会添加不成功，遇到报错 "),s("strong",[t._v("『请选择空目录或含 app.json / project.config.json 的目录创建项目』")]),t._v("，原因可能是 Windows 版本的开发者工具并未自动忽略目录中的 "),s("code",[t._v(".git")]),t._v(" 目录，这时可以执行以下命令 "),s("code",[t._v("$ mv ~/Code/larabbs-weapp/.git ~/Code/larabbs.git")]),t._v(" 将 .git 目录暂时移出目录，点击确定添加成功后，再执行 "),s("code",[t._v("$ mv ~/Code/larabbs.git ~/Code/larabbs-weapp/.git")]),t._v(" 命令，将 .git 目录移回目录。")])]),s("p",[t._v("创建成功后我们会看到如下界面：")]),s("p",[s("img",{attrs:{src:a(576),alt:"file"}})]),s("p",[t._v("再使用以下命令看看开发者工具生成了什么：")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al\n")])]),s("p",[t._v("输出结果如下：")]),s("p",[s("img",{attrs:{src:a(575),alt:"file"}})]),s("p",[t._v("由于没有创建模板代码，所以现在是个空项目，项目中只有开发者工具为我们生成的 "),s("code",[t._v("project.config.json")]),t._v(" 工具配置文件，我们在开发者工具上做的任何配置都会写入到这个文件，当我们重新安装工具或者换电脑工作时，这个配置文件可以方便我们恢复之前的工具配置。")]),s("p",[t._v("微信开发者工具针对小程序项目主要有以下几个区域：")]),s("ul",[s("li",[t._v("模拟器 —— 可以模拟不同手机，不同屏幕大小，在线断网等情况；")]),s("li",[t._v("编辑器 —— 直接编辑代码，保存后可自动编译生效；")]),s("li",[t._v("调试器 —— 进行程序调试，网络请求等代码调试，类似浏览器的开发者工具；")])]),s("h2",{attrs:{id:"代码版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码版本控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码版本控制")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/Code/larabbs-weapp\n$ "),s("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n$ "),s("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{attrs:{class:"token string"}},[t._v("'add project.config.json'")]),t._v("\n$ "),s("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])])}],r=a(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);e.default=n.exports},575:function(t,e,a){t.exports=a.p+"assets/img/1.3_7.4f205479.png"},576:function(t,e,a){t.exports=a.p+"assets/img/1.3_6.52b65e1d.png"},577:function(t,e,a){t.exports=a.p+"assets/img/1.3_5.281f9895.png"},578:function(t,e,a){t.exports=a.p+"assets/img/1.3_4.e88eebee.png"},579:function(t,e,a){t.exports=a.p+"assets/img/1.3_3.7b85a585.png"},580:function(t,e,a){t.exports=a.p+"assets/img/1.3_2.0e09895e.png"},581:function(t,e,a){t.exports=a.p+"assets/img/1.3_1.9c0d9522.png"}}]);