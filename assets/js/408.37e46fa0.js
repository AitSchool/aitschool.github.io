(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1548:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_8-1-微博curd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-微博curd","aria-hidden":"true"}},[t._v("#")]),t._v(" 8.1 微博CURD")]),a("p",[t._v("我们将在本章开始进行微博功能的开发，让用户可以在网站上发布微博，删除微博。下一章我们还将加入用户的关注功能，用户可以在首页上看到自己关注的人发布的微博动态。")]),a("h2",{attrs:{id:"基本模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本模型")]),a("p",[t._v("首先我们要先为微博创建一个数据表来储存微博数据，一条简单的微博至少需要拥有微博内容（"),a("code",[t._v("content")]),t._v("）和微博发布者（"),a("code",[t._v("user_id")]),t._v("）的信息。接下来让我们创建一个新的迁移文件来创建微博数据表。")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ php artisan make:migration create_statuses_table --create"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"statuses"')]),t._v("\n")])]),a("p",[t._v("这里我们把微博的表名设为 "),a("code",[t._v("statuses")]),t._v("，意为『动态』。")]),a("p",[t._v("打开新创建的微博迁移文件并加入以下内容。")]),a("p",[a("em",[t._v("database/migrations/[timestamp]_create_statuses_table.php")])]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blueprint")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Migrations"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Migration")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CreateStatusesTable")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Migration")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("up")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Schema"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'statuses'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("increments")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("text")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'content'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("integer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user_id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'created_at'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("timestamps")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("down")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Schema"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("dropIfExists")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'statuses'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("接下来让我们对新增的几个重要字段进行详细讲解。")]),a("p",[t._v("第一个字段为 "),a("code",[t._v("text")]),t._v(" 类型的 "),a("code",[t._v("content")]),t._v(" 字段，将用于储存微博的内容。")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("text")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'content'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("第二个字段为 "),a("code",[t._v("integer")]),t._v(" 类型的 "),a("code",[t._v("user_id")]),t._v(" 字段，用于储存微博发布者的个人 id，后面我们会借助 "),a("code",[t._v("user_id")]),t._v(" 来查找指定用户发布过的所有微博，因此为了提高查询效率，这里我们需要为该字段加上索引。")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("integer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user_id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("第三个则是为微博的创建时间添加索引，由于 "),a("code",[t._v("timestamps")]),t._v(" 方法会为微博数据表生成一个微博创建时间字段 "),a("code",[t._v("created_at")]),t._v(" 和一个微博更新时间字段 "),a("code",[t._v("updated_at")]),t._v("，因此在这里我们并不需要再手动创建。为微博的创建时间添加索引的目的是，后面我们会根据微博的创建时间进行倒序输出，并在页面上进行显示，使新建的微博能够排在比较靠前的位置。")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[t._v("$table")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'created_at'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("在我们定义好迁移文件之后，运行以下命令来执行迁移。")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ php artisan migrate\n")])]),a("p",[t._v("接着，我们还需要创建微博模型来跟数据库进行交互，创建的命令很简单。但请记住，所有我们新建的模型文件都要统一放置在 "),a("code",[t._v("app/Models")]),t._v(" 文件夹下，为此我们在创建一个新的模型对象时，需要在模型名称前面加上 "),a("code",[t._v("Models")]),t._v(" 目录。")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ php artisan make:model Models/Status\n")])]),a("h2",{attrs:{id:"用户和微博之间的关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户和微博之间的关联","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户和微博之间的关联")]),a("p",[t._v("前面我们讲过，在创建微博的时候，该微博必须拥有一个发布者，而该发布者可以拥有多条微博，则便是 "),a("a",{attrs:{href:"http://d.laravel-china.org/docs/5.5/eloquent-relationships",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据模型关联")]),t._v(" 中经常谈到的一对多关系。")]),a("p",[t._v("如果没有一对多的关系，我们需要这样来创建一条微博。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("App\\Models\\Status::create()\n")])]),a("p",[t._v("当我们将用户模型与微博模型进行一对多关联之后，我们得到了以下方法。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$user->statuses()->create()\n")])]),a("p",[t._v("这样在微博进行创建时便会自动关联与微博用户之间的关系，非常方便。")]),a("p",[t._v("Eloquent 模型让关联的管理和处理变得更加简单，同时也支持以下几种类型的关联：")]),a("ul",[a("li",[t._v("一对一")]),a("li",[t._v("一对多")]),a("li",[t._v("多对多")]),a("li",[t._v("远层一对多")]),a("li",[t._v("多态关联")]),a("li",[t._v("多态多对多关联")])]),a("p",[t._v("我们先从「一对多」来学习模型对应关系，下一章在构建用户粉丝关系的时候，我们会学习到「多对多」关联。我们可在模型中将 Eloquent 关联定义为函数，如下，我们可在微博模型中，指明一条微博属于一个用户。")]),a("p",[a("em",[t._v("app/Models/Status.php")])]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("App"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Eloquent"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Model")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Status")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Model")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("user")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("belongsTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在用户模型中，指明一个用户拥有多条微博。")]),a("p",[a("em",[t._v("app/Models/User.php")])]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("App"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Authenticatable")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("statuses")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$this")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("hasMany")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("需要注意的一点是，由于一个用户拥有多条微博，因此在用户模型中我们使用了微博动态的复数形式 "),a("code",[t._v("statuses")]),t._v(" 来作为定义的函数名。")])])}],!1,null,null,null);s.default=e.exports}}]);