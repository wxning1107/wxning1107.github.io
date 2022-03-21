(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1180:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kafka-文件存储机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-文件存储机制"}},[t._v("#")]),t._v(" Kafka 文件存储机制")]),t._v(" "),e("p",[e("img",{attrs:{src:a(767),alt:"img"}})]),t._v(" "),e("p",[t._v("Kafka 中消息是以 topic 进行分类的，生产者生产消息，消费者消费消息，都是面向 topic 的。")]),t._v(" "),e("p",[t._v("topic 是逻辑上的概念，而 partition 是物理上的概念，每个 partition 对应于一个 log 文 件，该 log 文件中存储的就是 producer 生产的数据。Producer 生产的数据会被不断追加到该 log 文件末端，且每条数据都有自己的 offset。消费者组中的每个消费者，都会实时记录自己 消费到了哪个 offset，以便出错恢复时，从上次的位置继续消费。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(768),alt:"img"}})]),t._v(" "),e("p",[t._v("由于生产者生产的消息会不断追加到 log 文件末尾，为防止 log 文件过大导致数据定位 效率低下，Kafka 采取了分片和索引机制，将每个 partition 分为多个 segment。每个 segment 对应两个文件——“.index”文件和“.log”文件。这些文件位于一个文件夹下，该文件夹的命名 规则为:topic 名称+分区序号。例如，first 这个 topic 有三个分区，则其对应的文件夹为 first- 0,first-1,first-2。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("00000000000000000000.index\n00000000000000000000.log\n00000000000000170410.index\n00000000000000170410.log\n00000000000000239430.index\n00000000000000239430.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("index 和 log 文件以当前 segment 的第一条消息的 offset 命名。“.index”文件存储大量的索引信息，“.log”文件存储大量的数据，索引文件中的元 数据指向对应数据文件中 message 的物理偏移地址。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(769),alt:"img"}})])])}),[],!1,null,null,null);s.default=n.exports},767:function(t,s,a){t.exports=a.p+"assets/img/image-20220321125103883.89a27eaa.png"},768:function(t,s,a){t.exports=a.p+"assets/img/image-20220321125225626.b8ccc8d4.png"},769:function(t,s,a){t.exports=a.p+"assets/img/image-20220321125430368.1d38b9a1.png"}}]);