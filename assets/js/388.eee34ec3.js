(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{1125:function(a,e,t){a.exports=t.p+"assets/img/3.1_1.7ec44833.png"},1518:function(a,e,t){"use strict";t.r(e);var r=[function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"_3-1-用户模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-用户模型","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 用户模型")]),r("h2",{attrs:{id:"mvc-的-m"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvc-的-m","aria-hidden":"true"}},[a._v("#")]),a._v(" MVC 的 M")]),r("p",[a._v("在前面讲的 MVC 模式中，我们一直没讲到其中的 M - Model（模型），本章我们将构建一个基本的用户模型来实现用户数据的存储，并了解 Laravel 如何对模型对象进行增删改查操作。后面我们还会在此用户模型基础上添加用户注册和登录功能，并对用户身份进行权限认证，让管理员用户可以对用户进行删除操作。接着我们还会构建一套用户账号激活和密码找回系统，只有成功进行邮箱激活的用户才能在网站上进行登录，激活成功后的用户如果出现密码丢失的情况，可以使用已认证的邮箱进行密码找回。")]),r("h2",{attrs:{id:"用户认证系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用户认证系统","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户认证系统")]),r("p",[a._v("事实上，Laravel 已默认为我们集成了一整套用户登录注册功能，并提供了一些非常方便的 API，让我们可以快速构建自己的用户认证系统。如果完全借助 Laravel 提供的用户认证系统，我们能够在短短几分钟便完成整个登录注册功能的开发，包括用户数据库的整个构建过程。")]),r("p",[a._v("但这不利于新手的学习，整个功能的具体实现代码被 Laravel 隐藏起来，像一个黑盒一样，你很难去理解这里面整个实现和调用过程。因此，本教程将不会完全借助 Laravel 提供的用户认证系统，而是借助 Laravel 提供的一些简便的 API 来独自开发一个完整的用户认证系统，帮助新手更好的学习用户认证系统的运行机制。但在实际项目的开发中，如果对注册登录功能的定制性不高，还是建议你使用 Laravel 默认提供的用户认证系统来操作。")]),r("h2",{attrs:{id:"eloquent-orm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eloquent-orm","aria-hidden":"true"}},[a._v("#")]),a._v(" Eloquent ORM")]),r("p",[a._v("在接下来几章要实现的用户注册功能需要用到数据库来进行数据存储，用于放置用户的基本信息。在这期间，还需要用到数据模型- Model，利用 Laravel 提供的 "),r("a",{attrs:{href:"http://d.laravel-china.org/docs/5.5/eloquent",target:"_blank",rel:"noopener noreferrer"}},[a._v("Eloquent ORM")]),a._v(" 跟数据库进行交互，实现用户数据的增删改查操作。Eloquent 提供了简洁优雅的 ActiveRecord 实现来跟数据库进行交互。Active Record 是一种领域模型模式，该模式由 Martin Fowler 在 2003 年出版的《企业应用架构模式》一书中进行了详细叙述并命名。其特点是一个模型类对应关系型数据库中的一个表，模型类的一个实例对应表中的一行记录。Active Record 最大优点是允许我们简单, 直观地操作数据层。")]),r("h2",{attrs:{id:"准备好舞台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备好舞台","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备好舞台")]),r("p",[a._v("现在让我们照例先来创建一个新分支。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("$ "),r("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master\n$ "),r("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -b modeling-users\n")])]),r("p",[r("img",{attrs:{src:t(1125),alt:"file"}})])])}],s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);e.default=n.exports}}]);