(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{1428:function(v,_,t){"use strict";t.r(_);var p=t(15),s=Object(p.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"并发、并行、同步、异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发、并行、同步、异步"}},[v._v("#")]),v._v(" 并发、并行、同步、异步")]),v._v(" "),t("p",[t("strong",[v._v("并发")]),v._v("：")]),v._v(" "),t("p",[v._v("在操作系统中，某一时间段，几个程序在同一cpu上运行，但在任意时间点上，只有一个程序在cpu上运行")]),v._v(" "),t("p",[v._v("当有多个线程时，如果系统只有一个cpu，cpu不可能真正同时进行多个线程，cpu运行时间会被划分为多个时间段，每个时间段会分配给各个线程执行，一个时间段某个线程运行时，其他线程处于挂起状态，这就是并发，并发解决了排队等待问题，如果一个程序发生阻塞，其他程序仍然可以执行。")]),v._v(" "),t("p",[t("strong",[v._v("并行")]),v._v("：")]),v._v(" "),t("p",[v._v("当操作系统有多个cpu时，一个cpu处理A线程，另一个cpu处理B线程，两个线程互不抢占资源，可以同时进行，这就是并行")]),v._v(" "),t("p",[t("strong",[v._v("区别")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("并发只是在宏观上给人感觉有多个程序在同时运行，但在实际的单CPU系统中，每一时刻只有一个程序在运行，微观上这些程序是分时交替执行。")]),v._v(" "),t("li",[v._v("在多CPU系统中，将这些并发执行的程序分配到不同的CPU上处理，每个CPU用来处理一个程序，这样多个程序便可以实现同时执行。")])]),v._v(" "),t("p",[t("strong",[v._v("同步")]),v._v("：")]),v._v(" "),t("p",[v._v("同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，知道收到返回信息才继续执行下去；")]),v._v(" "),t("p",[t("strong",[v._v("异步")]),v._v("：")]),v._v(" "),t("p",[v._v("异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回式系统会通知进程进行处理，这样可以提高执行的效率。")])])}),[],!1,null,null,null);_.default=s.exports}}]);