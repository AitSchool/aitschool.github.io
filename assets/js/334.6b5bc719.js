(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1438:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_2-7-权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-权限控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.7 权限控制")]),n("h2",{attrs:{id:"说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),n("p",[t._v("现在的应用存在两个巨大的安全隐患：")]),n("ol",[n("li",[t._v("未登录用户可以访问 "),n("code",[t._v("edit")]),t._v(" 和 "),n("code",[t._v("update")]),t._v(" 动作，如果你退出登录，以游客身份访问 http://larabbs.test/users/1/edit ：")])]),n("p",[n("img",{attrs:{src:a(981),alt:"file"}})]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("登录用户可以更新其它用户的个人信息，如果我们再次注册一个用户：")])]),n("p",[n("img",{attrs:{src:a(980),alt:"file"}})]),n("p",[t._v("数据库里查看到我们新注册的用户 "),n("code",[t._v("aufree")]),t._v(" ，ID 为 2：")]),n("p",[n("img",{attrs:{src:a(979),alt:"file"}})]),n("p",[t._v("此时如果再次访问 http://larabbs.test/users/1/edit ：")]),n("p",[n("img",{attrs:{src:a(978),alt:"file"}})]),n("p",[t._v("登录状态的 2 号用户 Aufree 居然可以访问 1 号用户 Summer 的个人编辑页面，甚至是修改内容。")]),n("p",[t._v("接下来让我们针对这两个安全隐患进行修复。")]),n("h2",{attrs:{id:"限制游客访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#限制游客访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 限制游客访问")]),n("p",[n("a",{attrs:{href:"http://d.laravel-china.org/docs/5.5/middleware",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel 中间件 (Middleware)")]),t._v(" 为我们提供了一种非常棒的过滤机制来过滤进入应用的 HTTP 请求，例如，当我们使用 Auth 中间件来验证用户的身份时，如果用户未通过身份验证，则 Auth 中间件会把用户重定向到登录页面。如果用户通过了身份验证，则 Auth 中间件会通过此请求并接着往下执行。Laravel 框架默认为我们内置了一些中间件，例如身份验证、CSRF 保护等。所有的中间件文件都被放在项目的 "),n("code",[t._v("app/Http/Middleware")]),t._v(" 文件夹中。")]),n("p",[t._v("接下来让我们使用 Laravel 提供身份验证（Auth）中间件来过滤未登录用户的 "),n("code",[t._v("edit")]),t._v(", "),n("code",[t._v("update")]),t._v(" 动作：")]),n("p",[n("em",[t._v("app/Http/Controllers/UsersController.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("UsersController")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("__construct")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("middleware")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'auth'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'except'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'show'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("__construct")]),t._v(" 是 PHP 的构造器方法，当一个类对象被创建之前该方法将会被调用。我们在 "),n("code",[t._v("__construct")]),t._v(" 方法中调用了 "),n("code",[t._v("middleware")]),t._v(" 方法，该方法接收两个参数，第一个为中间件的名称，第二个为要进行过滤的动作。我们通过 "),n("code",[t._v("except")]),t._v(" 方法来设定 "),n("strong",[t._v("指定动作")]),t._v(" 不使用 Auth 中间件进行过滤，意为 —— 除了此处指定的动作以外，所有其他动作都必须登录用户才能访问，类似于黑名单的过滤机制。相反的还有 "),n("code",[t._v("only")]),t._v(" 白名单方法，将只过滤指定动作。我们提倡在控制器 Auth 中间件使用中，首选 "),n("code",[t._v("except")]),t._v(" 方法，这样的话，当你新增一个控制器方法时，默认是安全的，此为最佳实践。")]),n("p",[t._v("Laravel 提供的 Auth 中间件在过滤指定动作时，如该用户未通过身份验证（未登录用户），将会被重定向到登录页面：")]),n("p",[n("img",{attrs:{src:a(977),alt:"file"}})]),n("h2",{attrs:{id:"用户只能编辑自己的资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用户只能编辑自己的资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户只能编辑自己的资料")]),n("p",[t._v("在完成对未登录用户的限制之后，接下来我们要限制的是已登录用户的操作。当 id 为 2 的用户去尝试更新 id 为 1 的用户信息时，我们应该返回一个 403 禁止访问的异常。在 Laravel 中可以使用 "),n("a",{attrs:{href:"http://d.laravel-china.org/docs/5.5/authorization#policies",target:"_blank",rel:"noopener noreferrer"}},[t._v("授权策略 (Policy)")]),t._v(" 来对用户的操作权限进行验证，在用户未经授权进行操作时将返回 403 禁止访问的异常。")]),n("p",[t._v("我们可以使用以下命令来生成一个名为 "),n("code",[t._v("UserPolicy")]),t._v(" 的授权策略类文件，用于管理用户模型的授权。")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan make:policy UserPolicy\n")])]),n("p",[t._v("所有生成的授权策略文件都会被放置在 "),n("code",[t._v("app/Policies")]),t._v(" 文件夹下。")]),n("p",[t._v("让我们为默认生成的用户授权策略添加 "),n("code",[t._v("update")]),t._v(" 方法，用于用户更新时的权限验证。")]),n("p",[n("em",[t._v("app/Policies/UserPolicy.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Policies")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Access"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HandlesAuthorization")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("UserPolicy")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("HandlesAuthorization")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("update")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User "),n("span",{attrs:{class:"token variable"}},[t._v("$currentUser")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$currentUser")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("id")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("update")]),t._v(" 方法接收两个参数，第一个参数默认为当前登录用户实例，第二个参数则为要进行授权的用户实例。当两个 id 相同时，则代表两个用户是相同用户，用户通过授权，可以接着进行下一个操作。如果 id 不相同的话，将抛出 403 异常信息来拒绝访问。")]),n("p",[t._v("使用授权策略需要注意以下两点：")]),n("ol",[n("li",[t._v("我们并不需要检查 "),n("code",[t._v("$currentUser")]),t._v(" 是不是 NULL。未登录用户，框架会自动为其 "),n("strong",[t._v("所有权限")]),t._v(" 返回 "),n("code",[t._v("false")]),t._v("；")]),n("li",[t._v("调用时，默认情况下，我们 "),n("strong",[t._v("不需要")]),t._v(" 传递当前登录用户至该方法内，因为框架会自动加载当前登录用户（接着看下去，后面有例子）；")])]),n("p",[t._v("接下来我们还需要在 "),n("code",[t._v("AuthServiceProvider")]),t._v(" 类中对授权策略进行注册。"),n("code",[t._v("AuthServiceProvider")]),t._v(" 包含了一个 "),n("code",[t._v("policies")]),t._v(" 属性，该属性用于将各种模型对应到管理它们的授权策略上。我们需要为用户模型 "),n("code",[t._v("User")]),t._v(" 指定授权策略 "),n("code",[t._v("UserPolicy")]),t._v("。")]),n("p",[n("em",[t._v("app/Providers/AuthServiceProvider.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("AuthServiceProvider")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * The policy mappings for the application.\n     *\n     * @var array\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$policies")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'App\\Model'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'App\\Policies\\ModelPolicy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \\"),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v("  "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Policies"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("UserPolicy")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("授权策略定义完成之后，我们便可以在控制器中使用 "),n("code",[t._v("authorize")]),t._v(" 方法来检验用户是否授权。默认的 "),n("code",[t._v("App\\Http\\Controllers\\Controller")]),t._v(" 控制器基类包含了 Laravel 的 "),n("code",[t._v("AuthorizesRequests")]),t._v(" trait。此 trait 提供了 "),n("code",[t._v("authorize")]),t._v(" 方法，它可以被用于快速授权一个指定的行为，当无权限运行该行为时会抛出 HttpException。"),n("code",[t._v("authorize")]),t._v(" 方法接收两个参数，第一个为授权策略的名称，第二个为进行授权验证的数据。")]),n("p",[t._v("我们需要为 "),n("code",[t._v("edit")]),t._v(" 和 "),n("code",[t._v("update")]),t._v(" 方法加上这行：")]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("authorize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'update'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("blockquote",[n("p",[t._v("这里 "),n("code",[t._v("update")]),t._v(" 是指授权类里的 "),n("code",[t._v("update")]),t._v(" 授权方法，"),n("code",[t._v("$user")]),t._v(" 对应传参 "),n("code",[t._v("update")]),t._v(" 授权方法的第二个参数。正如上面定义 "),n("code",[t._v("update")]),t._v(" 授权方法时候提起的，调用时，默认情况下，我们 "),n("strong",[t._v("不需要")]),t._v(" 传递第一个参数，也就是当前登录用户至该方法内，因为框架会 "),n("strong",[t._v("自动")]),t._v(" 加载当前登录用户。")])]),n("p",[t._v("书写的位置如下：")]),n("p",[n("em",[t._v("app/Http/Controllers/UsersController.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controllers")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("UsersController")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    \n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("edit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("authorize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'update'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'users.edit'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("compact")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("update")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserRequest "),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ImageUploadHandler "),n("span",{attrs:{class:"token variable"}},[t._v("$uploader")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("authorize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'update'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("all")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("avatar")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$result")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$uploader")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("save")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$request")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("avatar")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'avatars'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("362")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$result")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token variable"}},[t._v("$data")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'avatar'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$result")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'path'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("update")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$data")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("redirect")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("route")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'users.show'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$user")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("with")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'success'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'个人资料更新成功！'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("在登录页面中，登录我们上面创建的  2 号用户 Aufree：")]),n("p",[n("img",{attrs:{src:a(976),alt:"file"}})]),n("p",[t._v("然后访问 1 号用户的修改资料页面 —— http://larabbs.test/users/1/edit ，系统将会拒绝访问：")]),n("p",[n("img",{attrs:{src:a(975),alt:"file"}})]),n("h2",{attrs:{id:"git-版本控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-版本控制","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 版本控制")]),n("p",[t._v("下面把代码纳入到版本管理：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{attrs:{class:"token string"}},[t._v('"Only authorized user can edit user profile"')]),t._v("\n")])])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=o.exports},975:function(t,s,a){t.exports=a.p+"assets/img/2.7_7.3aeb9894.png"},976:function(t,s,a){t.exports=a.p+"assets/img/2.7_6.1cd64218.png"},977:function(t,s,a){t.exports=a.p+"assets/img/2.7_5.a85810ce.png"},978:function(t,s,a){t.exports=a.p+"assets/img/2.7_4.4db65e12.png"},979:function(t,s,a){t.exports=a.p+"assets/img/2.7_3.46e80725.png"},980:function(t,s,a){t.exports=a.p+"assets/img/2.7_2.21b98abe.png"},981:function(t,s,a){t.exports=a.p+"assets/img/2.7_1.0838fcde.png"}}]);