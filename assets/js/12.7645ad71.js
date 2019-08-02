(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1701:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"node-js-http-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-http-服务","aria-hidden":"true"}},[t._v("#")]),t._v(" Node.js HTTP 服务")]),a("p",[t._v("Node.js 包含了 http 模块，自身就可以用来构建服务器和客户端，而且 http 模块是由 C++ 实现，性能可靠。")]),a("p",[t._v("http 模块重要的功能都封装在 5 个 JS 类里面，如下：")]),a("ul",[a("li",[t._v("http.Agent 用来定义请求头中的标识信息，包括操作系统版本、CPU 类型、浏览器版本、渲染引擎、浏览器语言等")]),a("li",[t._v("http.Server 用于创建 HTTP 服务器对象")]),a("li",[t._v("http.ClientRequest HTTP 请求类")]),a("li",[t._v("http.ServerResponse HTTP 相应类")]),a("li",[t._v("http.IncomingMessage 用于访问响应状态、消息头、以及数据")])]),a("h2",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[t._v("#")]),t._v(" Server")]),a("p",[t._v("使用创建 HTTP 服务器并启动，Server 常用事件有：")]),a("ul",[a("li",[t._v("request 服务器每次接收到一个请求时触发")]),a("li",[t._v("close 服务器关闭时触发")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" http "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" server "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createServer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'content-type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'text/html;charset=utf-8'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<h1>hello world</h1>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'request'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("8080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),a("p",[t._v("http 模块提供了两个函数 http.request 和 http.get ，功能是作为客户端向 HTTP 服务器发起请求 , 返回 http.ClientResponse 实例。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("http"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("option"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("ul",[a("li",[t._v("option\n"),a("ul",[a("li",[t._v("host 地址")]),a("li",[t._v("port 端口")]),a("li",[t._v("method 类型")]),a("li",[t._v("path 路径")]),a("li",[t._v("headers 请求头信息")])])]),a("li",[t._v("callback 的参数为 http.ClientResponse 的实例")])]),a("h2",{attrs:{id:"数字证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字证书","aria-hidden":"true"}},[t._v("#")]),t._v(" 数字证书")]),a("p",[t._v("HTTP 被用于在浏览器和网站服务器之间传递信息，HTTP 协议以明文的方式发送内容，不提供任何方式的数据加密，如果攻击者截取了浏览器和服务器之间的传输报文，就可以直接读懂其中的信息。为了传输数据的安全，HTTPS 在 HTTP 的基础加入 SSL 协议，SSL 依赖证书来验证服务器的身份，并为浏览器和服务器之间的通讯加密。")]),a("p",[t._v("相关知识点：")]),a("ul",[a("li",[t._v("加密方法")])]),a("p",[t._v("HTTPS 的数据加密通过非对称加密算法实现。非对称加密算法需要两个密钥，分别用于加密和解密。在密钥对中，公钥对外公开，私钥不对外公开。")]),a("ul",[a("li",[t._v("数字摘要")])]),a("p",[t._v("HTTPS 通过数字摘要来确保数字的完整性，是采用哈希函数将需要加密的明文转化成一串固定长度(128位)的密文。这一串密文又称为数字指纹，它又固定的长度，而且不同的明文摘要成密文的结果总是不同的，而且同样的明文摘要必定是一致的。")]),a("ul",[a("li",[t._v("数字签名")])]),a("p",[t._v("数字签名将摘要信息和发送者的密钥加密，与原文一起传送给接收者。接受者只有用发送者的公钥才能解密被加密的摘要信息，然后用哈希函数对收到的原文产生一个摘要信息，与解密的摘要信息对比，如果相同，则说明信息是完整的。数字签名只验证数据的完整性，本身是否加密不属于数字签名的范畴。")]),a("ul",[a("li",[t._v("数字证书")])]),a("p",[t._v("对于请求方来说，怎么能够确定它所得到的公钥一定是从目标主机那里发布的呢，而且没被修改过呢？或者说请求的目标主机本身就从事窃取用户信息的不正当行为呢？这时候，我们需要一个权威的值得信赖的第三方机构来统一对外发放主机机构的公钥，一般有政府审核并授权。")]),a("ul",[a("li",[t._v("HTTP 握手流程")])]),a("ol",[a("li",[a("p",[t._v("客户端发送请求，将自己的 SSL 版本号等信息发送给服务器，服务器接收到请求将证书和公钥等返回给客户端。")])]),a("li",[a("p",[t._v("客户端接收证书后向证书颁发机构验证证书的合法性。如果证书不合法，则向用户发出警告。")])]),a("li",[a("p",[t._v("证书合法的情况下客户端生产 pre-master secret 并使用公钥加密后发送给服务器，服务器检查客户端的证书颁发机构是否在信任列表中，以及证书的内容是否合法。")])]),a("li",[a("p",[t._v("服务器使用私钥解密 pre-master secret ，然后双方通过一种实现商定好的加密算法生成本次通讯使用的 master secret")])]),a("li",[a("p",[t._v("双方互相通知对方本次 SSL 握手成功，其后均使用 master secret 对传输内容进行加密。")])])])])}],!1,null,null,null);s.default=e.exports}}]);