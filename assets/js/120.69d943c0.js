(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1178:function(t,e,s){"use strict";s.r(e);var a=s(15),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"消息队列的两种模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息队列的两种模式"}},[t._v("#")]),t._v(" 消息队列的两种模式")]),t._v(" "),a("h1",{attrs:{id:"点对点模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点对点模式"}},[t._v("#")]),t._v(" 点对点模式")]),t._v(" "),a("p",[t._v("一对一，消费者主动拉取数据，消息收到后消息清除。")]),t._v(" "),a("p",[t._v("消息生产者生产消息发送到 Queue 中，然后消息消费者从 Queue 中取出并且消费消息。消息被消费以后，queue 中不再有存储，所以消息消费者不可能消费到已经被消费的消息。 Queue 支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(764),alt:"img"}})]),t._v(" "),a("h1",{attrs:{id:"发布-订阅模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布-订阅模式"}},[t._v("#")]),t._v(" 发布/订阅模式")]),t._v(" "),a("p",[t._v("一对多，消费者消费数据之后不会清除消息")]),t._v(" "),a("p",[t._v("消息生产者(发布)将消息发布到 topic 中，同时有多个消息消费者(订阅)消费该消息。和点对点方式不同，发布到 topic 的消息会被所有订阅者消费。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(765),alt:"img"}})])])}),[],!1,null,null,null);e.default=r.exports},764:function(t,e,s){t.exports=s.p+"assets/img/image-20220321124517238.11f5558c.png"},765:function(t,e,s){t.exports=s.p+"assets/img/image-20220321124535909.e212580c.png"}}]);