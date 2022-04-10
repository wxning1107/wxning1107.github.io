(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1179:function(o,n,v){"use strict";v.r(n);var _=v(15),t=Object(_.a)({},(function(){var o=this,n=o.$createElement,v=o._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h1",{attrs:{id:"为什么用mongodb不用mysql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么用mongodb不用mysql"}},[o._v("#")]),o._v(" 为什么用MongoDB不用MySQL？")]),o._v(" "),v("p",[o._v("MongoDB的应用场景：")]),o._v(" "),v("p",[o._v("1.表结构不明确且数据不断变大 MongoDB是非结构化文档数据库，扩展字段很容易且不会影响原有数据。内容管理或者博客平台等，例如圈子系统，存储用户评论之类的。")]),o._v(" "),v("p",[o._v("2.更高的写入负载 MongoDB侧重高数据写入的性能，而非事务安全，适合业务系统中有大量“低价值”数据的场景。本身存的就是json格式数据。例如做日志系统。")]),o._v(" "),v("p",[o._v("3.数据量很大或者将来会变得很大 Mysql单表数据量达到5-10G时会出现明细的性能降级，需要做数据的水平和垂直拆分、库的拆分完成扩展，MongoDB内建了sharding、很多数据分片的特性，容易水平扩展，比较好的适应大数据量增长的需求。")]),o._v(" "),v("p",[o._v("4.高可用性 自带高可用，自动主从切换（副本集）")]),o._v(" "),v("p",[o._v("MongoDB不适用的场景：")]),o._v(" "),v("p",[o._v("1.MongoDB 对事务支持比较弱，需要用到事务的应用建议不用MongoDB。")]),o._v(" "),v("p",[o._v("2.MongoDB目前不支持join操作，需要复杂查询的应用也不建议使用MongoDB。")]),o._v(" "),v("p",[o._v("3.MongoDB还有一个最大的缺点，就是它占用的空间很大，因为它属于典型空间换时间原则的类型。")]),o._v(" "),v("p",[o._v("MySQL 的应用场景：")]),o._v(" "),v("p",[o._v("1.这些数据通常需要做结构化查询，比如join，这时候，关系型数据库就要胜出一筹")]),o._v(" "),v("p",[o._v("2.事务性，一致性，丰富的锁机制")]),o._v(" "),v("p",[o._v("MySQL 缺点：")]),o._v(" "),v("p",[o._v("1.在海量数据处理的时候效率会显著变慢。")]),o._v(" "),v("p",[v("strong",[o._v("参考：")]),o._v(" https://www.cnblogs.com/caihuafeng/p/5494336.html")])])}),[],!1,null,null,null);n.default=t.exports}}]);