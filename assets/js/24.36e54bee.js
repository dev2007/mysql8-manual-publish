(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{316:function(t,e,o){"use strict";o.r(e);var _=o(13),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1-6-1-mysql-对标准-sql-的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-mysql-对标准-sql-的扩展"}},[t._v("#")]),t._v(" 1.6.1 MySQL 对标准 SQL 的扩展")]),t._v(" "),e("p",[t._v("MySQL Server 支持一些在其他 SQL DBMS 中不太可能找到的扩展。请注意，如果你你用它们，你的代码很可能无法移植到其他 SQL Server。在某些情况下，你可以使用以下形式的注释编写包含 MySQL 扩展但仍可移植的代码：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/*"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" MySQL-specific code */\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("在这种情况下，MySQL Server 解析并执行注释中的代码，就像它解析和执行任何其他 SQL 语句一样，但是其他 SQL 服务器应该忽略扩展。例如，MySQL Server 在下面的语句中识别 "),e("code",[t._v("STRAIGHT_JOIN")]),t._v(" 关键字，但其他服务器不应识别：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("SELECT /*"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" STRAIGHT_JOIN */ col1 FROM table1,table2 WHERE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("如果在之后添加版本号 "),e("code",[t._v("!")]),t._v(" 字符，仅当 MySQL 版本大于或等于指定的版本号时才执行注释中的语法。以下注释中的 "),e("code",[t._v("KEY_BLOCK_SIZE")]),t._v(" 子句仅由 MySQL 5.1.10 或更高版本的服务器执行：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("CREATE TABLE t1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a INT, KEY "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" /*"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50110")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KEY_BLOCK_SIZE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" */"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("以下描述列出了按类别组织的 MySQL 扩展。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("磁盘上数据的组织")]),t._v(" "),e("p",[t._v("MySQL Server 将每个数据库映射到 MySQL 数据目录下的一个目录，并将数据库中的表映射到数据库目录中的文件名。因此，在具有区分大小写文件名的操作系统（如大多数 Unix 系统）上的 MySQL Server中，数据库和表名区分大小写。参阅"),e("RouterLink",{attrs:{to:"/9/9.2/9.2.3/identifier-case-sensitivity.html"}},[t._v("章节 9.2.3，“标识符区分大小写”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("通用语言语法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("默认情况下，字符串可以用 "),e("code",[t._v('"')]),t._v(" 以及 "),e("code",[t._v("'")]),t._v(" 括起来。如果启用了 "),e("RouterLink",{attrs:{to:"/5/5.1/5.1.11/sql-mode.html"}},[e("code",[t._v("ANSI_QUOTES")])]),t._v(" SQL模式，则字符串只能用 "),e("code",[t._v("'")]),t._v(" 括起来，服务器将 "),e("code",[t._v('"')]),t._v(" 括起来的字符串解释为标识符。")],1)]),t._v(" "),e("li",[e("p",[e("code",[t._v("\\")]),t._v(" 是字符串中的转义字符。")])]),t._v(" "),e("li",[e("p",[t._v("在 SQL 语句中，可以使用 "),e("em",[t._v("db_name.tbl_name")]),t._v(" 语法访问不同数据库中的表。某些 SQL Server 提供相同的功能，但称此为 "),e("code",[t._v("User space")]),t._v("。MySQL Server 不支持v如以下语句中使用的表空间："),e("code",[t._v("CREATE TABLE ralph.my_table ... IN my_tablespace")]),t._v("。")])])])]),t._v(" "),e("li",[e("p",[t._v("SQL 语句语法")]),t._v(" "),e("ul",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.7/13.7.3/13.7.3.1/analyze-table.html"}},[e("code",[t._v("ANALYZE TABLE")])]),t._v(", "),e("RouterLink",{attrs:{to:"/13/13.7/13.7.3/13.7.3.2/check-table.html"}},[e("code",[t._v("CHECK TABLE")])]),t._v(", "),e("RouterLink",{attrs:{to:"/13/13.7/13.7.3/13.7.3.4/optimize-table.html"}},[e("code",[t._v("OPTIMIZE TABLE")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.7/13.7.3/13.7.3.5/repair-table.html"}},[e("code",[t._v("REPAIR TABLE")])]),t._v(" 语句。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.1/13.1.12/create-database.html"}},[e("code",[t._v("CREATE DATABASE")])]),t._v(", "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.24/drop-database.html"}},[e("code",[t._v("DROP DATABASE")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.2/alter-database.html"}},[e("code",[t._v("ALTER DATABASE")])]),t._v(" 语句。参阅"),e("RouterLink",{attrs:{to:"/13/13.1/13.1.12/create-databas.html"}},[t._v("章节 13.1.12，“CREATE DATABASE 语句”")]),t._v("，"),e("RouterLink",{attrs:{to:"/13/13.1/13.1.24/drop-database.html"}},[t._v("章节 13.1.24，“DROP DATABASE 语句”")]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.2/alter-database.html"}},[t._v("章节 13.1.2，“ALTER DATABASE 语句”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2.3/do.html"}},[e("code",[t._v("DO")]),t._v(" 语句")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.8/13.8.2/explain.html"}},[e("code",[t._v("EXPLAIN SELECT")])]),t._v(" 获取查询优化器如何处理表的说明。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.7/13.7.8/13.7.8.3/flush.html"}},[e("code",[t._v("FLUSH")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.7/13.7.8/13.7.8.6/reset.html"}},[e("code",[t._v("RESET")])]),t._v(" 语句。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.7/13.7.6/13.7.6.1/set-variable.html"}},[e("code",[t._v("SET")])]),t._v(" 语句。参阅"),e("RouterLink",{attrs:{to:"/13/13.7/13.7.6/13.7.6.1/set-variable.html"}},[t._v("章节 13.7.6.1，“变量赋值的 SET 语法”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.7/13.7.7/show.html"}},[e("code",[t._v("SHOW")])]),t._v(" 语句。参阅"),e("RouterLink",{attrs:{to:"/13/13.7/13.7.7/show.html"}},[t._v("章节 13.7.7，“SHOW 语句”")]),t._v("。通过使用 "),e("code",[t._v("SELECT")]),t._v(" 查询 "),e("code",[t._v("INFORMATION_SCHEMA")]),t._v("，可以以更标准的方式获得许多特定于 MySQL 的 "),e("RouterLink",{attrs:{to:"/13/13.7/13.7.7/show.html"}},[e("code",[t._v("SHOW")])]),t._v(" 语句生成的信息。参阅 "),e("RouterLink",{attrs:{to:"/26/information-schema.html"}},[t._v("章节 26，“INFORMATION_SCHEMA 表”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2.7/load-data.html"}},[e("code",[t._v("LOAD DATA")])]),t._v(" 的使用。在许多情况下，此语法与 Oracle 的 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.7/load-data.html"}},[e("code",[t._v("LOAD DATA")])]),t._v(" 兼容。参阅"),e("RouterLink",{attrs:{to:"/13/13.2/13.2.7/load-data.html"}},[t._v("章节 13.2.7，“LOAD DATA 语句”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.1/13.1.36/rename-table.html"}},[e("code",[t._v("RENAME TABLE")])]),t._v(" 的使用。参阅"),e("RouterLink",{attrs:{to:"/13/13.1/13.1.36/rename-table.html"}},[t._v("章节 13.1.36，“RENAME TABLE 语句”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2/9/replace.html"}},[e("code",[t._v("REPLACE")])]),t._v(" 用于替代 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.2/delete.html"}},[e("code",[t._v("DELETE")])]),t._v(" 加 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.6/insert.html"}},[e("code",[t._v("INSERT")])]),t._v("。参阅"),e("RouterLink",{attrs:{to:"/13/13.2/13.2/9/replace.html"}},[t._v("章节 13.2.9，“REPLACE 语句”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("在 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.9/alter-table.html"}},[e("code",[t._v("ALTER TABLE")])]),t._v(" 语句中使用 "),e("code",[t._v("CHANGE col_name")]),t._v("、"),e("code",[t._v("DROP col_name")]),t._v("、"),e("RouterLink",{attrs:{to:"/13/13.1/13.1.27/drop-index.html"}},[e("code",[t._v("DROP INDEX")])]),t._v("、"),e("code",[t._v("IGNORE")]),t._v(" 或 "),e("code",[t._v("RENAME")]),t._v("。在 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.9/alter-table.html"}},[e("code",[t._v("ALTER TABLE")])]),t._v(" 语句中使用多个子语句 "),e("code",[t._v("ADD")]),t._v("、"),e("code",[t._v("ALTER")]),t._v("、"),e("code",[t._v("DROP")]),t._v(" 或 "),e("code",[t._v("CHANGE")]),t._v("。参阅"),e("RouterLink",{attrs:{to:"/13/13.1/13.1.9/alter-table.html"}},[t._v("章节 13.1.9，“ALTER TABLE 语句”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("在 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.20/create-table.html"}},[e("code",[t._v("CREATE TABLE")])]),t._v(" 语句中使用索引名、列前缀上的索引以及 "),e("code",[t._v("INDEX")]),t._v(" 或 "),e("code",[t._v("KEY")]),t._v("。参阅"),e("RouterLink",{attrs:{to:"/13/13.1/13.1.20/create-table.html"}},[t._v("章节 13.1.20，“CREATE TABLE 语句”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("和 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.20/create-table.html"}},[e("code",[t._v("CREATE TABLE")])]),t._v(" 一起使用 "),e("code",[t._v("TEMPORARY")]),t._v(" 或 "),e("code",[t._v("IF NOT EXISTS")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("和 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.32/drop-table.html"}},[e("code",[t._v("DROP TABLE")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.24/drop-database.html"}},[e("code",[t._v("DROP DATABASE")])]),t._v(" 一起使用 "),e("code",[t._v("IF EXISTS")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("使用单个 "),e("RouterLink",{attrs:{to:"/13/13.1/13.1.32/drop-table.html"}},[e("code",[t._v("DROP TABLE")])]),t._v(" 语句删除多个表的功能。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2.13/update.html"}},[e("code",[t._v("UPDATE")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.2/delete.html"}},[e("code",[t._v("DELETE")])]),t._v(" 语句的 "),e("code",[t._v("ORDER BY")]),t._v(" 和 "),e("code",[t._v("LIMIT")]),t._v(" 子句。")],1)]),t._v(" "),e("li",[e("p",[t._v("语法 "),e("code",[t._v("INSERT INTO tbl_name SET col_name = ...")]),t._v("。")])]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2.6/insert.html"}},[e("code",[t._v("INSERT")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.9/replace.html"}},[e("code",[t._v("REPLACE")])]),t._v(" 语句的 "),e("code",[t._v("DELAYED")]),t._v(" 子句。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2.6/insert.html"}},[e("code",[t._v("INSERT")])]),t._v("、"),e("RouterLink",{attrs:{to:"/13/13.2/13.2.9/replace.html"}},[e("code",[t._v("REPLACE")])]),t._v("、"),e("RouterLink",{attrs:{to:"/13/13.2/13.2.2/delete.html"}},[e("code",[t._v("DELETE")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.13/update.html"}},[e("code",[t._v("UPDATE")])]),t._v(" 的 "),e("code",[t._v("LOW_PRIORITY")]),t._v(" 子句。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/13/13.2/13.2.10/select.html"}},[e("code",[t._v("SELECT")])]),t._v(" 语句的可选项，如 "),e("code",[t._v("STRAIGHT_JOIN")]),t._v(" 或 "),e("code",[t._v("SQL_SMALL_RESULT")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("在 "),e("code",[t._v("GROUP BY")]),t._v(" 子句中不需要命名所有选中的列。这为一些非常特定但非常正常的查询提供了更好的性能。参阅"),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[t._v("章节 12.20，“Aggregate 函数”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("你可以在 "),e("code",[t._v("GROUP BY")]),t._v(" 中指定 "),e("code",[t._v("DESC")]),t._v(" 和 "),e("code",[t._v("ASC")]),t._v("，但不能在 "),e("code",[t._v("ORDER BY")]),t._v(" 中使用。")])]),t._v(" "),e("li",[e("p",[t._v("可在语句中使用赋值操作符 "),e("code",[t._v(":=")]),t._v(" 设置变量。参阅"),e("RouterLink",{attrs:{to:"/9/9.4/user-variables.html"}},[t._v("章节 9.4，“用户定义变量”")]),t._v("。")],1)])])]),t._v(" "),e("li",[e("p",[t._v("数据类型")]),t._v(" "),e("ul",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/11/11.1/11.1.2/integer-types.html"}},[e("code",[t._v("MEDIUMINT")])]),t._v("、"),e("RouterLink",{attrs:{to:"/13/13.7/13.7.6/13.7.6.1/set-variable.html"}},[e("code",[t._v("SET")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/11/11.3/11.3.5/enum.html"}},[e("code",[t._v("ENUM")])]),t._v(" 数据类型，以及可变的 "),e("RouterLink",{attrs:{to:"/11/11.3/11.3.4/blob.html"}},[e("code",[t._v("BLOB")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/11/11.3/11.3.4/blob.html"}},[e("code",[t._v("TEXT")])]),t._v(" 数据类型。")],1)]),t._v(" "),e("li",[e("p",[e("code",[t._v("AUTO_INCREMENT")]),t._v("、"),e("code",[t._v("BINARY")]),t._v("、"),e("code",[t._v("NULL")]),t._v("、"),e("code",[t._v("UNSIGNED")]),t._v(" 和 "),e("code",[t._v("ZEROFILL")]),t._v(" 数据类型属性。")])])])]),t._v(" "),e("li",[e("p",[t._v("函数和操作符")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("为了方便从其他 SQL 环境迁移的用户，MySQL Server 为许多函数支持别名。例如，所有字符串函数都支持标准 SQL 语法和 ODBC 语法。")])]),t._v(" "),e("li",[e("p",[t._v("MySQL服务器将 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("||")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("&&")])]),t._v(" 运算符理解为逻辑 OR 和 AND，就像在 C 编程语言中一样。在 MySQL Server 中，"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("||")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("OR")])]),t._v(" 是同义词，就像 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("&&")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("AND")])]),t._v("。由于这种良好的语法，MySQL Server 不支持用于字符串连接的标准 SQL "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("||")])]),t._v(" 运算符；改为使用 "),e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("CONCAT()")])]),t._v("。因为 "),e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("CONCAT()")])]),t._v(" 接受任意数量的参数，所以很容易转换为 MySQL Server 使用的 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("||")])]),t._v(" 运算符。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/12/12.20/12.20.1/aggregate-functions.html"}},[e("code",[t._v("COUNT(DISTINCT value_list)")])]),t._v(" 的使用，其中 "),e("em",[t._v("value_list")]),t._v(" 元素可以多个。")],1)]),t._v(" "),e("li",[e("p",[t._v("默认情况下，字符串比较不区分大小写，排序顺序由当前字符集的排序规则确定，默认情况下为 "),e("code",[t._v("utf8mb4")]),t._v("。要执行区分大小写的比较，你应该使用 "),e("code",[t._v("BINARY")]),t._v(" 属性声明列，或者使用 "),e("code",[t._v("BINARY")]),t._v(" 转换，这会使用底层字符代码值而不是词法顺序进行比较。")])]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/12/12.6/12.6.2/mathematical-functions.html"}},[e("code",[t._v("%")])]),t._v(" 运算符是 "),e("RouterLink",{attrs:{to:"/12/12.6/12.6.2/mathematical-functions.html"}},[e("code",[t._v("MOD()")])]),t._v(" 的同义词。也就是说，"),e("em",[t._v("N % M")]),t._v(" 等于"),e("RouterLink",{attrs:{to:"/12/12.6/12.6.2/mathematical-functions.html"}},[e("code",[t._v("MOD(N,M)")])]),t._v("。"),e("RouterLink",{attrs:{to:"/12/12.6/12.6.2/mathematical-functions.html"}},[e("code",[t._v("%")])]),t._v(" 为 C 程序员提供支持，并与 PostgreSQL 兼容。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/12/12.4/12.4.4/assignment-operators.html"}},[e("code",[t._v("=")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v("<>")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v("<=")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v("<")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v(">=")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v(">")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v("<<")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v(">>")])]),t._v("、 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.2/comparison-operators.html"}},[e("code",[t._v("<=>")])]),t._v("、 "),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("AND")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.4/12.4.3/logical-operators.html"}},[e("code",[t._v("OR")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/12/12.8/12.8.1/string-comparison-functions.html"}},[e("code",[t._v("LIKE")])]),t._v(" 运算符可用于 "),e("RouterLink",{attrs:{to:"/13/13.2/13.2.10/select.html"}},[e("code",[t._v("SELECT")])]),t._v(" 语句中输出列列表（"),e("code",[t._v("FROM")]),t._v(" 左侧）的表达式中")],1),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" SELECT "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("col1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" AND "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("col2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" FROM my_table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])]),t._v(" "),e("li",[e("p",[t._v("函数 "),e("RouterLink",{attrs:{to:"/12/12.16/information-functions.html"}},[e("code",[t._v("LAST_INSERT_ID()")])]),t._v(" 返回最近的 "),e("code",[t._v("AUTO_INCREMENT")]),t._v(" 值。参阅"),e("RouterLink",{attrs:{to:"/12/12.16/information-functions.html"}},[t._v("章节 12.16，“信息函数”")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("对数值可使用 "),e("RouterLink",{attrs:{to:"/12/12.8/12.8.1/string-comparison-functions.html"}},[e("code",[t._v("LIKE")])]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/12/12.8/12.8.2/regexp.html"}},[e("code",[t._v("REGEXP")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/12/12.8/12.8.2/regexp.html"}},[e("code",[t._v("NOT REGEXP")])]),t._v(" 扩展了正则表达式操作符。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("CONCAT()")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("CHAR()")])]),t._v(" 带一个或两个以上参数。（在 MySQL Server 中，这些函数可以接受数量可变的参数。")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/12/12.13/bit-functions.html"}},[e("code",[t._v("BIT_COUNT()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.5/flow-control-functions.html"}},[e("code",[t._v("CASE")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("ELT()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.7/date-and-time-functions.html"}},[e("code",[t._v("FROM_DAYS()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("FORMAT()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.5/flow-control-functions.html"}},[e("code",[t._v("IF()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.14/encryption-functions.html"}},[e("code",[t._v("MD5()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.7/date-and-time-functions.html"}},[e("code",[t._v("PERIOD_ADD()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.7/date-and-time-functions.html"}},[e("code",[t._v("PERIOD_DIFF()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.7/date-and-time-functions.html"}},[e("code",[t._v("TO_DAYS()")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/12/12.7/date-and-time-functions.html"}},[e("code",[t._v("WEEKDAY()")])]),t._v(" 函数。")],1)]),t._v(" "),e("li",[e("p",[t._v("使用 "),e("RouterLink",{attrs:{to:"/12/12.8/string-functions.html"}},[e("code",[t._v("TRIM()")])]),t._v(" 修剪子字符串。标准 SQL 仅支持删除单个字符。")],1)]),t._v(" "),e("li",[e("p",[e("code",[t._v("GROUP BY")]),t._v(" 的函数 "),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[e("code",[t._v("STD()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[e("code",[t._v("BIT_OR()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[e("code",[t._v("BIT_AND()")])]),t._v("、"),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[e("code",[t._v("BIT_XOR()")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[e("code",[t._v("GROUP_CONCAT()")])]),t._v("。参阅"),e("RouterLink",{attrs:{to:"/12/12.20/aggregate-functions-and-modifiers.html"}},[t._v("章节 12.20，“Aggregate 函数”")]),t._v("。")],1)])])])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/extensions-to-ansi.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);