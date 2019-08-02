(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1222:function(a,s,t){"use strict";t.r(s);var e=[function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"_1-2-创建应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-创建应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 创建应用")]),e("h2",{attrs:{id:"做好准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#做好准备","aria-hidden":"true"}},[a._v("#")]),a._v(" 做好准备")]),e("p",[a._v("由于我们接下来的开发都会在 Homestead 上进行，因此，在开始本章教程之前，请保证你的 Homestead 虚拟机已配置完成。")]),e("p",[a._v("首先我们需要在 Homestead 的配置文件中做好站点配置和数据库配置：")]),e("p",[e("em",[a._v("~/Homestead/Homestead.yaml")])]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sites:\n    - map: shop.test\n      to: /home/vagrant/Code/laravel-shop/public\n    "),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n    "),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n    "),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\ndatabases:\n    - homestead\n    - laravel-shop\n")])]),e("p",[a._v("我们这个项目将使用 "),e("code",[a._v("laravel-shop")]),a._v(" 这个数据库。")]),e("p",[a._v("然后还需要配置本机 hosts 文件，将 "),e("code",[a._v("shop.test")]),a._v(" 指向 Homestead 虚拟机 IP，具体操作请参考 Laravel 开发环境部署。")]),e("p",[a._v("使用下面命令来启动和登录 Homestead：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/Homestead "),e("span",{attrs:{class:"token operator"}},[a._v("&&")]),a._v(" vagrant provision "),e("span",{attrs:{class:"token operator"}},[a._v("&&")]),a._v(" vagrant up\n"),e("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" vagrant "),e("span",{attrs:{class:"token function"}},[a._v("ssh")]),a._v("\n")])]),e("p",[a._v("在虚拟机中进入 Code 文件夹：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/Code\n")])]),e("blockquote",[e("p",[a._v("注意：本书中因为虚拟机的存在，我们会有两个运行命令行的环境，一个是主机，另一个是 Homestead 虚拟机。我们会在命令的前面使用『命令行提示符』来区分主机和 Homestead。请记住以 "),e("code",[a._v(">")]),a._v(" 开头的命令是运行在主机里，"),e("code",[a._v("$")]),a._v(" 开头的命令是运行在 Homestead 虚拟机里。详见 "),e("a",{attrs:{href:"https://laravel-china.org/courses/laravel-intermediate-training-5.5/626/writing-convention#%E5%91%BD%E4%BB%A4%E8%A1%8C%E6%8F%90%E7%A4%BA%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[a._v("写作约定 - 命令行提示符")]),a._v("。")])]),e("h2",{attrs:{id:"composer-加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer-加速","aria-hidden":"true"}},[a._v("#")]),a._v(" Composer 加速")]),e("p",[a._v("在创建项目之前，我们先在虚拟机中运行以下命令来实现 "),e("a",{attrs:{href:"https://laravel-china.org/composer",target:"_blank",rel:"noopener noreferrer"}},[a._v("Composer 安装加速")]),a._v(" ：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ composer config -g repo.packagist composer https://packagist.laravel-china.org\n")])]),e("h2",{attrs:{id:"创建-laravel-shop-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-laravel-shop-项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建 Laravel-Shop 项目")]),e("p",[a._v("下面让我们来使用 Composer 创建一个名为 Laravel-Shop 的应用，后面我们将基于这个应用做更多的功能完善：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/Code\n$ composer create-project laravel/laravel laravel-shop --prefer-dist "),e("span",{attrs:{class:"token string"}},[a._v('"5.5.*"')]),a._v("\n")])]),e("p",[e("img",{attrs:{src:t(445),alt:"file"}})]),e("p",[a._v("中间省略掉安装细节...")]),e("p",[e("img",{attrs:{src:t(444),alt:"file"}})]),e("h2",{attrs:{id:"配置-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-env","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置 .env")]),e("p",[a._v("创建项目的时候 Laravel 也创建了一份默认的 "),e("code",[a._v(".env")]),a._v(" 文件，我们只需要以下调整几个字段：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("APP_NAME"),e("span",{attrs:{class:"token operator"}},[a._v("=")]),e("span",{attrs:{class:"token string"}},[a._v('"Laravel Shop"')]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\nAPP_URL"),e("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("http://shop.test\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\nDB_DATABASE"),e("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v("laravel-shop\n")])]),e("blockquote",[e("p",[a._v("如果环境变量的值中包含空格，需要用双引号将值包含起来")])]),e("p",[a._v("其他暂时不需要修改")]),e("h2",{attrs:{id:"git-代码版本控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-代码版本控制","aria-hidden":"true"}},[a._v("#")]),a._v(" Git 代码版本控制")]),e("p",[a._v("为了在接下来更好的追踪项目代码的更改，我们还需要将新建的 Laravel 项目纳入到 Git 版本管理中：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/Code/laravel-shop\n$ "),e("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n")])]),e("p",[a._v("Laravel 默认的 "),e("code",[a._v(".gitignore")]),a._v(" 文件并没有把 "),e("code",[a._v("public/js")]),a._v(" 和 "),e("code",[a._v("public/css")]),a._v(" 目录排除掉，前端编译后的 JS 和 CSS 文件会被放到这两个目录中，而编译后的文件是不需要加入到版本库的，因此先编辑 "),e("code",[a._v(".gitignore")]),a._v(" 文件")]),e("p",[e("em",[a._v(".gitignore")])]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n"),e("span",{attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n/public/js\n/public/css\n")])]),e("p",[a._v("然后再把这些文件加入到版本库中：")]),e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" add -A\n$ "),e("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),e("span",{attrs:{class:"token string"}},[a._v('"初始化应用"')]),a._v("\n")])])])}],r=t(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);s.default=n.exports},444:function(a,s,t){a.exports=t.p+"assets/img/1.2_2.a14f854b.png"},445:function(a,s,t){a.exports=t.p+"assets/img/1.2_1.f40b097d.png"}}]);