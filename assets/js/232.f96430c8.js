(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1285:function(t,d,_){"use strict";_.r(d);var v=_(0),r=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,d=t.$createElement,_=t._self._c||d;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"_1-1-larabbs-接口介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-larabbs-接口介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 LaraBBS 接口介绍")]),_("p",[t._v("LaraBBS 是一款论坛软件。Lara 是 Laravel 的缩写，BBS 是 Bulletin Board System 的缩写。此论坛软件将以 Laravel China 开发者社区作为基础原型来构建。")]),_("p",[t._v("在 L03 ，我们完成了 LaraBBS 接口的开发，使用 RESTFul 风格构建，参考了 Github 的 API 设计，在本课程中，我们将使用这些接口，来构建小程序，下面我们介绍一下本次课程会涉及到的接口。")]),_("h2",{attrs:{id:"用户登录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户登录","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户登录")]),_("table",[_("thead",[_("tr",[_("th",[t._v("功能")]),_("th",[t._v("请求方法")]),_("th",[t._v("接口")]),_("th",[t._v("是否实现")])])]),_("tbody",[_("tr",[_("td",[t._v("小程序用户登录")]),_("td",[t._v("POST")]),_("td",[t._v("/weapp/authorizations")]),_("td",[t._v("本教程中实现")])]),_("tr",[_("td",[t._v("Token刷新")]),_("td",[t._v("PUT")]),_("td",[t._v("/authorizations/current")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("退出登录 （Token删除）")]),_("td",[t._v("DELETE")]),_("td",[t._v("/authorizations/current")]),_("td",[t._v("已实现")])])])]),_("h2",{attrs:{id:"用户注册"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户注册")]),_("table",[_("thead",[_("tr",[_("th",[t._v("功能")]),_("th",[t._v("请求方法")]),_("th",[t._v("接口")]),_("th",[t._v("是否实现")])])]),_("tbody",[_("tr",[_("td",[t._v("获取图片验证码")]),_("td",[t._v("POST")]),_("td",[t._v("/captchas")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("获取短信验证码")]),_("td",[t._v("POST")]),_("td",[t._v("/verificationCodes")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("小程序用户注册")]),_("td",[t._v("POST")]),_("td",[t._v("/weapp/users")]),_("td",[t._v("本教程中实现")])])])]),_("h2",{attrs:{id:"用户个人信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户个人信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户个人信息")]),_("table",[_("thead",[_("tr",[_("th",[t._v("功能")]),_("th",[t._v("请求方法")]),_("th",[t._v("接口")]),_("th",[t._v("是否实现")])])]),_("tbody",[_("tr",[_("td",[t._v("登录用户信息")]),_("td",[t._v("GET")]),_("td",[t._v("/user")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("修改个人信息")]),_("td",[t._v("PUT")]),_("td",[t._v("/user")]),_("td",[t._v("本教程中修改")])]),_("tr",[_("td",[t._v("上传头像")]),_("td",[t._v("POST")]),_("td",[t._v("/images")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("权限列表")]),_("td",[t._v("GET")]),_("td",[t._v("/user/permissions")]),_("td",[t._v("已实现")])])])]),_("h2",{attrs:{id:"话题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#话题","aria-hidden":"true"}},[t._v("#")]),t._v(" 话题")]),_("table",[_("thead",[_("tr",[_("th",[t._v("功能")]),_("th",[t._v("请求方法")]),_("th",[t._v("接口")]),_("th",[t._v("是否实现")])])]),_("tbody",[_("tr",[_("td",[t._v("分类列表")]),_("td",[t._v("GET")]),_("td",[t._v("/categories")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("话题列表")]),_("td",[t._v("GET")]),_("td",[t._v("/topics")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("某个用户话题列表")]),_("td",[t._v("GET")]),_("td",[t._v("/users/:id/topics")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("删除话题")]),_("td",[t._v("DELETE")]),_("td",[t._v("/topics/:id")]),_("td",[t._v("已实现")])])])]),_("h2",{attrs:{id:"话题回复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#话题回复","aria-hidden":"true"}},[t._v("#")]),t._v(" 话题回复")]),_("table",[_("thead",[_("tr",[_("th",[t._v("功能")]),_("th",[t._v("请求方法")]),_("th",[t._v("接口")]),_("th",[t._v("是否实现")])])]),_("tbody",[_("tr",[_("td",[t._v("回复列表")]),_("td",[t._v("GET")]),_("td",[t._v("/topics/:id/replies")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("某个用户的回复列表")]),_("td",[t._v("GET")]),_("td",[t._v("/users/:id/replies")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("发布回复")]),_("td",[t._v("POST")]),_("td",[t._v("/topics/:id/replies")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("删除回复")]),_("td",[t._v("DELETE")]),_("td",[t._v("/topics/:id/topics")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("消息通知列表")]),_("td",[t._v("GET")]),_("td",[t._v("/user/notifications")]),_("td",[t._v("已实现")])]),_("tr",[_("td",[t._v("标记通知已读")]),_("td",[t._v("PUT")]),_("td",[t._v("/user/read/notifications")]),_("td",[t._v("本教程中修改")])])])])])}],!1,null,null,null);d.default=r.exports}}]);