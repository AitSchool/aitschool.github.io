(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1691:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误")]),a("h2",{attrs:{id:"错误类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误类型")]),a("p",[t._v("执行代码期间可能会发生的错误有多种类型。每种错误都有对应的错误类型，而当错误发生时，就\n会抛出相应类型的错误对象。ECMA-262 定义了下列 7 种错误类型：")]),a("ul",[a("li",[t._v("Error")])]),a("p",[t._v("Error 是基类型，其他错误类型都继承自该类型。因此，所有错误类型共享了一组相同的属\n性（错误对象中的方法全是默认的对象方法）。这个基类型的主要目的是供开发人员抛出自定义错误。")]),a("ul",[a("li",[t._v("EvalError")])]),a("p",[t._v("EvalError 类型的错误会在使用 eval()函数而发生异常时被抛出。简单地说，如果没有把 eval()当成函数调用，就会抛出错误，例如：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("eval")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//抛出 EvalError")]),t._v("\neval "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//抛出 EvalError")]),t._v("\n")])]),a("ul",[a("li",[t._v("RangeError")])]),a("p",[t._v("RangeError 类型的错误会在数值超出相应范围时触发。例如，在定义数组时，如果指定了数组不\n支持的项数（如20 或 Number.MAX_VALUE），就会触发这种错误。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" items1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//抛出 RangeError")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" items2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MAX_VALUE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//抛出 RangeError")]),t._v("\n")])]),a("ul",[a("li",[t._v("ReferenceError")])]),a("p",[t._v("在找不到对象的情况下，会发生 ReferenceError。通常，在访问不存在的变量时，就会发生这种错误，例如：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//在 x 并未声明的情况下抛出 ReferenceError")]),t._v("\n")])]),a("ul",[a("li",[t._v("SyntaxError")])]),a("p",[t._v("语法错误")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 变量名错误")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 缺少括号")]),t._v("\n")])]),a("ul",[a("li",[t._v("TypeError")])]),a("p",[t._v("在变量中保存着意外的类型时，或者在访问不存在的方法时，都会导致这种错误。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("tmp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// TypeError: a is not a function")]),t._v("\n")])]),a("ul",[a("li",[t._v("URIError\n在使用 encodeURI()或 decodeURI()，而 URI 格式不正确时，就会导致 URIError 错误。这种\n错误也很少见，因为前面说的这两个函数的容错性非常高。")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("decodeURI")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'%1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Uncaught URIError: URI malformed(…)")]),t._v("\n")])]),a("h2",{attrs:{id:"捕捉错误-try-catch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捕捉错误-try-catch","aria-hidden":"true"}},[t._v("#")]),t._v(" 捕捉错误 try catch")]),a("p",[t._v("把所有可能会抛出错误的代码都放在 try 语句块中，而把那些用于错误处理的\n代码放在 catch 块中。例如:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("someNonexistentFunction")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"An error happened!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),a("h2",{attrs:{id:"抛出错误-throw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抛出错误-throw","aria-hidden":"true"}},[t._v("#")]),t._v(" 抛出错误 throw")]),a("p",[t._v("在遇到 throw 操作符时，代码会立即停止执行。仅当有 try-catch 语句捕获到被抛出的值时，代\n码才会继续执行。通过使用某种内置错误类型，可以更真实地模拟浏览器错误。每种错误类型的构造函数接收一个参\n数，即实际的错误消息。下面是一个例子。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Something bad happened."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),a("p",[t._v("要针对函数为什么会执行失败给出更多信息，抛出自定义错误是一种很方便的方式。应该在出现某种特定的已知错误条件，导致函数无法正常执行时抛出错误。换句话说，浏览器会在某种特定的条件下执行函数时抛出错误。")])])}],!1,null,null,null);s.default=r.exports}}]);