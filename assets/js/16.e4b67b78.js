(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{308:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1-1-关于本手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-关于本手册"}},[s._v("#")]),s._v(" 1.1 关于本手册")]),s._v(" "),a("p",[s._v("这是 MySQL 数据库系统 8.0 版到 8.0.25 版的参考手册。MySQL 8.0 小版本之间的差异在本文中通过的发布版本号（8.0.x）提及。许可信息，参阅"),a("RouterLink",{attrs:{to:"/mysql.html#法律条款"}},[s._v("法律条款")]),s._v("。")],1),s._v(" "),a("p",[s._v("由于 MySQL 8.0 与以前版本在功能和其他方面存在许多差异，因此本手册不适用于较旧版本的 MySQL 软件。如果你使用的是MySQL软件的早期版本，请参阅相应的手册。例如，"),a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 5.7 参考手册"),a("OutboundLink")],1),s._v("涵盖了 MySQL 5.7 系列软件版本。")]),s._v(" "),a("p",[s._v("由于本手册只是作为参考，所以不提供有关 SQL 或关系数据库概念的通用指南。它也不会教你如何使用操作系统或命令行解释器。")]),s._v(" "),a("p",[s._v("MySQL数据库软件持续开发，参考手册也频繁更新。该手册的最新版本可在 "),a("a",{attrs:{href:"https://dev.mysql.com/doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/"),a("OutboundLink")],1),s._v(" 在线搜索。也提供其他格式，包括可下载的 HTML 和 PDF 版本。")]),s._v(" "),a("p",[s._v("MySQL 本身的源代码包含使用 Doxygen 编写的内部文档。生成的 Doxygen 内容在 "),a("a",{attrs:{href:"https://dev.mysql.com/doc/index-other.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/index-other.html"),a("OutboundLink")],1),s._v(" 。也可以在本地参考指南"),a("a",{attrs:{href:"/2/2.9/2.9.10/source-installation-doxygen"}},[s._v("章节 2.9.10 “生成 MySQL Doxygen 文档内容”")]),s._v("使用 MySQL 源发行版生成。")]),s._v(" "),a("p",[s._v("如果你对使用 MySQL 有疑问，可以加入 "),a("a",{attrs:{href:"https://mysqlcommunity.slack.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL Community Slack"),a("OutboundLink")],1),s._v("，或者在我们的论坛上提问，还可以"),a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/information-sources.html#forums",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 MySQL 论坛上查看 MySQL 社区支持"),a("OutboundLink")],1),s._v("。如果你对手册本身的添加或更正有任何建议，请发送至 http://www.mysql.com/company/contact/ 。")]),s._v(" "),a("h2",{attrs:{id:"排版和语法约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排版和语法约定"}},[s._v("#")]),s._v(" 排版和语法约定")]),s._v(" "),a("p",[s._v("本手册使用某些排版约定：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("此风格文本，用于 SQL 语句、数据库、表和列名、程序清单和源代码以及环境变量。示例：“要重新加载 grant 表，请使用 FLUSH PRIVILEGES 语句。")])]),s._v(" "),a("li",[a("p",[s._v("此风格文本，表示你在示例中的输入。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("此风格文本")]),s._v("，表示指示可执行程序和脚本的名称，例如 "),a("RouterLink",{attrs:{to:"/4/4.5/4.5.1/mysql.html"}},[s._v("mysql")]),s._v("（mysql命令行客户端程序）和 "),a("RouterLink",{attrs:{to:"/4/4.3/4.3.1/mysqld.html"}},[s._v("mysqld")]),s._v("（mysql server 可执行文件）。")],1)]),s._v(" "),a("li",[a("p",[a("em",[s._v("此风格文本")]),s._v("，用于变量输入，你应该将其替换自己选择的值。")])]),s._v(" "),a("li",[a("p",[a("em",[s._v("此风格文本")]),s._v("，用于强调。")])]),s._v(" "),a("li",[a("p",[a("em",[a("strong",[s._v("此风格文本")])]),s._v("，用在表格标题中，用来表达特别强烈的强调。")])]),s._v(" "),a("li",[a("p",[s._v("此风格文本，用于指示影响程序执行方式的程序选项，或提供程序以某种方式运行所需的信息的程序选项。示例：“--host 选项（缩写 -h）告诉 "),a("RouterLink",{attrs:{to:"/4/4.5/4.5.1/mysql.html"}},[s._v("mysql")]),s._v(" 客户机程序它应该连接到的 mysql server 的主机名或 IP 地址”。")],1)]),s._v(" "),a("li",[a("p",[s._v("文件名和目录名是这样写的：“global my.cnf文件位于/etc目录中。”")])]),s._v(" "),a("li",[a("p",[s._v("字符序列是这样写的：“要指定通配符，请使用“%”字符。”")])])]),s._v(" "),a("p",[s._v("当显示要在特定程序中执行的命令时，命令前面显示的提示符指示要使用哪个命令。例如，"),a("code",[s._v("shell>")]),s._v("表示从登录 shell 执行的命令，"),a("code",[s._v("root shell>")]),s._v(" 类似，但应作为 root 执行，"),a("code",[s._v("mysql>")]),s._v(" 表示从 "),a("RouterLink",{attrs:{to:"/4/4.5/4.5.1/mysql.html"}},[s._v("mysql")]),s._v(" 客户端程序执行的语句：")],1),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" a shell "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" here\nroot-shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" a shell "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" as root here\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" a mysql statement here\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在某些领域，不同的系统可能会相互区别，以表明命令应该在两个不同的环境中执行。例如，在使用复制时，命令的前缀可能是 "),a("code",[s._v("source")]),s._v(" 和 "),a("code",[s._v("replica")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" a mysql "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" on the replication "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" here\nreplica"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" a mysql "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" on the replica here\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("“shell” 是你的命令解释器。在 Unix 上，这通常是一个程序，如 "),a("strong",[s._v("sh")]),s._v("、"),a("strong",[s._v("csh")]),s._v(" 或 "),a("strong",[s._v("bash")]),s._v("。在 Windows 上，等同的程序是 "),a("strong",[s._v("command.com")]),s._v(" 或 "),a("strong",[s._v("cmd.exe")]),s._v("，通常在控制台窗口中运行。")]),s._v(" "),a("p",[s._v("输入示例中所示的命令或语句时，不要键入示例中所示的提示。")]),s._v(" "),a("p",[s._v("数据库、表和列名通常必须替换为语句。为了表明这种替换是必要的，本手册使用 "),a("strong",[s._v("db_name")]),s._v("、"),a("strong",[s._v("tbl_name")]),s._v(" 和 "),a("strong",[s._v("col_name")]),s._v("。例如，你可能会看到如下语句：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SELECT col_name FROM db_name.tbl_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这意味着，如果要输入类似的语句，则需要提供自己的数据库、表和列名，可能如下所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SELECT author_name FROM biblio_db.author_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("SQL 关键字不区分大小写，可以用任何大小写。本手册使用大写字母。")]),s._v(" "),a("p",[s._v("在语法描述中，方括号（“"),a("code",[s._v("[")]),s._v("” 和 “"),a("code",[s._v("]")]),s._v("”）表示可选的单词或子句。例如，在下面的语句中，"),a("code",[s._v("IF EXISTS")]),s._v(" 是可选的：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("DROP TABLE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IF EXISTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" tbl_name\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当一个语法元素由多个备选项组成时，备选项之间用竖线（“"),a("code",[s._v("|")]),s._v("”）隔开。当可以从一组选项中选择一个成员时，备选方案列在方括号（“"),a("code",[s._v("[")]),s._v("” 和 “"),a("code",[s._v("]")]),s._v("”）中：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("TRIM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BOTH "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" LEADING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" TRAILING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" FROM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当必须从一组选项中选择一个成员时，替代项将在大括号（“"),a("code",[s._v("{")]),s._v("” 和 “"),a("code",[s._v("}")]),s._v("”）中列出：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("DESCRIBE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DESC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" tbl_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("col_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" wild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("省略号（…）表示省略了语句的一部分，通常是为了提供更复杂语法的简短版本。例如，"),a("code",[s._v("SELECT ... INTO-OUTFILE")]),s._v(" 是 "),a("code",[s._v("SELECT")]),s._v("语句形式的简写，它在语句的其他部分后面有一个 "),a("code",[s._v("INTO OUTFILE")]),s._v(" 子句。")]),s._v(" "),a("p",[s._v("省略号也可以表示语句前面的语法元素可能重复。在下面的示例中，可以给出多个 "),a("code",[s._v("reset_option")]),s._v(" 值，每个值在第一个值后面加逗号：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("RESET reset_option "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(",reset_option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("用于设置 shell 变量的命令使用 Bourne shell 语法显示。例如，在 Bourne shell 语法中，设置 CC 环境变量并运行 "),a("code",[s._v("configure")]),s._v(" 命令的顺序如下所示：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gcc ./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你使用的是 "),a("code",[s._v("csh")]),s._v(" 或 "),a("code",[s._v("tcsh")]),s._v("，则必须以不同的方式发出命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" setenv CC gcc\nshell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"手册作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手册作者"}},[s._v("#")]),s._v(" 手册作者")]),s._v(" "),a("p",[s._v("参考手册源文件是以 DocBook XML 格式编写。HTML 版本和其他格式是自动生成，主要使用 DocBook XSL 样式表。有关 DocBook 的信息，请参阅 "),a("a",{attrs:{href:"http://docbook.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://docbook.org/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("本手册最初由 David Axmark 和 Michael “Monty” Widenius 编写。它由 MySQL 文档团队维护，该团队由 Chris Cole、Paul DuBois、Margaret Fisher、Edward Gilmore、Stefan Hinz、David Moss、Philip Olson、Daniel Price、Daniel So 和 Jon Stephens 组成。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/manual-info.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);