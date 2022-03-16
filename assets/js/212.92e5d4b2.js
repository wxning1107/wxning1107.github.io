(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{863:function(t,e,n){"use strict";n.r(e);var o=n(15),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"go协程和python协程区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go协程和python协程区别"}},[t._v("#")]),t._v(" go协程和python协程区别")]),t._v(" "),n("p",[t._v("Python的协程源于yield指令。yield有两个功能:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("yield item用于产出一个值，反馈给next()的调用方。")])]),t._v(" "),n("li",[n("p",[t._v("作出让步，暂停执行生成器，让调用方继续工作，直到需要使用另一个值时再调用next()。")])])]),t._v(" "),n("p",[t._v("在 Python 中，协程的调度是非抢占式的，也就是说一个协程必须主动让出执行机会，其他协程才有机会运行。")]),t._v(" "),n("p",[t._v("让出执行的关键字就是 await。也就是说一个协程如果阻塞了，持续不让出 CPU，那么整个线程就卡住了，没有任何并发。")]),t._v(" "),n("p",[t._v("Python 中的协程是严格的 1:N 关系，也就是一个线程对应了多个协程。虽然可以实现异步I/O，但是不能有效利用多核(GIL)。")]),t._v(" "),n("p",[t._v("而 Go 中是 M:N 的关系，也就是 N 个协程会映射分配到 M 个线程上，这样带来了两点好处：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("多个线程能分配到不同核心上,CPU 密集的应用使用 goroutine 也会获得加速.")])]),t._v(" "),n("li",[n("p",[t._v("即使有少量阻塞的操作，也只会阻塞某个 worker 线程，而不会把整个程序阻塞。")])])]),t._v(" "),n("p",[t._v("参考："),n("a",{attrs:{href:"https://www.cnblogs.com/lgjbky/p/10838035.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cnblogs文章"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);