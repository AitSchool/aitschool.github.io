(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1408:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_4-9-使用队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-使用队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.9 使用队列")]),n("p",[t._v("上一章节中我们开发了自动生成 Slug 功能，但是因为我们的需要实时请求百度翻译接口，这将会是一个系统性能隐患。")]),n("p",[t._v("一般情况下，网络请求会存在各种不确定性，如果请求 API 出现超时情况，或者发生不可预知的错误，我们的用户将无法发帖。")]),n("p",[t._v("生成 Slug 只是一个 "),n("strong",[t._v("优化")]),t._v(" 功能，并非是发帖的 "),n("strong",[t._v("必要")]),t._v(" 功能，我们希望无论生成 Slug 的结果如何，用户都能顺利的发帖，并且完全察觉不到延迟。")]),n("p",[t._v("利用队列系统可以做到这点。队列允许你异步执行消耗时间的任务，比如请求一个 API 并等待返回的结果。这样可以有效的降低请求响应的时间。")]),n("h2",{attrs:{id:"_1-配置队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 配置队列")]),n("p",[t._v("队列的配置信息储存于 "),n("code",[t._v("config/queue.php")]),t._v(" 文件中，在这个文件中你会发现框架所支持的队列驱动的配置连接示例。这些驱动包括：数据库，Beanstalkd，Amazon SQS，Redis，和一个同步（本地使用）的驱动。还有一个名为 "),n("code",[t._v("null")]),t._v(" 的驱动表明不使用队列任务。")]),n("p",[t._v("本项目中，我们将使用 Redis 来作为我们的队列驱动器，先使用 Composer 安装依赖：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ composer require "),n("span",{attrs:{class:"token string"}},[t._v('"predis/predis:~1.0"')]),t._v("\n")])]),n("p",[t._v("接下来我们还需要修改环境变量 "),n("code",[t._v("QUEUE_DRIVER")]),t._v(" 的值为 "),n("code",[t._v("redis")]),t._v("：")]),n("p",[n("em",[t._v(".env")])]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\nQUEUE_DRIVER"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("redis\n"),n("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])]),n("h3",{attrs:{id:"失败任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#失败任务","aria-hidden":"true"}},[t._v("#")]),t._v(" 失败任务")]),n("p",[t._v("有时候队列中的任务会失败。Laravel 内置了一个方便的方式来指定任务重试的最大次数。当任务超出这个重试次数后，它就会被插入到 "),n("code",[t._v("failed_jobs")]),t._v(" 数据表里面。我们可以使用 "),n("code",[t._v("queue:failed-table")]),t._v(" 命令来创建 "),n("code",[t._v("failed_jobs")]),t._v(" 表的迁移文件：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan queue:failed-table\n")])]),n("p",[t._v("会新建 "),n("code",[t._v("database/migrations/{timestamp}_create_failed_jobs_table.php")]),t._v(" 文件：")]),n("p",[n("img",{attrs:{src:a(897),alt:"file"}})]),n("p",[t._v("接着使用 "),n("code",[t._v("migrate")]),t._v(" Artisan 命令生成 "),n("code",[t._v("failed_jobs")]),t._v(" 表：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan migrate\n")])]),n("h2",{attrs:{id:"_2-生成任务类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成任务类","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 生成任务类")]),n("p",[t._v("使用以下 Artisan 命令来生成一个新的队列任务：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan make:job TranslateSlug\n")])]),n("p",[t._v("该命令会在 "),n("code",[t._v("app/Jobs")]),t._v(" 目录下生成一个新的类：")]),n("p",[n("em",[t._v("app/Jobs/TranslateSlug.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jobs")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bus"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queueable")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queue"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SerializesModels")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queue"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("InteractsWithQueue")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Contracts"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Queue"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ShouldQueue")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Illuminate"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Foundation"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bus"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dispatchable")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Handlers"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SlugTranslateHandler")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TranslateSlug")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ShouldQueue")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("Dispatchable")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" InteractsWithQueue"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Queueable"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SerializesModels"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("__construct")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 队列任务构造器中接收了 Eloquent 模型，将会只序列化模型的 ID")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("topic")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("handle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 请求百度 API 接口进行翻译")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$slug")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("app")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SlugTranslateHandler"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("translate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 为了避免模型监控器死循环调用，我们使用 DB 类直接对数据库进行操作")]),t._v("\n        \\"),n("span",{attrs:{class:"token package"}},[t._v("DB")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'topics'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("where")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$this")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("id")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("update")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'slug'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$slug")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("该类实现了 "),n("code",[t._v("Illuminate\\Contracts\\Queue\\ShouldQueue")]),t._v(" 接口，该接口表明 Laravel 应该将该任务添加到后台的任务队列中，而不是同步执行。")]),n("p",[t._v("引入了 "),n("code",[t._v("SerializesModels")]),t._v(" trait，Eloquent 模型会被优雅的序列化和反序列化。队列任务构造器中接收了 Eloquent 模型，将会只序列化模型的 ID。这样子在任务执行时，队列系统会从数据库中自动的根据 ID 检索出模型实例。这样可以避免序列化完整的模型可能在队列中出现的问题。")]),n("p",[n("code",[t._v("handle")]),t._v(" 方法会在队列任务执行时被调用。值得注意的是，我们可以在任务的 "),n("code",[t._v("handle")]),t._v(" 方法中可以使用类型提示来进行依赖的注入。Laravel 的服务容器会自动的将这些依赖注入进去，与控制器方法类似。")]),n("p",[t._v("还有一点需要注意，我们将会在模型监控器中分发任务，任务中要避免使用 Eloquent 模型接口调用，如："),n("code",[t._v("create()")]),t._v(", "),n("code",[t._v("update()")]),t._v(", "),n("code",[t._v("save()")]),t._v(" 等操作。否则会陷入调用死循环 —— 模型监控器分发任务，任务触发模型监控器，模型监控器再次分发任务，任务再次触发模型监控器.... 死循环。在这种情况下，使用 "),n("code",[t._v("DB")]),t._v(" 类直接对数据库进行操作即可。")]),n("h2",{attrs:{id:"_3-任务分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-任务分发","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 任务分发")]),n("p",[t._v("接下来我们要修改 Topic 模型监控器，将 Slug 翻译的调用修改为队列执行的方式：")]),n("p",[n("em",[t._v("app/Observers/TopicObserver.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Observers")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jobs"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TranslateSlug")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// creating, created, updating, updated, saving,")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// saved,  deleting, deleted, restoring, restored")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TopicObserver")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("saving")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// XSS 过滤")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("body")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("clean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user_topic_body'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 生成话题摘录")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("excerpt")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("make_excerpt")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如 slug 字段无内容，即使用翻译器对 title 进行翻译")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("slug")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 推送任务到队列")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TranslateSlug")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"_4-开始测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-开始测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 开始测试")]),n("p",[t._v("开始之前，我们需要在命令行启动队列系统，队列在启动完成后会进入监听状态：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan queue:listen\n")])]),n("p",[t._v("浏览器打开话题发布页面，填写测试内容：")]),n("p",[n("img",{attrs:{src:a(896),alt:"file"}})]),n("p",[t._v("点击『保存』按钮提交表单后，可以在命令行中看到监听的状态：")]),n("p",[n("img",{attrs:{src:a(895),alt:"file"}})]),n("p",[t._v("可以看到我们的任务 "),n("code",[t._v("Failed")]),t._v(" 执行失败了。打开数据库查看 "),n("code",[t._v("failed_jobs")]),t._v(" 里的数据：")]),n("p",[n("img",{attrs:{src:a(894),alt:"file"}})]),n("p",[t._v("虽然我们能够从 "),n("code",[t._v("payload")]),t._v(" 和 "),n("code",[t._v("exception")]),t._v(" 字段中看到报错的信息，但因为是序列化以后的信息，所以并不直观：")]),n("p",[n("img",{attrs:{src:a(893),alt:"file"}})]),n("h2",{attrs:{id:"_5-队列监控-horizon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-队列监控-horizon","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 队列监控 Horizon")]),n("p",[n("img",{attrs:{src:a(892),alt:"file"}})]),n("p",[n("a",{attrs:{href:"https://d.laravel-china.org/docs/5.5/horizon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Horizon")]),t._v(" 是 Laravel 生态圈里的一员，为 Laravel Redis 队列提供了一个漂亮的仪表板，允许我们很方便地查看和管理 Redis 队列任务执行的情况。")]),n("p",[t._v("使用 Composer 安装：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ composer require "),n("span",{attrs:{class:"token string"}},[t._v('"laravel/horizon:~1.0"')]),t._v("\n")])]),n("p",[t._v("安装完成后，使用 "),n("code",[t._v("vendor:publish")]),t._v(" Artisan 命令发布相关文件：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan vendor:publish --provider"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Laravel\\Horizon\\HorizonServiceProvider"')]),t._v("\n")])]),n("p",[t._v("分别是配置文件 "),n("code",[t._v("config/horizon.php")]),t._v(" 和存放在 "),n("code",[t._v("public/vendor/horizon")]),t._v(" 文件夹中的 CSS 、JS 等页面资源文件。")]),n("p",[t._v("至此安装完毕，浏览器打开 http://larabbs.test/horizon 访问控制台：")]),n("p",[n("img",{attrs:{src:a(891),alt:"file"}})]),n("p",[t._v("Horizon 是一个监控程序，需要常驻运行，我们可以通过以下命令启动：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ php artisan horizon\n")])]),n("p",[t._v("安装了 Horizon 以后，我们将使用 "),n("code",[t._v("horizon")]),t._v(" 命令来启动队列系统和任务监控，无需使用 "),n("code",[t._v("queue:listen")]),t._v("。")]),n("p",[t._v("接下来我们再次尝试下发帖，发帖之前，请确保 "),n("code",[t._v("horizon")]),t._v(" 命令处于监控状态：")]),n("p",[n("img",{attrs:{src:a(890),alt:"file"}})]),n("p",[t._v("这一次多亏了 Horizon，我们可以清晰的看到更加详尽的错误信息，错误异常是 "),n("code",[t._v("ModelNotFoundException")]),t._v("，最重要的：")]),n("p",[n("img",{attrs:{src:a(889),alt:"file"}})]),n("p",[t._v("我们发现 Data 区块里，"),n("code",[t._v("id")]),t._v(" 的值居然为 "),n("code",[t._v("null")]),t._v("。我们知道的，队列系统对于构造器里传入的  Eloquent 模型，将会只序列化 ID 字段，因为我们是在 Topic 模型监控器的 "),n("code",[t._v("saving()")]),t._v(" 方法中分发队列任务的，此时传参的 "),n("code",[t._v("$topic")]),t._v(" 变量还未在数据库里创建，所以 "),n("code",[t._v("$topic->id")]),t._v(" 为 null。")]),n("h2",{attrs:{id:"_6-代码调整"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-代码调整","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 代码调整")]),n("p",[t._v("既然我们已经定位到了问题，解决的方法也很简单，只需要确保分发任务时 "),n("code",[t._v("$topic->id")]),t._v(" 有值即可。我们需要修改任务分发的时机：")]),n("p",[n("em",[t._v("app/Observers/TopicObserver.php")])]),n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token php language-php"}},[n("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Observers")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Models"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),n("span",{attrs:{class:"token package"}},[t._v("App"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Jobs"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TranslateSlug")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// creating, created, updating, updated, saving,")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// saved,  deleting, deleted, restoring, restored")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TopicObserver")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("saving")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// XSS 过滤")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("body")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("clean")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'user_topic_body'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 生成话题摘录")]),t._v("\n        "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("excerpt")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("make_excerpt")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("saved")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Topic "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如 slug 字段无内容，即使用翻译器对 title 进行翻译")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token property"}},[t._v("slug")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),n("span",{attrs:{class:"token comment"}},[t._v("// 推送任务到队列")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("TranslateSlug")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$topic")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("模型监控器的 "),n("code",[t._v("saved()")]),t._v(" 方法对应 Eloquent 的 "),n("code",[t._v("saved")]),t._v(" 事件，此事件发生在创建和编辑时、数据入库以后。在 "),n("code",[t._v("saved()")]),t._v(" 方法中调用，确保了我们在分发任务时，"),n("code",[t._v("$topic->id")]),t._v(" 永远有值。")]),n("blockquote",[n("p",[t._v("需要注意的是，"),n("code",[t._v("artisan horizon")]),t._v(" 队列工作的守护进程是一个常驻进程，它不会在你的代码改变时进行重启，当我们修改代码以后，需要在命令行中对其进行重启操作。")])]),n("p",[t._v("重启 "),n("code",[t._v("horizon")]),t._v(" 命令后再次尝试：")]),n("p",[n("img",{attrs:{src:a(888),alt:"file"}})]),n("h2",{attrs:{id:"_7-线上部署须知"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-线上部署须知","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 线上部署须知")]),n("p",[t._v("在开发环境中，我们为了测试方便，直接在命令行里调用 "),n("code",[t._v("artisan horizon")]),t._v(" 进行队列监控。然而在生产环境中，我们需要配置一个进程管理工具来监控 "),n("code",[t._v("artisan horizon")]),t._v(" 命令的执行，以便在其意外退出时自动重启。当服务器部署新代码时，需要终止当前 Horizon 主进程，然后通过进程管理工具来重启，从而使用最新的代码。")]),n("p",[t._v("简而言之，生产环境下使用队列需要注意以下两个问题：")]),n("ol",[n("li",[t._v("使用 Supervisor 进程工具进行管理，配置和使用请参照 "),n("a",{attrs:{href:"https://d.laravel-china.org/docs/5.5/horizon#Supervisor-%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档")]),t._v(" 进行配置；")]),n("li",[t._v("每一次部署代码时，需 "),n("code",[t._v("artisan horizon:terminate")]),t._v(" 然后再 "),n("code",[t._v("artisan horizon")]),t._v(" 重新加载代码。")])]),n("h2",{attrs:{id:"_8-使用-sync-队列驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-使用-sync-队列驱动","aria-hidden":"true"}},[t._v("#")]),t._v(" 8. 使用 Sync 队列驱动")]),n("p",[t._v("既然功能已经开发测试完毕，为了后续开发的方便，我们将开发环境的队列驱动改回 "),n("code",[t._v("sync")]),t._v(" 同步模式，也就是说不使用任何队列，实时执行：")]),n("p",[n("em",[t._v(".env")])]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("QUEUE_DRIVER"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("sync\n")])]),n("h2",{attrs:{id:"git-版本控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-版本控制","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 版本控制")]),n("p",[t._v("下面把代码纳入到版本管理：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n$ "),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),n("span",{attrs:{class:"token string"}},[t._v('"Add queue for translate slug"')]),t._v("\n")])])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=o.exports},888:function(t,s,a){t.exports=a.p+"assets/img/4.9_10.e8bd4ab2.gif"},889:function(t,s,a){t.exports=a.p+"assets/img/4.9_9.ace64e10.png"},890:function(t,s,a){t.exports=a.p+"assets/img/4.9_8.3bb09b94.gif"},891:function(t,s,a){t.exports=a.p+"assets/img/4.9_7.3c904d6e.png"},892:function(t,s,a){t.exports=a.p+"assets/img/4.9_6.7dee2e62.png"},893:function(t,s,a){t.exports=a.p+"assets/img/4.9_5.deaeee85.png"},894:function(t,s,a){t.exports=a.p+"assets/img/4.9_4.7eef843b.png"},895:function(t,s,a){t.exports=a.p+"assets/img/4.9_3.f3f2352f.png"},896:function(t,s,a){t.exports=a.p+"assets/img/4.9_2.d7ee0f15.png"},897:function(t,s,a){t.exports=a.p+"assets/img/4.9_1.e040f412.png"}}]);