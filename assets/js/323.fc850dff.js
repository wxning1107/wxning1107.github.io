(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1197:function(v,_,s){"use strict";s.r(_);var t=s(15),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h1",{attrs:{id:"mysql你是怎么性能优化的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql你是怎么性能优化的"}},[v._v("#")]),v._v(" MySQL你是怎么性能优化的？")]),v._v(" "),s("p",[v._v("可以分为4个部分：")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("硬件和操作系统层面优化")])]),v._v(" "),s("li",[s("p",[v._v("架构设计层面优化")])]),v._v(" "),s("li",[s("p",[v._v("MySQL程序配置优化")])]),v._v(" "),s("li",[s("p",[v._v("SQL执行优化")])])]),v._v(" "),s("p",[s("font",{attrs:{size:"5"}},[s("strong",[v._v("硬件和操作系统层面优化")])])],1),v._v(" "),s("p",[v._v("从硬件层面看，影响MySQL性能的因素主要是cpu、可用内存大小、磁盘读写速度、网络带宽。")]),v._v(" "),s("p",[v._v("从操作系统层面看，应用文件句柄数，操作系统的网络配置。")]),v._v(" "),s("p",[v._v("这部分优化一般由dba或者运维来完成，在硬件基础资源优化中我们应该重点关注服务本身承载的体量，然后提出合理的指标要求，避免出现资源浪费的现象")]),v._v(" "),s("p",[s("font",{attrs:{size:"5"}},[s("strong",[v._v("架构设计层面优化")])])],1),v._v(" "),s("p",[v._v("MySQL是一个磁盘IO访问非常频繁的数据库，在高并发和高性能的场景中，我们优化角度可以分为以下几个部分：")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("搭建主从集群，保证服务高可用")])]),v._v(" "),s("li",[s("p",[v._v("读写分离，在读多写少的场景下可以避免读写冲突导致性能问题")])]),v._v(" "),s("li",[s("p",[v._v("分库分表，通过分库可以降低单个节点的IO压力，通过分表可以降低单表数据量，从而提升sql查询效率")])]),v._v(" "),s("li",[s("p",[v._v("针对热点数据，可以引入更为高效的数据库，比如redis、mongoDB，他们可以缓解mysql的访问压力，同时提升数据的检索性能")])])]),v._v(" "),s("p",[s("font",{attrs:{size:"5"}},[s("strong",[v._v("MySQL程序配置优化")])])],1),v._v(" "),s("p",[v._v("通过my.cnf配置文件完成，比如mysql 5.7版本默认最大链接数是151个，这个值可以在my.cnf中修改。第二，binlog日志默认不开启，可以修改开启。第三，缓存池bufferpool默认大小配置")]),v._v(" "),s("p",[s("font",{attrs:{size:"5"}},[s("strong",[v._v("SQL执行优化")])])],1),v._v(" "),s("ul",[s("li",[s("p",[v._v("第一，慢sql的定位和排查，我们可以通过慢查询日志和慢查询日志工具分析得到有问题的sql。")])]),v._v(" "),s("li",[s("p",[v._v("第二，执行计划分析，针对慢的sql使用关键字 explain 查看执行计划，可以重点关注type、key、rows等字段，从而定位执行慢的原因")])]),v._v(" "),s("li",[s("p",[v._v("第三，使用show profile工具，它是mysql提供的可以用来分析当前会话中sql语句资源消耗情况的工具，可以用于sql调优的测量，会保留最近15次运行结果，针对运行慢的sql可以得到执行过程中所有资源开销的情况，比如io开销、cpu开销、内存开销等。")])])])])}),[],!1,null,null,null);_.default=l.exports}}]);