(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1594:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_3-2-数据库迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-数据库迁移","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 数据库迁移")]),s("h2",{attrs:{id:"什么是数据库迁移？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库迁移？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是数据库迁移？")]),s("p",[t._v("在 Laravel 中，我们使用 "),s("a",{attrs:{href:"https://laravel-china.org/docs/laravel/5.7/migrations/2291",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库迁移")]),t._v(" 来管理数据库表结构，迁移就像是数据库中的版本控制，它让团队成员之间能够轻松的修改跟共享应用程序的数据库结构，而不用担心并行更新数据结构而造成冲突等问题。同时也让 Laravel 项目的部署变得很方便。不仅如此，Migration 建表要比直接手动创建表或者 "),s("code",[t._v(".sql")]),t._v(" 文件具备额外的管理数据库的功能，如：回滚/重置/更新等。Migration 的建表方法大部分情况下能兼容 MySQL, PostgreSQL, SQLite 甚至是 Oracle 等主流数据库系统。")]),s("p",[t._v("总结下迁移的好处：")]),s("ul",[s("li",[t._v("多人并行开发；")]),s("li",[t._v("代码版本管理；")]),s("li",[t._v("数据库版本控制 —— 如：回滚/重置/更新等；")]),s("li",[t._v("兼容多种数据库系统；")]),s("li",[t._v("部署方便。")])]),s("h2",{attrs:{id:"默认迁移文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认迁移文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 默认迁移文件")]),s("p",[t._v("所有创建的迁移文件都被统一放在 "),s("code",[t._v("database/migrations")]),t._v(" 文件夹里。打开该文件夹我们可以看到，Laravel 已默认为我们创建好了两个迁移文件：")]),s("ul",[s("li",[t._v("database/migrations/2014_10_12_000000_create_users_table.php")]),s("li",[t._v("database/migrations/2014_10_12_100000_create_password_resets_table.php")])]),s("p",[t._v("从上面迁移文件的命名可以看出，Laravel 在创建迁移文件时会默认在生成的文件名前面加上一个当前时间戳，用于指明该文件的创建时间。加上时间戳来命名迁移文件的好处在于，当我们进行团队协作开发时，如果有多个成员生成了相同名字的迁移文件，也不会出现文件冲突的问题，除非这几个成员都在同一时间生成了相同名称的迁移文件，不过这种概率太低了，基本可以忽略不计。")]),s("p",[t._v("Laravel 默认创建的两个迁移文件，一个用于构建用户表，一个用于构建密码重置表。密码重置的功能我们在后面章节再进行讲解，本章我们先来看下 Laravel 为我们生成的创建用户迁移文件里面都包含了什么内容。")]),s("p",[s("em",[t._v("database/migrations/2014_10_12_000000_create_users_table.php")])]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facades"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Schema"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Blueprint")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token package"}},[t._v("Illuminate"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Migrations"),s("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Migration")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CreateUsersTable")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Migration")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Run the migrations.\n     *\n     * @return void\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("up")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Schema"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Blueprint "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("increments")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("unique")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("timestamp")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email_verified_at'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("nullable")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("rememberToken")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("timestamps")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n     * Reverse the migrations.\n     *\n     * @return void\n     */")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("down")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Schema"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("dropIfExists")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到在该文件里面定义了一个 "),s("code",[t._v("CreateUsersTable")]),t._v(" 类，并继承自 "),s("code",[t._v("Migration")]),t._v(" 基类。CreateUsersTable 有两个方法  "),s("code",[t._v("up")]),t._v(" 和 "),s("code",[t._v("down")]),t._v(" ：")]),s("ul",[s("li",[t._v("当我们运行迁移时，"),s("code",[t._v("up")]),t._v(" 方法会被调用；")]),s("li",[t._v("当我们回滚迁移时，"),s("code",[t._v("down")]),t._v(" 方法会被调用。")])]),s("h2",{attrs:{id:"创建数据库表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库表","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建数据库表")]),s("p",[t._v("在 "),s("code",[t._v("up")]),t._v(" 方法里面，我们通过调用 "),s("code",[t._v("Schema")]),t._v(" 类的 "),s("code",[t._v("create")]),t._v(" 方法来创建 "),s("code",[t._v("users")]),t._v(" 表：")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Schema::create('users', function (Blueprint $table) {\n    ...\n});\n")])]),s("p",[s("code",[t._v("create")]),t._v(" 方法会接收两个参数：一个是数据表的名称，另一个则是接收 "),s("code",[t._v("$table")]),t._v("（Blueprint 实例）的闭包。")]),s("h2",{attrs:{id:"定义数据表字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义数据表字段","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义数据表字段")]),s("p",[t._v("CreateUsersTable 类中通过 Blueprint 的实例 "),s("code",[t._v("$table")]),t._v(" 为 "),s("code",[t._v("users")]),t._v(" 表创建所需的数据库字段。接下来让我们来详细讲解 Blueprint 实例 "),s("code",[t._v("$table")]),t._v("  的基本用法：")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("increments")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("由 "),s("code",[t._v("increments")]),t._v(" 方法创建了一个 "),s("code",[t._v("integer")]),t._v(" 类型的自增长 id。")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("由 "),s("code",[t._v("string")]),t._v(" 方法创建了一个 "),s("code",[t._v("name")]),t._v(" 字段，用于保存用户名称。")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("unique")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("由 "),s("code",[t._v("string")]),t._v(" 方法创建了一个 "),s("code",[t._v("email")]),t._v(" 字段，且在最后指定该字段的值为唯一值，用于保存用户邮箱。")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'password'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("60")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("由 "),s("code",[t._v("string")]),t._v(" 方法创建了一个 "),s("code",[t._v("password")]),t._v(" 字段，且在 "),s("code",[t._v("string")]),t._v(" 方法中指定保存的值最大长度为 60，用于保存用户密码。")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("rememberToken")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("由 "),s("code",[t._v("rememberToken")]),t._v(" 方法为用户创建一个 "),s("code",[t._v("remember_token")]),t._v(" 字段，用于保存『记住我』的相关信息。")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[t._v("$table")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("timestamps")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("由 "),s("code",[t._v("timestamps")]),t._v(" 方法创建了一个 "),s("code",[t._v("created_at")]),t._v(" 和一个 "),s("code",[t._v("updated_at")]),t._v(" 字段，分别用于保存用户的创建时间和更新时间。")]),s("p",[t._v("最终该迁移文件生成的用户表字段信息所下所示：")]),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名称")]),s("th",[t._v("字段类型")])])]),s("tbody",[s("tr",[s("td",[t._v("id")]),s("td",[t._v("integer")])]),s("tr",[s("td",[t._v("name")]),s("td",[t._v("string")])]),s("tr",[s("td",[t._v("email")]),s("td",[t._v("string")])]),s("tr",[s("td",[t._v("password")]),s("td",[t._v("string")])]),s("tr",[s("td",[t._v("remember_token")]),s("td",[t._v("string")])]),s("tr",[s("td",[t._v("created_at")]),s("td",[t._v("datetime")])]),s("tr",[s("td",[t._v("updated_at")]),s("td",[t._v("datetime")])])])]),s("p",[t._v("若要了解更多 $table 的可用方法，可查阅 "),s("a",{attrs:{href:"http://d.laravel-china.org/docs/5.5/migrations#creating-tables",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档")]),t._v("。")]),s("h2",{attrs:{id:"回滚迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回滚迁移","aria-hidden":"true"}},[t._v("#")]),t._v(" 回滚迁移")]),s("p",[s("code",[t._v("down")]),t._v(" 方法会在回滚命令发起时被调用，是 "),s("code",[t._v("up")]),t._v(" 方法的逆向操作。在上面的代码中，"),s("code",[t._v("up")]),t._v(" 创建了 "),s("code",[t._v("users")]),t._v(" 表，那么这里将会通过调用 "),s("code",[t._v("Schema")]),t._v(" 的 "),s("code",[t._v("drop")]),t._v(" 方法来删除 "),s("code",[t._v("users")]),t._v(" 表。")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Schema"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("dropIfExists")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);