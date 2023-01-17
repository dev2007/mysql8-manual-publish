(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{327:function(t,s,a){"use strict";a.r(s);var e=a(13),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-6-mysql-标准遵从性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-mysql-标准遵从性"}},[t._v("#")]),t._v(" 1.6 MySQL 标准遵从性")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/1/1.6/1.6.1/extensions-to-ansi.html"}},[t._v("1.6.1 MySQL 对标准 SQL 的扩展")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/1/1.6/1.6.2/differences-from-ansi.html"}},[t._v("1.6.2 MySQL 与标准 SQL 的区别")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/1/1.6/1.6.3/constraints.html"}},[t._v("1.6.3 MySQL 如何处理约束")])],1)]),t._v(" "),s("p",[t._v("本章节介绍 MySQL 与 ANSI/ISO SQL 标准的关系。MySQL 服务器对 SQL 标准有许多扩展，在这里你可以了解它们是什么以及如何使用它们。你还可以找到有关 MySQL 服务器缺少的功能以及如何解决某些差异的信息。")]),t._v(" "),s("p",[t._v("SQL 标准自 1986 年以来一直在发展，已有多个版本。在本手册中，“SQL-92”指 1992 年发布的标准。“SQL:1999”、“SQL:2003”、“SQL:2008”和“SQL:2011”是指相应年份发布的标准版本，最后一个版本是最新版本。我们使用短语“SQL标准”或“标准SQL”来表示SQL标准在任何时候的当前版本。")]),t._v(" "),s("p",[t._v("我们使用该产品的主要目标之一是继续努力遵守SQL标准，但不牺牲速度和可靠性。如果这大大提高了 MySQL 服务器在大部分用户群中的可用性，我们就不怕添加 SQL 扩展或对非 SQL 特性的支持。"),s("RouterLink",{attrs:{to:"/13/13.2/13.2.4/handler.html"}},[s("code",[t._v("HANDLER")])]),t._v(" 接口就是这个策略的一个例子。参见"),s("RouterLink",{attrs:{to:"/13/13.2/13.2.4/handler.html"}},[t._v("章节13.2.4，“HANDLER 语句”")]),t._v("。")],1),t._v(" "),s("p",[t._v("我们继续支持事务性和非事务性数据库，以满足关键任务的全天候使用和大量 Web 或日志使用。")]),t._v(" "),s("p",[t._v("MySQL Server 最初设计用于小型计算机系统上的中型数据库（1千万——1亿行，或每个表大约 100MB）。今天，MySQL Server 处理 TB 级的数据库。")]),t._v(" "),s("p",[t._v("我们的目标不是实时支持，尽管 MySQL 复制功能提供了重要的功能。")]),t._v(" "),s("p",[t._v("MySQL 支持 ODBC 级别 0 到 3.51。")]),t._v(" "),s("p",[t._v("MySQL 支持使用 "),s("RouterLink",{attrs:{to:"/23/mysql-cluster.html"}},[s("code",[t._v("NDBCLUSTER")])]),t._v(" 存储引擎支持高可用性数据库群集。参阅"),s("RouterLink",{attrs:{to:"/23/mysql-cluster.html"}},[t._v("章节 23，MySQL NDB Cluster 8.0")]),t._v("。")],1),t._v(" "),s("p",[t._v("我们实现了支持大多数 W3CXPath 标准的 XML 功能。参阅"),s("RouterLink",{attrs:{to:"/12/12.12/xml-functions.html"}},[t._v("章节 12.12，“XML 函数”")]),t._v("。")],1),t._v(" "),s("p",[t._v("MySQL支持 RFC 7159 定义的、基于 ECMAScript 标准（ECMA-262）的本地 JSON 数据类型。参阅"),s("RouterLink",{attrs:{to:"/11/11.5/json.html"}},[t._v("章节 11.5，“JSON 数据类型”")]),t._v("。MySQL 还实现了 SQL:2016 标准预发布草案中指定的 SQL/JSON 函数的子集；有关更多信息，参阅"),s("RouterLink",{attrs:{to:"/12/12.18/json-functions.html"}},[t._v("章节 12.18，“JSON 函数”")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"选择-sql-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择-sql-模式"}},[t._v("#")]),t._v(" 选择 SQL 模式")]),t._v(" "),s("p",[t._v("MySQL Server 可以在不同的 SQL 模式下运行，并且可以根据 "),s("RouterLink",{attrs:{to:"/5/5.1/5.1.8/server-system-variables.html"}},[s("code",[t._v("sql_mode")])]),t._v(" 系统变量的值为不同的客户端应用不同的模式。DBA 可以将全局 SQL 模式设置为与站点服务器操作要求相匹配，并且每个应用程序都可以将其会话 SQL 模式按自己的要求设置。")],1),t._v(" "),s("p",[t._v("模式会影响 MySQL 支持的 SQL 语法及其执行的数据验证检查。这使得在不同的环境中使用 MySQL 以及与其他数据库服务器一起使用 MySQL 变得更加容易。")]),t._v(" "),s("p",[t._v("有关设置 SQL 模式的更多信息，参阅"),s("RouterLink",{attrs:{to:"/5/5.1/5.1.11/sql-mode.html"}},[t._v("章节 5.1.11，“服务器 SQL 模式”")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"以-ansi-模式运行-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以-ansi-模式运行-mysql"}},[t._v("#")]),t._v(" 以 ANSI 模式运行 MySQL")]),t._v(" "),s("p",[t._v("要在 ANSI 模式下运行 MySQL Server，请使用 "),s("RouterLink",{attrs:{to:"/5/5.1/5.1.7/server-options.html"}},[s("code",[t._v("--ansi")])]),t._v(" 选项启动 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.1/mysqld.html"}},[s("strong",[t._v("mysqld")])]),t._v("。在 ANSI 模式下运行服务器与使用以下选项启动服务器相同：")],1),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("--transaction-isolation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("SERIALIZABLE --sql-mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ANSI\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("要在运行时达到相同的效果，请执行以下两条语句：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSET GLOBAL sql_mode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ANSI'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("你可以看到，将 "),s("RouterLink",{attrs:{to:"/5/5.1/5.1.8/server-system-variables.html"}},[s("code",[t._v("sql_mode")])]),t._v(" 系统变量设置为 '"),s("code",[t._v("ANSI")]),t._v("' 将启用与 ANSI 模式相关的所有 SQL 模式选项，如下所示：")],1),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SET GLOBAL "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("sql_mode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ANSI'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SELECT @@GLOBAL.sql_mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'REAL_AS_FLOAT,PIPES_AS_CONCAT,ANSI_QUOTES,IGNORE_SPACE,ANSI'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("在 ANSI 模式下使用 "),s("RouterLink",{attrs:{to:"/5/5.1/5.1.7/server-options.html"}},[s("code",[t._v("--ansi")])]),t._v(" 运行服务器与将 SQL 模式设置为 '"),s("code",[t._v("ANSI")]),t._v("' 不同，因为 "),s("RouterLink",{attrs:{to:"/5/5.1/5.1.7/server-options.html"}},[s("code",[t._v("--ansi")])]),t._v(" 选项还设置事务隔离级别。")],1),t._v(" "),s("p",[t._v("参阅"),s("RouterLink",{attrs:{to:"/5/5.1/5.1.7/server-options.html"}},[t._v("章节 5.1.7，“服务器命令选项”")]),t._v("。")],1),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);