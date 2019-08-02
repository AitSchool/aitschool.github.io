(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1550:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"controller模块实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#controller模块实现","aria-hidden":"true"}},[t._v("#")]),t._v(" Controller模块实现")]),n("ul",[n("li",[t._v("Controller 核心功能点")]),n("li",[t._v("事件捕获 API 设计")]),n("li",[t._v("DOM 操作 API 封装")]),n("li",[t._v("render API 的设计")])]),n("blockquote",[n("p",[t._v("思考：如果我们想要使用这个 Controller 模块的时候，我们希望用什么 Api 来调用 ？,思考在业务里面，Controller 会包含哪些内容 ？")])]),n("p",[t._v("例如在 todo 这个增删改查的 App，会有添加按钮、删除按钮、编辑按钮及其相关的业务操作，这些操作怎么在 Controller 中封装。")]),n("ol",[n("li",[t._v("传入和这个 Controller 相关的 model 和 view")]),n("li",[t._v("传入这个 Controller 会挂载到哪个 DOM 元素上")]),n("li",[t._v("传入某种按钮（元素）点击时候，要触发哪些事件")])]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" todoController "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  model"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  view"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  el"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  onClick"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'.btn-add'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'.btn-update'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'.btn-delete'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("h2",{attrs:{id:"实现后的-controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现后的-controller","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现后的 Controller")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 获取参数赋值到私有属性中")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" conf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" conf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("bind")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 为 conf.onClick 的元素绑定事件")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'click'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("stopPropagation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 取出 conf.onClick 对象中所有的函数名（元素选择器）")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rules "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      rules"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rule"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果点击的事件的元素匹配上我们的选择器")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("matches")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rule"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// 执行 conf.onClick 中，其选择器中的方法")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// 并使用保证 this 的上下文时在当前指向")]),t._v("\n          conf"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rule"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 框架的好处在于你可以把各类的 Api 封装一次，按照自己方便的来提供数据")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("getTargetArr")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attr"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attr"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token function"}},[t._v("getChild")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 用于绑定数据的变化和视图的渲染")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("view")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"继承-controller-的使用事例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#继承-controller-的使用事例","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承 Controller 的使用事例")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TodoController")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Controller")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("super")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        model"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        view"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        el"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        onClick"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token string"}},[t._v("'.btn-add'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 新增 Todo 时对数据全量赋值")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("concat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTime")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{attrs:{class:"token comment"}},[t._v("// 使用 getter 获取绑定至 DOM 元素的数据")]),t._v("\n              text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addInputText\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token string"}},[t._v("'.btn-delete'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTargetAttr")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'data-id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 根据 id 过滤掉待删除元素")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("filter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              todo "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" todo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" id\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token string"}},[t._v("'.btn-update'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getTargetAttr")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'data-id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" text "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getUpdateText")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 根据 id 更新元素")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("todos"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              todo "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                id"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" todo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" todo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" id "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" text "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" todo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 订阅 Model 更新事件")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribers"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("push")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("getUpdateText")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("super")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v('`input[data-id="')]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("id"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v('"]`')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("addInputText")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("super")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getChild")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'.input-add'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);