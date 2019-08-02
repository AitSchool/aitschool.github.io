(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{1178:function(e,t,a){e.exports=a.p+"assets/img/3.3_5.e697cedd.png"},1179:function(e,t,a){e.exports=a.p+"assets/img/3.3_4.792c7c0d.png"},1180:function(e,t,a){e.exports=a.p+"assets/img/3.3_3.792c7c0d.png"},1181:function(e,t,a){e.exports=a.p+"assets/img/3.3_2.b8162145.png"},1182:function(e,t,a){e.exports=a.p+"assets/img/3.3_1.bcf7556b.png"},1593:function(e,t,a){"use strict";a.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"_3-3-查看数据库表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-查看数据库表","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 查看数据库表")]),r("h2",{attrs:{id:"数据库工具选择"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库工具选择","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据库工具选择")]),r("p",[e._v("开发时，我们使用的是 Homestead 虚拟机里的 MySQL 数据库。为了方便调试和查看数据，我们需要在主机中安装 MySQL 数据库查看工具，然后连接到 "),r("strong",[e._v("虚拟机里的")]),e._v(" MySQL 数据库服务器。")]),r("p",[e._v("Homestead 虚拟机里的 MySQL 数据库服务器连接方式为：")]),r("ul",[r("li",[e._v("Host: "),r("code",[e._v("127.0.0.1")])]),r("li",[e._v("Port: "),r("code",[e._v("33060")])]),r("li",[e._v("User: "),r("code",[e._v("homestead")])]),r("li",[e._v("Pass: "),r("code",[e._v("secret")])])]),r("blockquote",[r("p",[e._v("注意此处使用了 VirtualBox 虚拟机的『端口转发』功能，Homestead 脚本默认将本机端口 33060 转发到虚拟机里的 3306 端口。所以，只要我们连接本机的 33060 端口，即可读取虚拟机中的 MySQL 数据库。")])]),r("p",[e._v("接下来详细讲下 Mac 和 Win 平台下的 MySQL 数据库查看工具的安装。")]),r("h3",{attrs:{id:"_1-mac-os"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-mac-os","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Mac OS")]),r("p",[e._v("在 Mac 上，我们可以通过安装 "),r("a",{attrs:{href:"http://www.sequelpro.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("SequelPro")]),e._v(" （ "),r("a",{attrs:{href:"https://pan.baidu.com/s/1slWENqH",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度盘下载")]),e._v(" ）来进行数据库的一些操作，如查阅数据或删除数据。SequelPro 是一款开源的数据库软件，非常容易使用。")]),r("p",[e._v("打开 SequelPro 并进行如下的设置，Password 一栏需要填写 Homestead 的默认数据库密码："),r("code",[e._v("secret")]),e._v("。")]),r("p",[r("img",{attrs:{src:a(1182),alt:"file"}})]),r("p",[e._v("接着，点击 "),r("code",[e._v("Test connection")]),e._v(" 测试连接。测试通过后点击 "),r("code",[e._v("Add to Favorites")]),e._v(" 收藏此设置。最后，点击 "),r("code",[e._v("Connect")]),e._v(" 按钮即可连接到 Homestead 数据库。")]),r("h3",{attrs:{id:"_2-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Windows")]),r("p",[e._v("如果你是使用 Windows 机器进行开发，推荐使用  "),r("a",{attrs:{href:"http://www.heidisql.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("HeidiSQL")]),e._v("（ "),r("a",{attrs:{href:"https://pan.baidu.com/s/1jH6o5sa#list/path=%2F",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度盘下载")]),e._v("  ）。连接信息从上面读取。")]),r("p",[r("img",{attrs:{src:a(1181),alt:"file"}})]),r("h2",{attrs:{id:"数据库迁移"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库迁移","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据库迁移")]),r("p",[e._v("我们需要运行下面的命令来生成执行迁移，"),r("code",[e._v("migrate")]),e._v(" 命令会执行所有未被执行过的迁移。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ php artisan migrate\nMigration table created successfully.\nMigrated: 2014_10_12_000000_create_users_table\nMigrated: 2014_10_12_100000_create_password_resets_table\n")])]),r("p",[e._v("我们可以看到有两个迁移文件的迁移被成功执行。这代表我们已成功将两个表（用户表和重置密码表）添加到数据库中。")]),r("blockquote",[r("p",[e._v("注：我们一开始在创建 "),r("code",[e._v("sample")]),e._v(" 项目时，已经为其创建了数据库，并在 "),r("code",[e._v(".env")]),e._v(" 文件中做了配置，所以这里会直接使用这些数据库设置。")])]),r("p",[e._v("接下来查看下生成的数据库表：")]),r("p",[r("img",{attrs:{src:a(1180),alt:"file"}})]),r("p",[e._v("大家应该注意到了，执行了两个迁移文件后，我们多出来了一张 "),r("code",[e._v("migrations")]),e._v(" 表。这种表是在我们在第一次执行 "),r("code",[e._v("artisan migrate")]),e._v(" 命令时生成的，其作用是用来做迁移版本的记录。我们来看下表内的数据：")]),r("p",[r("img",{attrs:{src:a(1179),alt:"file"}})]),r("p",[r("code",[e._v("migrations")]),e._v(" 表有两个字段：")]),r("ul",[r("li",[r("code",[e._v("migration")]),e._v(" 是迁移文件的名称；")]),r("li",[r("code",[e._v("batch")]),e._v(" 是用来记录迁移对应的批次，以此来实现 "),r("strong",[e._v("回滚迁移")]),e._v(" 的功能。")])]),r("h2",{attrs:{id:"数据库回滚"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库回滚","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据库回滚")]),r("p",[e._v("在日常开发中，我们有时候也需要通过下面的方式来回滚到最近一次执行的迁移。回滚执行成功后，两个表都将被删除。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ php artisan migrate:rollback\n")])]),r("p",[e._v("回到数据库管理工具的视图，刷新以后会发现只剩下 "),r("code",[e._v("migrations")]),e._v(" 表：")]),r("p",[r("img",{attrs:{src:a(1178),alt:"file"}})]),r("p",[e._v("如果你尝试了回滚迁移的操作，请再次运行迁移，以方便后面章节的顺利进行。")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ php artisan migrate\n")])])])}],s=a(0),_=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=_.exports}}]);