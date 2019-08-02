(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1532:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"语义分析器实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语义分析器实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 语义分析器实现")]),s("ul",[s("li",[t._v("语法树操作")]),s("li",[t._v("映射语法树为虚拟 DOM")])]),s("h2",{attrs:{id:"语法树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法树","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法树")]),s("ul",[s("li",[t._v("由语法分析器输出")]),s("li",[t._v("遍历该树即可执行语言功能")]),s("li",[t._v("隐式语义计算：耦合在语法分析器中")])]),s("h2",{attrs:{id:"渲染真实-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染真实-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" 渲染真实 DOM")]),s("ul",[s("li",[t._v("render 函数")]),s("li",[t._v("renderNode 函数")])]),s("h2",{attrs:{id:"参考代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考代码")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("trim")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("replace")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token regex"}},[t._v("/^<|>$/g")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("renderNode")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodes"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nodes"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forEach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newNode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("trim")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("node"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" newNode "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("renderNode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" newNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n    target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" target\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" target "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetId"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  target"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("renderNode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dom"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.default=e.exports}}]);