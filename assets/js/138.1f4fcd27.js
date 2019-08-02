(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1359:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_8-2-cud优惠券"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-cud优惠券","aria-hidden":"true"}},[t._v("#")]),t._v(" 8.2 CUD优惠券")]),n("p",[t._v("上一节我们完成了优惠券的设计和列表展示，接下来我们要实现在管理后台添加优惠券的功能。")]),n("h2",{attrs:{id:"添加优惠券"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加优惠券","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加优惠券")]),n("h3",{attrs:{id:"_1-控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 控制器")]),n("p",[t._v("对于新增，我们只需要修改 "),n("code",[t._v("create()")]),t._v(" 和 "),n("code",[t._v("form()")]),t._v(" 方法即可：")]),n("p",[n("em",[t._v("app/Admin/Controllers/CouponCodesController.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Admin"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Content "),n("span",{attrs:{class:"token variable"}},[t._v("$content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$content")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("header")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'新增优惠券'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$content")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Admin"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CouponCode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Form "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("display")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ID'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'名称'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'code'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'优惠码'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'nullable|unique:coupon_codes'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("radio")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'类型'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("options")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CouponCode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token variable"}},[t._v("$typeMap")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'折扣'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("type")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" CouponCode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token constant"}},[t._v("TYPE_PERCENT")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果选择了百分比折扣类型，那么折扣范围只能是 1 ~ 99")]),t._v("\n                    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required|numeric|between:1,99'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token comment"}},[t._v("// 否则只要大等于 0.01 即可")]),t._v("\n                    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required|numeric|min:0.01'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'total'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'总量'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required|numeric|min:0'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'min_amount'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'最低金额'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'required|numeric|min:0'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("datetime")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'not_before'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'开始时间'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("datetime")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'not_after'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'结束时间'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("radio")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'enabled'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'启用'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("options")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'1'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'是'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'0'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'否'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("saving")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Form "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("code")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("code")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" CouponCode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("findAvailableCode")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("代码解析：")]),n("ul",[n("li",[t._v("对于优惠码 "),n("code",[t._v("code")]),t._v(" 字段，我们的第一个校验规则是 "),n("code",[t._v("nullable")]),t._v("，允许用户不填，不填的情况优惠码将由系统生成。")]),n("li",[t._v("对于折扣 "),n("code",[t._v("value")]),t._v(" 字段，我们的校验规则是一个匿名函数，当我们的校验规则比较复杂，或者需要根据用户提交的其他字段来判断时就可以用匿名函数的方式来定义校验规则。")]),n("li",[n("code",[t._v("$form->saving()")]),t._v(" 方法用来注册一个事件处理器，在表单的数据被保存前会被触发，这里我们判断如果用户没有输入优惠码，就通过 "),n("code",[t._v("findAvailableCode()")]),t._v(" 来自动生成。")])]),n("h3",{attrs:{id:"_2-添加路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加路由","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 添加路由")]),n("p",[n("em",[t._v("app/Admin/routes.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[t._v("$router")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("post")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'coupon_codes'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'CouponCodesController@store'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$router")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'coupon_codes/create'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'CouponCodesController@create'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("h3",{attrs:{id:"_3-测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 测试")]),n("p",[t._v("接下来我们来测试一下，先进入优惠券列表页面，点击页面上的 "),n("code",[t._v("新增")]),t._v(" 按钮：")]),n("p",[n("img",{attrs:{src:a(165),alt:"file"}})]),n("p",[n("img",{attrs:{src:a(164),alt:"file"}})]),n("p",[t._v("不填任何数据，直接提交看看效果：")]),n("p",[n("img",{attrs:{src:a(163),alt:"file"}})]),n("p",[t._v("优惠码这个字段没有报错，符合预期。")]),n("p",[t._v("我们回到优惠券列表页面，随便找一个优惠券，将其优惠码复制下来：")]),n("p",[n("img",{attrs:{src:a(162),alt:"file"}})]),n("p",[t._v("再进入新增页面，将复制的优惠码填入，提交：")]),n("p",[n("img",{attrs:{src:a(161),alt:"file"}})]),n("p",[t._v("看到提示 "),n("code",[t._v("优惠码已存在")]),t._v("，符合预期。")]),n("p",[t._v("然后我们来填一个正常的数据：")]),n("p",[n("img",{attrs:{src:a(160),alt:"file"}})]),n("p",[t._v("点击 "),n("code",[t._v("提交")]),t._v(" 按钮，可以看到回到了列表页面，并出现了刚刚新添加的优惠券：")]),n("p",[n("img",{attrs:{src:a(159),alt:"file"}})]),n("h2",{attrs:{id:"修改优惠券"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改优惠券","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改优惠券")]),n("p",[t._v("接下来我们要实现修改优惠券的功能。")]),n("h3",{attrs:{id:"_1-控制器-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-控制器-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 控制器")]),n("p",[t._v("在 "),n("code",[t._v("CouponCodesController")]),t._v(" 里添加 "),n("code",[t._v("edit()")]),t._v(" 方法")]),n("p",[n("em",[t._v("app/Admin/Controllers/CouponCodesController.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("edit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Admin"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("content")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Content "),n("span",{attrs:{class:"token variable"}},[t._v("$content")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$content")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("header")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'编辑优惠券'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$content")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("edit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h3",{attrs:{id:"_2-添加路由-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加路由-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 添加路由")]),n("p",[n("em",[t._v("app/Admin/routes.php")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    $router->get('coupon_codes/{id}/edit', 'CouponCodesController@edit');\n    $router->put('coupon_codes/{id}', 'CouponCodesController@update');\n")])]),n("h3",{attrs:{id:"_3-测试-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 测试")]),n("p",[t._v("点击我们刚刚创建的优惠券右侧的编辑按钮：")]),n("p",[n("img",{attrs:{src:a(158),alt:"file"}})]),n("p",[n("img",{attrs:{src:a(157),alt:"file"}})]),n("p",[t._v("可以看到数据和我们之前填的都一致。")]),n("p",[t._v("接下来我们给这个优惠券设置一下开始和结束时间看看：")]),n("blockquote",[n("p",[t._v("开始时间请选择一个几天之后的时间点，我们之后会用到。")])]),n("p",[n("img",{attrs:{src:a(156),alt:"file"}})]),n("p",[t._v("然后点击保存：")]),n("p",[n("img",{attrs:{src:a(155),alt:"file"}})]),n("p",[t._v("发现校验不通过，提示优惠码已存在，这里我们需要调整一下优惠码的校验规则：")]),n("p",[n("em",[t._v("app/Admin/Controllers/CouponCodesController.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Admin"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("form")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CouponCode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Form "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'code'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'优惠码'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("rules")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果 $form->model()->id 不为空，代表是编辑操作")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$form")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("model")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'nullable|unique:coupon_codes,code,'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token variable"}},[t._v("$id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("',id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'nullable|unique:coupon_codes'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("再次提交页面可以看到回到了列表页，再次进入编辑优惠券页面：")]),n("p",[n("img",{attrs:{src:a(154),alt:"file"}})]),n("p",[t._v("可以看到两个时间也都有了。")]),n("h2",{attrs:{id:"删除优惠券"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除优惠券","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除优惠券")]),n("p",[t._v("接下来我们要实现优惠券的删除功能。由于 Laravel-Admin 已经帮我们内置了删除的方法，我们只需要配置一下路由即可：")]),n("p",[n("em",[t._v("app/Admin/routes.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[t._v("$router")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'coupon_codes/{id}'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'CouponCodesController@destroy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("p",[t._v("现在测一下，进入列表页面，选择一个之前我们批量生成的测试优惠券，点击删除按钮：")]),n("p",[n("img",{attrs:{src:a(153),alt:"file"}})]),n("p",[t._v("顺着流程往下走：")]),n("p",[n("img",{attrs:{src:a(152),alt:"file"}})]),n("p",[n("img",{attrs:{src:a(151),alt:"file"}})]),n("p",[n("img",{attrs:{src:a(150),alt:"file"}})]),n("p",[t._v("发现页面上已经没有刚刚那条优惠券了。")]),n("h2",{attrs:{id:"git-代码版本控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-代码版本控制","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 代码版本控制")]),n("p",[t._v("接着让我们将这些文件加入到版本控制中：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('$ git add -A\n$ git commit -m "管理后台 - 新增、修改、删除优惠券"\n')])])])}],o=a(0),r=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports},150:function(t,s,a){t.exports=a.p+"assets/img/8.2_16.afe68ccf.png"},151:function(t,s,a){t.exports=a.p+"assets/img/8.2_15.9b01754a.png"},152:function(t,s,a){t.exports=a.p+"assets/img/8.2_14.72157126.png"},153:function(t,s,a){t.exports=a.p+"assets/img/8.2_13.f8f05320.png"},154:function(t,s,a){t.exports=a.p+"assets/img/8.2_12.540f799a.png"},155:function(t,s,a){t.exports=a.p+"assets/img/8.2_11.59a5729e.png"},156:function(t,s,a){t.exports=a.p+"assets/img/8.2_10.258b296d.png"},157:function(t,s,a){t.exports=a.p+"assets/img/8.2_9.4a10a253.png"},158:function(t,s,a){t.exports=a.p+"assets/img/8.2_8.87e45772.png"},159:function(t,s,a){t.exports=a.p+"assets/img/8.2_7.1cca130b.png"},160:function(t,s,a){t.exports=a.p+"assets/img/8.2_6.44059006.png"},161:function(t,s,a){t.exports=a.p+"assets/img/8.2_5.a811849d.png"},162:function(t,s,a){t.exports=a.p+"assets/img/8.2_4.7f7052b6.png"},163:function(t,s,a){t.exports=a.p+"assets/img/8.2_3.bbfcfbba.png"},164:function(t,s,a){t.exports=a.p+"assets/img/8.2_2.301e316f.png"},165:function(t,s,a){t.exports=a.p+"assets/img/8.2_1.9eb7d9f6.png"}}]);