(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1117:function(e,t,s){e.exports=s.p+"assets/img/3.6_1.207771f6.png"},1510:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"_3-6-查看数据对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-查看数据对象","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.6 查看数据对象")]),r("p",[e._v("在前面的章节中我们学过，当使用了 "),r("code",[e._v("use")]),e._v(" 对类进行引用之后，便可以对类进行直接调用。为了让接下来的命令可读性更高，我们使用 "),r("code",[e._v("use")]),e._v(" 来引用 "),r("code",[e._v("App\\Models\\User")]),e._v(" Eloquent 模型类：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(">>> use App\\Models\\User\n")])]),r("p",[e._v("这样我们就可以在后面的操作中直接调用 "),r("code",[e._v("User")]),e._v(" 而不是完整的类名 "),r("code",[e._v("App\\Models\\User")]),e._v("。")]),r("blockquote",[r("p",[e._v("注意：上面的 "),r("code",[e._v("use")]),e._v(" 引用命令只会对当前会话有效，如果中途退出了 Tinker 的话，需要重新再执行一次上面的命令，才能继续使用 "),r("code",[e._v("User")]),e._v(" 类名缩写。")])]),r("p",[e._v("使用 Eloquent 模型，能让我们更加轻松的与数据库进行交互。当我们要查找一个 id 为 1 的用户时，可以使用下面这种方法：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(">>> User::find(1)\n")])]),r("p",[e._v("当你传给 "),r("code",[e._v("find")]),e._v(" 方法的 id 不存在时，Tinker 将会返回 "),r("code",[e._v("null")]),e._v("：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(">>> User::find(5)\n=> null\n")])]),r("p",[e._v("如果你想在查询用户不存在时触发报错的话，可使用 findOrFail：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(">>> User::findOrFail(5)\nIlluminate\\Database\\Eloquent\\ModelNotFoundException with message 'No query results for model [App\\Models\\User] 5'\n")])]),r("p",[e._v("如果要查找用户表中的首个用户，可以使用 first 方法：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(">>> User::first()\n")])]),r("p",[e._v("我们还可以用 all 方法取出所有的用户数据：")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(">>> User::all()\n")])]),r("p",[r("img",{attrs:{src:s(1117),alt:"file"}})])])}],a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=n.exports}}]);