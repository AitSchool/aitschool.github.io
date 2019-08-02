(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1541:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup","aria-hidden":"true"}},[t._v("#")]),t._v(" Rollup")]),a("p",[t._v("配置工具介绍")]),a("ul",[a("li",[t._v("Rollup 模块打包")]),a("li",[t._v("NPM 依赖管理")]),a("li",[t._v("Babel 代码转译")]),a("li",[t._v("建立项目结构")])]),a("h2",{attrs:{id:"rollup-模块打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollup-模块打包","aria-hidden":"true"}},[t._v("#")]),t._v(" Rollup 模块打包")]),a("p",[t._v("Rollup 是一个轻量、支持 Tree Shaking 的模块打包工具。在我们的项目中，会有很多项拆分出去的 JS 模块，这些模块方式可以帮助我们开发模块化，代码质量更高的代码。但是我们需要一种机制，把这些小的 JS 文件都打包成一个大的 JS 文件。 Rollup 打包的独特之处在于支持 Tree Shaking。")]),a("p",[t._v("例如：")]),a("p",[a("strong",[t._v("main.js")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cube "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./maths.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cube")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 125")]),t._v("\n")])]),a("p",[a("strong",[t._v("maths.js")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// This function isn't used anywhere, so")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Rollup excludes it from the bundle...")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("square")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// This function gets included")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cube")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// rewrite this as `square( x ) * x`")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// and see what happens!")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("打包后：")]),a("p",[a("strong",[t._v("bundle.js")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// This function isn't used anywhere, so")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// This function gets included")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cube")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// rewrite this as `square( x ) * x`")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// and see what happens!")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cube")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 125")]),t._v("\n")])]),a("p",[t._v("例如以上我们开发了一个 "),a("strong",[t._v("math.js")]),t._v(" 的模块，里面包含两个 square 平方 和 cube 立方的方法，但是我们在 "),a("strong",[t._v("main.js")]),t._v(" 实际上只使用了其 cube 的方法，在打包后的 "),a("strong",[t._v("bundle.js")]),t._v(" 中我们可以发现，我们只打包了其中的 cube 方法。只要我们引用并使用的方法，才会被打包到输出文件里面，正在做到按需打包。")]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),a("p",[a("strong",[t._v("rollup.config.js")])]),a("ul",[a("li",[t._v("src / dest 目录")]),a("li",[t._v("常用插件")])]),a("p",[t._v("例如：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// babel 用于转译 ES6")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" babel "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rollup-plugin-babel'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// uglify 用于压缩")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" uglify "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rollup-plugin-uglify'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 区分生成环境，如果是生产环境下，才压缩代码")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugins "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token function"}},[t._v("babel")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("uglify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'src/app/index.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 入口位置")]),t._v("\n  dest"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'dist/bundle.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 输出位置")]),t._v("\n  format"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'iife'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("            "),a("span",{attrs:{class:"token comment"}},[t._v("// 代码格式")]),t._v("\n  moduleName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'helloMVC'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 打包名称")]),t._v("\n  plugins                    "),a("span",{attrs:{class:"token comment"}},[t._v("// 使用插件")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h2",{attrs:{id:"npm-依赖管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-依赖管理","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM 依赖管理")]),a("ul",[a("li",[t._v("NPM 常用字段")]),a("li",[t._v("NPM Script 配置")]),a("li",[t._v("依赖配置")]),a("li",[t._v("pusblish 流程")])]),a("h3",{attrs:{id:"npm-常用字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-常用字段","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM 常用字段")]),a("ul",[a("li",[t._v("name // 项目名称")]),a("li",[t._v("version // 版本号")]),a("li",[t._v("description // 描述")]),a("li",[t._v("main // 使用的入口")]),a("li",[t._v("author // 作者")]),a("li",[t._v("repository // 仓库地址")]),a("li",[t._v("license // 协议")])]),a("h3",{attrs:{id:"npm-script-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-script-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM Script 配置")]),a("p",[t._v("例如：")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"script"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"dev"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=dev rollup -c --watch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"build"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=production rollup -c"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"example"')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"http-server . -s -p 10008"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("这样，我们可以按照命名约定运行一下命令")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run example\n")])]),a("p",[t._v("实际对应运行以下命令")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# npm run dev")]),t._v("\ncross-env NODE_ENV"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("dev rollup -c --watch\n"),a("span",{attrs:{class:"token comment"}},[t._v("# npm run build")]),t._v("\ncross-env NODE_ENV"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production rollup -c\n"),a("span",{attrs:{class:"token comment"}},[t._v("# npm run example")]),t._v("\nhttp-server "),a("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v(" -s -p 10008\n")])]),a("h3",{attrs:{id:"依赖配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 依赖配置")]),a("p",[t._v("通过 npm install 设置，在 package.json 中体现")]),a("ul",[a("li",[t._v("dependencies 在任何环境下安装都需要用到的依赖 ，通过 npm install --save 添加")]),a("li",[t._v("devDependencies 在开发环境下用到的依赖，通过 npm install --save-dev 添加")]),a("li",[t._v("peerDependencies 使用需要的依赖，例如生态包")])]),a("h2",{attrs:{id:"babel-代码转译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-代码转译","aria-hidden":"true"}},[t._v("#")]),t._v(" Babel 代码转译")]),a("p",[t._v("知识点")]),a("ul",[a("li",[t._v("JS 转译机制")]),a("li",[t._v("core/preset/plugin 概念")]),a("li",[t._v(".balelrc")]),a("li",[t._v("Rollup 中的使用配置")])]),a("p",[t._v("在目前ES6引入了很多新的特性，但浏览并不能直接支持运行。通过 Babel 将新版本的ES6代码，转换成为 ES5 代码，这样就可以在浏览器上使用。Babel 的库非常大，基础的转译功能在 core 库中体现。plugin 的库是 Babel 的插件，我们可以按需的添加你想要的代码转译功能。但 plugin 可能会非常的多，这个时候就有一个 preset 的概念，他会自动帮你整合好你需要那些的 plugin 。这些整理后的配置，都会体现在根目录的 .babelrc 文件里面。")]),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目结构")]),a("p",[t._v("项目中的目录结构介绍")]),a("ul",[a("li",[t._v("package.json // 包管理文件")]),a("li",[t._v(".gitignore   // 设置不提交的代码文件")]),a("li",[t._v(".babelrc     // Babel使用管理文件")]),a("li",[t._v("LICENSE      // 协议文件")]),a("li",[t._v("README.md    // 项目说明文件")]),a("li",[t._v("src          // 开发环境目录")]),a("li",[t._v("dist         // 生产环境目录")]),a("li",[t._v("examples     // 事例项目")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),a("ul",[a("li",[a("a",{attrs:{href:"https://rollup.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup.js")])]),a("li",[a("a",{attrs:{href:"https://babel.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel")])])])])}],!1,null,null,null);s.default=e.exports}}]);