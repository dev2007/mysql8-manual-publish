(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{350:function(t,s,v){"use strict";v.r(s);var e=v(13),_=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-10-5-自动启动和停止-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-5-自动启动和停止-mysql"}},[t._v("#")]),t._v(" 2.10.5 自动启动和停止 MySQL")]),t._v(" "),s("p",[t._v("本节讨论启动和停止 MySQL 服务器的方法。")]),t._v(" "),s("p",[t._v("通常，你可以通过以下方式之一启动 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.1/mysqld.html"}},[t._v("mysqld")]),t._v(" 服务器：")],1),t._v(" "),s("ul",[s("li",[t._v("直接调用 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.1/mysqld.html"}},[t._v("mysqld")]),t._v("。这适用于任何平台。")],1),t._v(" "),s("li",[t._v("在 Windows 上，你可以设置在 Windows 启动时自动运行的 MySQL 服务。参阅"),s("RouterLink",{attrs:{to:"/2/2.3/2.3.4/2.3.4.8/windows-start-service.html"}},[t._v("章节 2.3.4.8，“将 MySQL 作为 Windows 服务启动”")]),t._v("。")],1),t._v(" "),s("li",[t._v("在 Unix 和类 Unix 系统上，你可以调用 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("mysqld_safe")]),t._v("，它试图确定 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.1/mysqld.html"}},[t._v("mysqld")]),t._v(" 的正确选项，然后使用这些选项运行它。参阅"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("章节 4.3.2节，“mysqld_safe——MySQL 服务器启动脚本”")]),t._v("。")],1),t._v(" "),s("li",[t._v("在支持 systemd 的 Linux 系统上，可以使用它来控制服务器。参阅"),s("RouterLink",{attrs:{to:"/2/2.5/2.5.9/using-systemd.html"}},[t._v("章节 2.5.9，“使用 systemd 管理 MySQL 服务器”")]),t._v("。")],1),t._v(" "),s("li",[t._v("在使用 System V 方式运行目录（即 "),s("code",[t._v("/etc/init.d")]),t._v(" 和运行级特定目录）的系统上，调用 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("mysql.server")]),t._v("。该脚本主要用于系统启动和关闭。它通常以 mysql 的名称安装。"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("mysql.server")]),t._v(" 脚本通过调用 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("mysqld_safe")]),t._v(" 启动服务器。参阅"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("章节 4.3.3，“mysql.server——MySQL 服务器启动脚本”")]),t._v("。")],1),t._v(" "),s("li",[t._v("在 macOS 上，安装 launchd 守护程序，以在系统启动时启用 MySQL 自动启动。守护进程通过调用 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("mysqld_safe")]),t._v(" 启动服务器。有关详细信息，参阅"),s("RouterLink",{attrs:{to:"/2/2.4/2.4.3/macos-installation-launchd.html"}},[t._v("章节 2.4.3，“安装和使用 MySQL 启动守护程序”")]),t._v("。MySQL 首选项面板还通过系统首选项提供启动和停止 MySQL 的控制。参阅"),s("RouterLink",{attrs:{to:"/2/2.4/2.4.4/macos-installation-prefpane.html"}},[t._v("章节 2.4.4，“安装和使用 MySQL 首选项面板”")]),t._v("。")],1),t._v(" "),s("li",[t._v("在 Solaris 上，使用服务管理框架（SMF）系统启动和控制 MySQL 启动。")])]),t._v(" "),s("p",[t._v("systemd、"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("mysqld_safe")]),t._v(" 和 "),s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("mysql.server")]),t._v(" 脚本、Solaris SMF 和 macOS 启动项（或 MySQL 首选项面板）可用于手动或在系统启动时自动启动服务器。systemd、"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("mysql.server")]),t._v(" 和启动项也可用于停止服务器。")],1),t._v(" "),s("p",[t._v("下表显示了从选项文件中读取的服务器和启动脚本的选项组。")]),t._v(" "),s("p",[s("strong",[t._v("表 2.15 MySQL 启动脚本和支持的服务器选项组")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("脚本")]),t._v(" "),s("th",[t._v("选项组")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/4/4.3/4.3.1/mysqld.html"}},[t._v("mysqld")])],1),t._v(" "),s("td",[s("code",[t._v("[mysqld]")]),t._v(","),s("code",[t._v("[server]")]),t._v(","),s("code",[t._v("[mysqld-major_version]")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("mysqld_safe")])],1),t._v(" "),s("td",[s("code",[t._v("[mysqld]")]),t._v(","),s("code",[t._v("[server]")]),t._v(","),s("code",[t._v("[mysqld_safe]")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("mysql.server")])],1),t._v(" "),s("td",[s("code",[t._v("[mysqld]")]),t._v(","),s("code",[t._v("[mysql.server]")]),t._v(","),s("code",[t._v("[server]")])])])])]),t._v(" "),s("p",[s("code",[t._v("[mysqld-major_version]")]),t._v(" 表示名称为 "),s("code",[t._v("[mysqld-5.7]")]),t._v(" 和 "),s("code",[t._v("[mysqld-8.0]")]),t._v(" 的组由版本为 5.7.x、8.0.x 等的服务器读取。此功能可用于指定只能由给定发布系列中的服务器读取的选项。")]),t._v(" "),s("p",[t._v("为了向后兼容，"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.3/mysql-server.html"}},[t._v("mysql.server")]),t._v(" 还读取 "),s("code",[t._v("[mysql_server]")]),t._v(" 组，"),s("RouterLink",{attrs:{to:"/4/4.3/4.3.2/mysqld-safe.html"}},[t._v("mysqld_safe")]),t._v(" 还读取 "),s("code",[t._v("[safe_mysqld]")]),t._v(" 组。为了保持最新状态，你应该更新选项文件以使用 "),s("code",[t._v("[mysql.server]")]),t._v(" 和 "),s("code",[t._v("[mysqld_safe]")]),t._v(" 组。")],1),t._v(" "),s("p",[t._v("有关 MySQL 配置文件及其结构和内容的更多信息，参阅"),s("RouterLink",{attrs:{to:"/4/4.2/4.2.2/4.2.2.2/option-files.html"}},[t._v("章节 4.2.2.2，“使用选项文件”")]),t._v("。")],1),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/automatic-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=_.exports}}]);