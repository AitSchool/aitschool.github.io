(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1413:function(t,s,a){"use strict";a.r(s);var n=a(0),p=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 盒模型")]),a("p",[t._v("CSS盒模型（Box Model）本质上是一个盒子，它包括：边距(margin)，边框(border)，填充(padding)，和内容(content)。")]),a("ul",[a("li",[t._v("标准盒模型 - W3C的标准模型 CSS中的宽（width） = 内容 （content）的宽")]),a("li",[t._v("IE盒模型  - 低版本IE非H5声明 CSS中的宽（width）= 内容（content）的宽+（border+padding）* 2")])]),a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".border-box")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px solid #333"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".content-box")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("以上两个选择器样式中，CSS 设置的宽高不一样，实际显示的大小一样。")]),a("p",[t._v("属性知识点：")]),a("ul",[a("li",[t._v("模型模式 box-sizing")]),a("li",[t._v("显示方式 display")]),a("li",[t._v("外边距 marign")]),a("li",[t._v("内边距 padding")]),a("li",[t._v("宽度 width")]),a("li",[t._v("高度 height")])]),a("blockquote",[a("p",[t._v("在标准盒模型中可以通过 CSS 中 box-sizing 属性的值为 border-box 来切换到IE盒模型的渲染模式，两种盒模型只是计算方式不一样（IE盒模型中的宽度包括了边框和内边距），具体使用哪一种取决于团队决定。")])]),a("h2",{attrs:{id:"margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#margin","aria-hidden":"true"}},[t._v("#")]),t._v(" margin")]),a("p",[t._v("marign，外边距。定义元素之间的距离。")]),a("p",[t._v("以下示例定义了了连个元素（container-1、container-2），container-1 定义了元素距离下一个元素的外边距为10px，container-2定义了元素距离上一个元素的距离为20px，实际他们直接的间隔为20px，这种现象叫做外边距合并。")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#ccc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    container-1\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#ccc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("margin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("20px 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    container-2\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#ccc"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    container-3\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("blockquote",[a("p",[t._v("外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。")])]),a("h2",{attrs:{id:"border"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#border","aria-hidden":"true"}},[t._v("#")]),t._v(" border")]),a("p",[t._v("border 简写属性在一个声明设置所有的边框属性。可以按顺序设置如下属性：")]),a("ul",[a("li",[t._v("border-width  规定边框的宽度")]),a("li",[t._v("border-style  规定边框的样式")]),a("li",[t._v("border-color  规定边框的颜色")])]),a("blockquote",[a("p",[t._v("如果不设置其中的某个值，也不会出问题，比如 border:solid #ff0000; 也是允许的。")])]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dotted #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dashed #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  // 实线框\n"),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dotted #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 点状框\n"),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px dashed #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 虚线框\n")])]),a("h2",{attrs:{id:"padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#padding","aria-hidden":"true"}},[t._v("#")]),t._v(" padding")]),a("p",[t._v("padding 简写属性在一个声明中设置所有内边距属性。")]),a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //上内边距为5px\n"),a("span",{attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //上内边距为10px\n"),a("span",{attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //上内边距为20px\n\n"),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      // 上下左右内边距为 10px\n"),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 20px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 上下内边距为 10px，左右内边距为 20px\n"),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 20px 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 上边距为 10px，左右内边距为 20px，下内边距为 0\n"),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 20px 0 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" // 上边距为 10px，右内边距为 20px，下内边距为 0，左内边距为 10px\n")])]),a("h2",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content","aria-hidden":"true"}},[t._v("#")]),t._v(" content")]),a("p",[t._v("height 、width 属性设置元素的宽度。在不同的盒子模型上，计算方式不一样。")]),a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".content-box")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".ie-box")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("padding")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px solid #e4e4e4"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=p.exports}}]);