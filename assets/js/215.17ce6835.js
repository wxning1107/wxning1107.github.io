(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{911:function(e,t,r){"use strict";r.r(t);var o=r(15),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"值接收者和指针接收者区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#值接收者和指针接收者区别"}},[e._v("#")]),e._v(" 值接收者和指针接收者区别？")]),e._v(" "),r("p",[e._v("1."),r("strong",[e._v("方法是否需要修改 receiver 本身")]),e._v("。如果需要，那 receiver 必然要是指针了。")]),e._v(" "),r("p",[e._v("2."),r("strong",[e._v("效率问题")]),e._v("。如果 receiver 是值，那在方法调用时一定会产生 struct 拷贝，而大对象拷贝代价很大哦。")]),e._v(" "),r("p",[e._v("3."),r("strong",[e._v("一致性")]),e._v("。对于同一个 struct 的方法，value method 和 pointer method 混杂用肯定是不优雅的啦。")]),e._v(" "),r("p",[e._v("4.指针接受者分配到堆上")]),e._v(" "),r("p",[e._v("5.指针接收者在调用时可以用值去调，这是编译器做了优化")]),e._v(" "),r("p",[e._v("在官方 "),r("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//golang.org/doc/effective_go.html%23pointers_vs_values",target:"_blank",rel:"noopener noreferrer"}},[e._v("effective go"),r("OutboundLink")],1),e._v(" 文档中，对两者区别其实是有精确描述的：")]),e._v(" "),r("blockquote",[r("p",[e._v("The rule about pointers vs. values for receivers is that value methods can be invoked on pointers and values, but pointer methods can only be invoked on pointers.\nThere is a handy exception, though. When the value is addressable, the language takes care of the common case of invoking a pointer method on a value by inserting the address operator automatically")])]),e._v(" "),r("p",[e._v("值方法（value methods）可以通过指针和值调用，但是指针方法（pointer methods）只能通过指针来调用。")]),e._v(" "),r("p",[e._v("但有一个例外，如果某个值是可寻址的（addressable，或者说"),r("em",[e._v("左值")]),e._v("，可看"),r("a",{attrs:{href:"https://www.cnblogs.com/cheyunhua/p/15423910.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cnblogs文章"),r("OutboundLink")],1),e._v(" ），那么编译器会在值调用指针方法时自动插入取地址符，使得在此情形下看起来像指针方法也可以通过值来调用。")]),e._v(" "),r("p",[e._v("参考："),r("a",{attrs:{href:"https://mp.weixin.qq.com/s/EbxkBokYBajkCR-MazL0ZA",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信文章"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);