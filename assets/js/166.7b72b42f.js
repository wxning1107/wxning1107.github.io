(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{750:function(t,e,s){"use strict";s.r(e);var r=s(15),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"有序集合-sortedset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有序集合-sortedset"}},[t._v("#")]),t._v(" 有序集合（sortedset）")]),t._v(" "),s("p",[t._v("有序集合这种数据类型，我们在跳表那章里已经详细讲过了。它用来存储一组数据，并且每个数据会附带一个得分。通过得分的大小，我们将数据组织成跳表这样的数据结构，以支持快速地按照得分值、得分区间获取数据。")]),t._v(" "),s("p",[t._v("实际上，跟 Redis 的其他数据类型一样，有序集合也并不仅仅只有跳表这一种实现方式。当数据量比较小的时候，Redis 会用压缩列表来实现有序集合。具体点说就是，使用压缩列表来实现有序集合的前提，有这样两个：")]),t._v(" "),s("ul",[s("li",[t._v("所有数据的大小都要小于 64 字节；")]),t._v(" "),s("li",[t._v("元素个数要小于 128 个。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);