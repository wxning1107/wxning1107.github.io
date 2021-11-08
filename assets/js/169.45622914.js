(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{756:function(e,r,t){"use strict";t.r(r);var i=t(15),n=Object(i.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[e._v("#")]),e._v(" 查询")]),e._v(" "),t("p",[e._v("前面三个阶段的处理，只是为了最后的查询做铺垫。因此，现在我们就要利用之前产生的几个文件，来实现最终的用户搜索功能。")]),e._v(" "),t("ul",[t("li",[e._v("doc_id.bin：记录网页链接和编号之间的对应关系。")]),e._v(" "),t("li",[e._v("term_id.bin：记录单词和编号之间的对应关系。")]),e._v(" "),t("li",[e._v("index.bin：倒排索引文件，记录每个单词编号以及对应包含它的网页编号列表。")]),e._v(" "),t("li",[e._v("term_offsert.bin：记录每个单词编号在倒排索引文件中的偏移位置。")])]),e._v(" "),t("p",[e._v("这四个文件中，除了倒排索引文件（index.bin）比较大之外，其他的都比较小。为了方便快速查找数据，我们将其他三个文件都加载到内存中，并且组织成散列表这种数据结构。")]),e._v(" "),t("p",[e._v("当用户在搜索框中，输入某个查询文本的时候，我们先对用户输入的文本进行分词处理。假设分分词之后，我们得到 k 个单词。")]),e._v(" "),t("p",[e._v("我们拿这 k 个单词，去 term_id.bin 对应的散列表中，查找对应的单词编号。经过这个查询之后，我们得到了这 k 个单词对应的单词编号。")]),e._v(" "),t("p",[e._v("我们拿这 k 个单词编号，去 term_offset.bin 对应的散列表中，查找每个单词编号在倒排索引文件中的偏移位置。经过这个查询之后，我们得到了 k 个偏移位置。")]),e._v(" "),t("p",[e._v("我们拿这 k 个偏移位置，去倒排索引（index.bin）中，查找 k 个单词对应的包含它的网页编号列表。经过这一步查询之后，我们得到了 k 个网页编号列表。")]),e._v(" "),t("p",[e._v("我们针对这 k 个网页编号列表，统计每个网页编号出现的次数。具体到实现层面，我们可以借助散列表来进行统计。统计得到的结果，我们按照出现次数的多少，从小到大排序。出现次数越多，说明包含越多的用户查询单词（用户输入的搜索文本，经过分词之后的单词）。")]),e._v(" "),t("p",[e._v("经过这一系列查询，我们就得到了一组排好序的网页编号。我们拿着网页编号，去 doc_id.bin 文件中查找对应的网页链接，分页显示给用户就可以了。")]),e._v(" "),t("p",[e._v("今天，我给你展示了一个小型搜索引擎的设计思路。这只是一个搜索引擎设计的基本原理，有很多优化、细节我们并未涉及，比如计算网页权重的"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/PageRank",target:"_blank",rel:"noopener noreferrer"}},[e._v("PageRank"),t("OutboundLink")],1),e._v("算法、计算查询结果排名的"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Tf-idf",target:"_blank",rel:"noopener noreferrer"}},[e._v("tf"),t("OutboundLink")],1),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Tf-idf",target:"_blank",rel:"noopener noreferrer"}},[e._v("-"),t("OutboundLink")],1),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Tf-idf",target:"_blank",rel:"noopener noreferrer"}},[e._v("idf"),t("OutboundLink")],1),e._v("模型等等。在讲解的过程中，我们涉及的数据结构和算法有：图、散列表、Trie 树、布隆过滤器、单模式字符串匹配算法、AC 自动机、广度优先遍历、归并排序等。")])])}),[],!1,null,null,null);r.default=n.exports}}]);