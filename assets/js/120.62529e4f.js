(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{447:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_2-9-4-使用标准源分发安装-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-4-使用标准源分发安装-mysql"}},[s._v("#")]),s._v(" 2.9.4 使用标准源分发安装 MySQL")]),s._v(" "),a("p",[s._v("要从标准源分发安装MySQL，请执行以下操作：")]),s._v(" "),a("ol",[a("li",[s._v("验证你的系统是否满足"),a("RouterLink",{attrs:{to:"/2/2.9/2.9.2/source-installation-prerequisites.html"}},[s._v("章节 2.9.2，“源安装前提条件”")]),s._v("中列出的工具要求。")],1),s._v(" "),a("li",[s._v("使用"),a("RouterLink",{attrs:{to:"/2/2.1/2.1.3/getting-mysql.html"}},[s._v("章节 2.1.3，“如何获取 MySQL”")]),s._v("中的说明获取分发文件。")],1),s._v(" "),a("li",[s._v("使用本节中的说明配置、构建和安装分发。")]),s._v(" "),a("li",[s._v("按照"),a("RouterLink",{attrs:{to:"/2/2.10/postinstallation.html"}},[s._v("章节 2.10，“安装后设置和测试”")]),s._v("中的说明执行安装后程序。")],1)]),s._v(" "),a("p",[s._v("MySQL 在所有平台上都使用 CMake 作为构建框架。此处给出的说明应使你能够制作一个工作的安装。有关使用 CMake 构建 MySQL 的更多信息，参阅"),a("a",{attrs:{href:"https://dev.mysql.com/doc/internals/en/cmake.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何使用 CMake 构建 MySQL 服务器"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("如果从源 RPM 开始，请使用以下命令创建可以安装的二进制 RPM。如果没有 "),a("strong",[s._v("rpmbuild")]),s._v("，请改用 "),a("strong",[s._v("rpm")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rpmbuild "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rebuild")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--clean")]),s._v(" MySQL-VERSION.src.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("结果是安装一个或多个二进制RPM包，如"),a("RouterLink",{attrs:{to:"/2/2.5/2.5.4/linux-installation-rpm.html"}},[s._v("章节 2.5.4，“使用 Oracle 的 RPM 包在 Linux 上安装 MySQL”")]),s._v("所示。")],1),s._v(" "),a("p",[s._v("从压缩 "),a("strong",[s._v("tar")]),s._v(" 文件或 Zip 存档源发行版安装的顺序与从通用二进制发行版安装过程类似（参阅"),a("RouterLink",{attrs:{to:"/2/2.2/binary-installation.html"}},[s._v("章节 2.2，“使用通用二进制在 Unix/Linux 上安装 MySQL”")]),s._v("），不同之处在于它在所有平台上都使用，并包括配置和编译发行版的步骤。例如，对于 Unix 上的压缩 "),a("strong",[s._v("tar")]),s._v(" 文件源发行版，基本安装命令序列如下所示：")],1),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Preconfiguration setup")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" mysql\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /bin/false mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Beginning of source-build specific instructions")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-VERSION.tar.gz\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mysql-VERSION\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" bld\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bld\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# End of source-build specific instructions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Postinstallation setup")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mysql\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" mysql-files\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" mysql:mysql mysql-files\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" mysql-files\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/mysqld "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/mysql_ssl_rsa_setup\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/mysqld_safe "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Next command is optional")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" support-files/mysql.server /etc/init.d/mysql.server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("源构建特定指令的更详细版本如下所示。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("此处显示的过程不会为 MySQL 帐户设置任何密码。遵循程序后，继续"),a("RouterLink",{attrs:{to:"/2/2.10/postinstallation.html"}},[s._v("章节 2.10，“安装后设置和测试”")]),s._v("，进行安装后设置与测试。")],1)]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#执行预配置设置"}},[s._v("执行预配置设置")])]),a("li",[a("a",{attrs:{href:"#获取并解压分发包"}},[s._v("获取并解压分发包")])]),a("li",[a("a",{attrs:{href:"#配置分发"}},[s._v("配置分发")])]),a("li",[a("a",{attrs:{href:"#构建分发"}},[s._v("构建分发")])]),a("li",[a("a",{attrs:{href:"#安装分发"}},[s._v("安装分发")])]),a("li",[a("a",{attrs:{href:"#执行安装后设置"}},[s._v("执行安装后设置")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"执行预配置设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行预配置设置"}},[s._v("#")]),s._v(" 执行预配置设置")]),s._v(" "),a("p",[s._v("在 Unix 上，设置用于运行和执行 MySQL 服务器的 "),a("code",[s._v("mysql")]),s._v(" 用户和组，并拥有数据库目录。详细信息，参阅"),a("RouterLink",{attrs:{to:"/2/2.2/binary-installation.html#创建-mysql-用户和组"}},[s._v("创建 mysql 用户和组")]),s._v("。除非另有说明，然后以 "),a("code",[s._v("mysql")]),s._v(" 用户执行以下步骤。")],1),s._v(" "),a("h2",{attrs:{id:"获取并解压分发包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取并解压分发包"}},[s._v("#")]),s._v(" 获取并解压分发包")]),s._v(" "),a("p",[s._v("选择要解压缩分发的目录，并将其位置更改为该目录。")]),s._v(" "),a("p",[s._v("使用"),a("RouterLink",{attrs:{to:"/2/2.1/2.1.3/getting-mysql.html"}},[s._v("章节 2.1.3，“如何获取 MySQL”")]),s._v("中的说明获取分发文件。")],1),s._v(" "),a("p",[s._v("将分发解压到当前目录：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("要解压压缩的 "),a("strong",[s._v("tar")]),s._v(" 文件，"),a("strong",[s._v("tar")]),s._v(" 可以解压分发（如果它支持 "),a("code",[s._v("z")]),s._v(" 选项）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-VERSION.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你的 "),a("strong",[s._v("tar")]),s._v(" 不支持 "),a("code",[s._v("z")]),s._v(" 选项，请使用 "),a("strong",[s._v("gunzip")]),s._v(" 解压发行版，"),a("strong",[s._v("tar")]),s._v(" 再解压：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" gunzip "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" mysql-VERSION.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者，"),a("strong",[s._v("CMake")]),s._v(" 可以解压分发：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-E")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf mysql-VERSION.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("要解压 Zip 压缩，请使用 "),a("strong",[s._v("WinZip")]),s._v(" 或其他可以读取 "),a("code",[s._v(".zip")]),s._v(" 文件的工具。")])])]),s._v(" "),a("h2",{attrs:{id:"配置分发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置分发"}},[s._v("#")]),s._v(" 配置分发")]),s._v(" "),a("p",[s._v("将位置更改为解压分发的顶级目录：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mysql-VERSION\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在源树外部构建以保持树的清洁。如果顶级源目录在当前工作目录下命名为 "),a("code",[s._v("mysql-src")]),s._v("，则可以在同一级别构建名为 "),a("code",[s._v("bld")]),s._v(" 的目录。创建目录并切换到那里：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" bld\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置生成目录。最小配置命令不包含覆盖配置默认值的选项：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/mysql-src\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("生成目录不必位于源树之外。例如，你可以在顶级源代码树下的名为 "),a("code",[s._v("bld")]),s._v(" 的目录中构建。为此，从 "),a("code",[s._v("mysql-src")]),s._v(" 作为当前工作目录开始，创建目录 "),a("code",[s._v("bld")]),s._v("，然后切换到：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" bld\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("配置生成目录。最小配置命令不包含覆盖配置默认值的选项：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你在同一级别有多个源树（例如，构建多个版本的 MySQL），则第二种策略可能是有利的。第一种策略将所有构建目录放在同一级别，这需要为每个目录选择一个唯一的名称。使用第二种策略，可以为每个源树中的构建目录使用相同的名称。以下说明采用了第二种策略。")]),s._v(" "),a("p",[s._v("在 Windows 上，指定开发环境。例如，以下命令分别为 32 位或 64 位版本配置 MySQL：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Visual Studio 12 2013"')]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Visual Studio 12 2013 Win64"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在 macOS 上，要使用 Xcode IDE：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-G")]),s._v(" Xcode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行 "),a("strong",[s._v("cmake")]),s._v(" 时，可能需要向命令行添加选项。以下是一些示例：")]),s._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/2/2.9/2.9.7/source-configuration-options.html#常规选项"}},[s._v("-DBUILD_CONFIG=mysql_release")]),s._v("：使用 Oracle 用于为 MySQL 官方版本生成二进制发行版的相同构建选项配置源代码。")],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/2/2.9/2.9.7/source-configuration-options.html#安装布局选项"}},[s._v("-DCMAKE_INSTALL_PREFIX=dir_name")]),s._v("：配置分发以安装在特定位置。")],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/2/2.9/2.9.7/source-configuration-options.html#安装布局选项"}},[s._v("-DCPACK_MONOLITHIC_INSTALL=1")]),s._v("：导致make包生成单个安装文件而不是多个文件。")],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/2/2.9/2.9.7/source-configuration-options.html#特性选项"}},[s._v("-DWITH_DEBUG=1")]),s._v(": 使用调试支持构建分发。")],1)]),s._v(" "),a("p",[s._v("更多选项列表，参阅"),a("RouterLink",{attrs:{to:"/2/2.9/2.9.7/source-configuration-options.html"}},[s._v("章节 2.9.7，“MySQL 源配置选项”")])],1),s._v(" "),a("p",[s._v("要列出配置选项，请使用以下命令之一：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# overview")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-LH")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# overview with help text")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-LAH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# all params with help text")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ccmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# interactive display")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果 "),a("strong",[s._v("CMake")]),s._v(" 失败，你可能需要通过使用不同的选项再次运行它来重新配置。如果要重新配置，请注意以下事项：")]),s._v(" "),a("ul",[a("li",[s._v("如果 "),a("strong",[s._v("CMake")]),s._v(" 在先前运行之后运行，则它可能会使用在先前调用期间收集的信息。此信息存储在 "),a("code",[s._v("CMakeCache.txt")]),s._v(" 中。当 "),a("strong",[s._v("CMake")]),s._v(" 启动时，它会查找该文件并读取其内容（如果存在），前提是该信息仍然正确。重新配置时，该假设无效。")]),s._v(" "),a("li",[s._v("每次运行 "),a("strong",[s._v("CMake")]),s._v(" 时，都必须再次运行 "),a("strong",[s._v("make")]),s._v(" 以重新编译。但是，你可能希望首先从以前的版本中删除旧的对象文件，因为它们是使用不同的配置选项编译的。")])]),s._v(" "),a("p",[s._v("要防止使用旧的对象文件或配置信息，请在重新运行 "),a("strong",[s._v("CMake")]),s._v(" 之前，在 Unix 上的构建目录中运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" CMakeCache.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("或者，在 Windows 上：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" devenv MySQL.sln /clean\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" del CMakeCache.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在询问 "),a("a",{attrs:{href:"https://mysqlcommunity.slack.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL Community Slack"),a("OutboundLink")],1),s._v(" 之前，请检查 "),a("code",[s._v("CMakeFiles")]),s._v(" 目录中的文件以获取有关失败的有用信息。要提交错误报告，请使用"),a("RouterLink",{attrs:{to:"/1/1.5/bug-reports.html"}},[s._v("章节 1.5，“如何报告错误或问题”")]),s._v("中的说明。")],1),s._v(" "),a("h2",{attrs:{id:"构建分发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建分发"}},[s._v("#")]),s._v(" 构建分发")]),s._v(" "),a("p",[s._v("在 Unix：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERBOSE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("第二个命令设置 "),a("code",[s._v("VERBOSE")]),s._v(" 以显示每个编译源的命令。")]),s._v(" "),a("p",[s._v("在使用 GNU "),a("strong",[s._v("make")]),s._v(" 并且已安装为 "),a("strong",[s._v("gmake")]),s._v(" 的系统上使用 "),a("strong",[s._v("gmake")]),s._v("。")]),s._v(" "),a("p",[s._v("在 Windows：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" devenv MySQL.sln /build RelWithDebInfo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你已经进入编译阶段，但发行版尚未构建，参阅"),a("RouterLink",{attrs:{to:"/2/2.9/2.9.8/compilation-problems.html"}},[s._v("章节 2.9.8，“处理 MySQL 编译问题”")]),s._v("以获取帮助。如果这不能解决问题，请使用"),a("RouterLink",{attrs:{to:"/1/1.5/bug-reports.html"}},[s._v("章节 1.5，“如何报告错误或问题”")]),s._v("中给出的说明将其输入我们的错误数据库。如果你安装了所需工具的最新版本，并且它们在处理我们的配置文件时崩溃，请同时报告。但是，如果你收到"),a("code",[s._v("命令未找到（command not found）")]),s._v("错误或所需工具的类似问题，请不要报告。相反，请确保安装了所有所需工具，并且正确设置了 PATH 变量，以便shell可以找到它们。")],1),s._v(" "),a("h2",{attrs:{id:"安装分发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装分发"}},[s._v("#")]),s._v(" 安装分发")]),s._v(" "),a("p",[s._v("在 Unix：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这将在配置的安装目录下安装文件（默认为 "),a("code",[s._v("/usr/local/mysql")]),s._v("）。你可能需要以 "),a("code",[s._v("root")]),s._v(" 用户身份运行该命令。")]),s._v(" "),a("p",[s._v("要在特定目录中安装，请在命令行中添加 "),a("code",[s._v("DESTDIR")]),s._v(" 参数：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DESTDIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/mysql"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者，生成安装包文件，你可以将其安装到你喜欢的位置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此操作生成一个或多个 "),a("code",[s._v(".tar.gz")]),s._v(" 文件，这些文件可以像通用二进制分发包一样安装。参阅"),a("RouterLink",{attrs:{to:"/2/2.2/binary-installation.html"}},[s._v("章节 2.2，“使用通用二进制文件在 Unix/Linux 上安装 MySQL”")]),s._v("。如果在 "),a("RouterLink",{attrs:{to:"/2/2.9/2.9.7/source-configuration-options.html#安装布局选项"}},[s._v("-DCPACK_MONOLITHIC_INSTALL=1")]),s._v(" 的情况下运行 "),a("strong",[s._v("CMake")]),s._v("，则该操作将生成一个文件。否则，它会生成多个文件。")],1),s._v(" "),a("p",[s._v("在 Windows 上，生成数据目录，然后创建 "),a("code",[s._v(".zip")]),s._v(" 压缩安装包：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" devenv MySQL.sln /build RelWithDebInfo /project initial_database\n$"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" devenv MySQL.sln /build RelWithDebInfo /project package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("你可以在需要的地方安装生成的 "),a("code",[s._v(".zip")]),s._v(" 存档。参阅"),a("RouterLink",{attrs:{to:"/2/2.3/2.3.4/windows-install-archive.html"}},[s._v("章节 2.3.4节，“使用非安装压缩包在 Microsoft Windows 上安装 MySQL”")]),s._v("。")],1),s._v(" "),a("h2",{attrs:{id:"执行安装后设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行安装后设置"}},[s._v("#")]),s._v(" 执行安装后设置")]),s._v(" "),a("p",[s._v("安装过程的其余部分包括设置配置文件、创建核心数据库和启动 MySQL 服务器。有关说明，参阅"),a("RouterLink",{attrs:{to:"/2/2.10/postinstallation.html"}},[s._v("章节 2.10，“安装后设置和测试”")]),s._v("。")],1),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("MySQL 授权表中列出的帐户最初没有密码。启动服务器后，应按照"),a("RouterLink",{attrs:{to:"/2/2.10/postinstallation.html"}},[s._v("章节 2.10，“安装后设置和测试”")]),s._v("中的说明为其设置密码。")],1)]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/installing-source-distribution.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);