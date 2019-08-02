(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1336:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_3-6-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.6 Token")]),n("h2",{attrs:{id:"快速生成-jwt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速生成-jwt","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速生成 JWT")]),n("p",[t._v("我们现在可以通过登录，第三方登录，创建一个 "),n("code",[t._v("token")]),t._v(" 了，需要用户身份认证的接口，都需要我们携带 "),n("code",[t._v("token")]),t._v(" 进行访问。这时候就会有一个问题，"),n("code",[t._v("token")]),t._v(" 是有过期时间的，我们每次要调试接口时都需要重新创建一个 "),n("code",[t._v("token")]),t._v("；尝试不同身份用户调用的时候，就需要重为不用的用户创建 "),n("code",[t._v("token")]),t._v("，能不能有个快捷的方式创建 "),n("code",[t._v("token")]),t._v(" 供调试使用呢？这一节我们来解决这个问题。")]),n("h2",{attrs:{id:"_1-增加-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-增加-command","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 增加 command")]),n("p",[t._v("下面我们增加一个Artisan 命令。")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v(" $ php artisan make:command GenerateToken\n")])]),n("p",[t._v("修改文件")]),n("p",[n("em",[t._v("app/Console/Commands/GenerateToken.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Commands")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Command")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("GenerateToken")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Command")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$signature")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'larabbs:generate-token'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$description")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'快速为用户生成 token'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("__construct")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("parent")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("__construct")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("handle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$userId")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("ask")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'输入用户 id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" User"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("find")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$userId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'用户不存在'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 一年以后过期")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$ttl")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("365")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token number"}},[t._v("24")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),n("span",{attrs:{class:"token number"}},[t._v("60")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("info")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),n("span",{attrs:{class:"token package"}},[t._v("Auth")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("guard")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'api'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("setTTL")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$ttl")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("fromUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("输入用户id，查询id对应的用户，然后为该用户生成一个有效期为 1 年的 "),n("code",[t._v("token")]),t._v("。")]),n("p",[t._v("尝试执行该 Artisan 命令")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan larabbs:generate-token\n")])]),n("p",[n("img",{attrs:{src:a(697),alt:"file"}})]),n("h2",{attrs:{id:"_2-postman-增加变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-postman-增加变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. PostMan 增加变量")]),n("p",[t._v("还记得 PostMan 可以增加变量吗，创建一个 "),n("code",[t._v("jwt_user1")]),t._v(" 的变量，填入刚才创建的 "),n("code",[t._v("token")]),t._v("。\n"),n("img",{attrs:{src:a(696),alt:"file"}})]),n("p",[t._v("无论哪种方式设置 "),n("code",[t._v("Authorization")]),t._v(" 都可以方便的使用token了。输入 "),n("code",[t._v("{")]),t._v(" PostMan 会为我们列出可用的变量。\n"),n("img",{attrs:{src:a(695),alt:"file"}})]),n("p",[n("img",{attrs:{src:a(694),alt:"file"}})]),n("h2",{attrs:{id:"_3-提交代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 提交代码")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{attrs:{class:"token string"}},[t._v('"generate-token command"')]),t._v("\n")])])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=o.exports},694:function(t,s,a){t.exports=a.p+"assets/img/3.6_4.57a9eb01.png"},695:function(t,s,a){t.exports=a.p+"assets/img/3.6_3.9811b453.png"},696:function(t,s,a){t.exports=a.p+"assets/img/3.6_2.9a22e738.png"},697:function(t,s,a){t.exports=a.p+"assets/img/3.6_1.3a817982.png"}}]);