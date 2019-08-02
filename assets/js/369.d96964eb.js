(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{1097:function(t,s,a){t.exports=a.p+"assets/img/5.5_2.ce5571c2.png"},1098:function(t,s,a){t.exports=a.p+"assets/img/5.5_1.40473ada.png"},1489:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_5-5-记住我"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-记住我","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.5 记住我")]),n("p",[t._v("本章节最后要实现的一个功能是『记住我』功能，在 Laravel 的默认配置中，如果用户登录后没有使用『记住我』功能，则登录状态默认只会被记住两个小时。如果使用了『记住我』功能，则登录状态会被延长到五年。我们可以通过使用 Laravel 提供的『记住我』功能来保存一个记忆令牌，用于长时间记录用户登录的状态。而 Laravel 已默认为用户生成的迁移文件中已经包含了 "),n("code",[t._v("remember_token")]),t._v(" 字段，该字段将用于保存『记住我』令牌。")]),n("p",[t._v("首先让我们修改登录视图，加上『记住我』复选框。")]),n("p",[n("em",[t._v("resources/views/sessions/create.blade.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("@"),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'layouts.default'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),n("span",{attrs:{class:"token function"}},[t._v("section")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'登录'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n@"),n("span",{attrs:{class:"token function"}},[t._v("section")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'content'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"col-md-offset-2 col-md-8"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"panel panel-default"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"panel-heading"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("h5"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("登录"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("h5"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"panel-body"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      @"),n("span",{attrs:{class:"token keyword"}},[t._v("include")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'shared._errors'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("form method"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"POST"')]),t._v(" action"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ route('login') }}\"")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("csrf_field")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"form-group"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("label "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"email"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("邮箱："),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("label"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"text"')]),t._v(" name"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"email"')]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"form-control"')]),t._v(" value"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ old('email') }}\"")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"form-group"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("label "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"password"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("密码："),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("label"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"password"')]),t._v(" name"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"password"')]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"form-control"')]),t._v(" value"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ old('password') }}\"")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"checkbox"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("label"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"checkbox"')]),t._v(" name"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"remember"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 记住我"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("label"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n          "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"submit"')]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"btn btn-primary"')]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("登录"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n      "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("hr"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n      "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("还没账号？"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v("\"{{ ('signup') }}\"")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("现在注册！"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n@stop\n")])]),n("p",[n("img",{attrs:{src:a(1098),alt:"file"}})]),n("p",[t._v("前面我们介绍过的 "),n("code",[t._v("Auth::attempt()")]),t._v(" 方法可接收两个参数，第一个参数为需要进行用户身份认证的数组，第二个参数为是否为用户开启『记住我』功能的布尔值。接下来让我们修改会话控制器中的 "),n("code",[t._v("store")]),t._v(" 方法，为 "),n("code",[t._v("Auth::attempt()")]),t._v(" 添加『记住我』参数。")]),n("p",[n("em",[t._v("app/Http/Controllers/SessionsController.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SessionsController")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("store")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Request "),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{attrs:{class:"token variable"}},[t._v("$credentials")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("validate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required|email|max:255'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),t._v("\n       "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n       "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Auth"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("attempt")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$credentials")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("has")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'remember'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),n("span",{attrs:{class:"token function"}},[t._v("session")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("flash")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'success'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'欢迎回来！'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("redirect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("route")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'users.show'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Auth"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("user")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),n("span",{attrs:{class:"token function"}},[t._v("session")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("flash")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'danger'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'很抱歉，您的邮箱和密码不匹配'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("redirect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("back")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("至此，『记住我』功能已被成功添加，使用 Laravel 开发一切就是如此简单。")]),n("p",[n("img",{attrs:{src:a(1097),alt:"file"}})])])}],o=a(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports}}]);