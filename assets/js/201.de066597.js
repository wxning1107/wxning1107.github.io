(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{851:function(t,e,n){"use strict";n.r(e);var a=n(15),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"调度器gmp原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调度器gmp原理"}},[t._v("#")]),t._v(" 调度器GMP原理")]),t._v(" "),n("h1",{attrs:{id:"简述gmp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简述gmp"}},[t._v("#")]),t._v(" 简述gmp？")]),t._v(" "),n("p",[t._v("g在runtime里是一个名字为g的结构体，主要保存 goroutine 的一些状态信息以及 CPU 的一些寄存器的值，栈信息。")]),t._v(" "),n("p",[t._v("m代表一个工作线程，它保存了 M 自身使用的栈信息、当前正在 M 上执行的 G 信息、与之绑定的 P 信息，当 M 没有工作可做的时候，在它休眠前，会“自旋”地来找工作：检查全局队列，查看 network poller，试图执行 gc 任务，或者“偷”工作。")]),t._v(" "),n("p",[t._v("p取 processor 的首字母，为 M 的执行提供“上下文”，保存 M 执行 G 时的一些资源，例如本地可运行 G 队列，memeory cache 等。一个 M 只有绑定 P 才能执行 goroutine，当 M 被阻塞时，整个 P 会被传递给其他 M 。M 会从与它绑定的 P 的本地队列获取可运行的 G，也会从 network poller 里获取可运行的 G，还会从其他 P 偷 G。")]),t._v(" "),n("h1",{attrs:{id:"为什么需要p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要p"}},[t._v("#")]),t._v(" 为什么需要P？")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("You might wonder now, why have contexts at all? Can't we just put the runqueues on the threads and get rid of contexts? Not really. The reason we have contexts is so that we can hand them off to other threads if the running thread needs to block for some reason.\n\nAn example of when we need to block, is when we call into a syscall. Since a thread cannot both be executing code and be blocked on a syscall, we need to hand off the context so it can keep scheduling.\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("翻译一下，当一个线程阻塞的时候，将和它绑定的 P 上的 goroutines 转移到其他线程。")]),t._v(" "),n("h1",{attrs:{id:"寻找g的过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#寻找g的过程"}},[t._v("#")]),t._v(" 寻找G的过程")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// only 1/61 of the time, check the global runnable queue for a G.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if not found, check the local queue.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if not found,")]),t._v("\n  \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     check local")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t\t if not, check the global runnable queue.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     if not found, poll network.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     try to steal from other Ps.   ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h1",{attrs:{id:"work-stealing偷取数量问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#work-stealing偷取数量问题"}},[t._v("#")]),t._v(" work stealing偷取数量问题")]),t._v(" "),n("p",[t._v("从全局队列偷：根据p的数量平分全局队列中的g（sched.runqsize/gomaxprocs + 1），但是最多只能偷本地队列一半的数量（len("),n("em",[t._v("p")]),t._v(".runq)/2）。也就是sched.runqsize/gomaxprocs + 1和len("),n("em",[t._v("p")]),t._v(".runq)/2中的最小值")]),t._v(" "),n("p",[t._v("从其他p本地队列偷：尾部偷一半")]),t._v(" "),n("h1",{attrs:{id:"goroutine状态有哪些-p的状态有哪些"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goroutine状态有哪些-p的状态有哪些"}},[t._v("#")]),t._v(" goroutine状态有哪些？p的状态有哪些？")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("状态")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("_Gidle")]),t._v(" "),n("td",[t._v("刚刚被分配并且还没有被初始化")])]),t._v(" "),n("tr",[n("td",[t._v("_Grunnable")]),t._v(" "),n("td",[t._v("没有执行代码，没有栈的所有权，存储在运行队列中")])]),t._v(" "),n("tr",[n("td",[t._v("_Grunning")]),t._v(" "),n("td",[t._v("可以执行代码，拥有栈的所有权，被赋予了内核线程 M 和处理器 P")])]),t._v(" "),n("tr",[n("td",[t._v("_Gsyscall")]),t._v(" "),n("td",[t._v("正在执行系统调用，拥有栈的所有权，没有执行用户代码，被赋予了内核线程 M 但是不在运行队列上")])]),t._v(" "),n("tr",[n("td",[t._v("_Gwaiting")]),t._v(" "),n("td",[t._v("由于运行时而被阻塞，没有执行用户代码并且不在运行队列上，但是可能存在于 Channel 的等待队列上")])]),t._v(" "),n("tr",[n("td",[t._v("_Gdead")]),t._v(" "),n("td",[t._v("没有被使用，没有执行代码，可能有分配的栈")])]),t._v(" "),n("tr",[n("td",[t._v("_Gcopystack")]),t._v(" "),n("td",[t._v("栈正在被拷贝，没有执行代码，不在运行队列上")])]),t._v(" "),n("tr",[n("td",[t._v("_Gpreempted")]),t._v(" "),n("td",[t._v("由于抢占而被阻塞，没有执行用户代码并且不在运行队列上，等待唤醒")])]),t._v(" "),n("tr",[n("td",[t._v("_Gscan")]),t._v(" "),n("td",[t._v("GC 正在扫描栈空间，没有执行代码，可以与其他状态同时存在")])])])]),t._v(" "),n("p",[t._v("虽然 Goroutine 在运行时中定义的状态非常多而且复杂，但是我们可以将这些不同的状态聚合成三种：等待中、可运行、运行中，运行期间会在这三种状态来回切换：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("等待中：Goroutine 正在等待某些条件满足，例如：系统调用结束等，包括 "),n("code",[t._v("_Gwaiting")]),t._v("、"),n("code",[t._v("_Gsyscall")]),t._v(" 和 "),n("code",[t._v("_Gpreempted")]),t._v(" 几个状态；")])]),t._v(" "),n("li",[n("p",[t._v("可运行：Goroutine 已经准备就绪，可以在线程运行，如果当前程序中有非常多的 Goroutine，每个 Goroutine 就可能会等待更多的时间，即 "),n("code",[t._v("_Grunnable")]),t._v("；")])]),t._v(" "),n("li",[n("p",[t._v("运行中：Goroutine 正在某个线程上运行，即 "),n("code",[t._v("_Grunning")]),t._v("；")])])]),t._v(" "),n("p",[t._v("p有五种状态：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("状态")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("_Pidle")]),t._v(" "),n("td",[t._v("处理器没有运行用户代码或者调度器，被空闲队列或者改变其状态的结构持有，运行队列为空")])]),t._v(" "),n("tr",[n("td",[t._v("_Prunning")]),t._v(" "),n("td",[t._v("被线程 M 持有，并且正在执行用户代码或者调度器")])]),t._v(" "),n("tr",[n("td",[t._v("_Psyscall")]),t._v(" "),n("td",[t._v("没有执行用户代码，当前线程陷入系统调用")])]),t._v(" "),n("tr",[n("td",[t._v("_Pgcstop")]),t._v(" "),n("td",[t._v("被线程 M 持有，当前处理器由于垃圾回收被停止")])]),t._v(" "),n("tr",[n("td",[t._v("_Pdead")]),t._v(" "),n("td",[t._v("当前处理器已经不被使用")])])])]),t._v(" "),n("h1",{attrs:{id:"g0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#g0"}},[t._v("#")]),t._v(" g0")]),t._v(" "),n("p",[t._v("g0 是一个运行时中比较特殊的 Goroutine，它会深度参与运行时的调度过程，包括 Goroutine 的创建、大内存分配和 CGO 函数的执行。")]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("与普通 Goroutine 不同的是，"),n("code",[t._v("g0")]),t._v(" 有着固定且更大的栈，这使得在需要更大的栈的时候，以及栈不宜增长的时候，Go 可以进行操作。在 "),n("code",[t._v("g0")]),t._v(" 的职责中，我们可以列出：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Goroutine 创建。当调用 "),n("code",[t._v("go func(){ ... }()")]),t._v(" 或 "),n("code",[t._v("go myFunction()")]),t._v(" 时，Go 会在把它们放入本地队列前，将函数的创建委托给 "),n("code",[t._v("g0")]),t._v(" 去做。新创建的 Goroutine 优先运行，并且被放在本地队列的顶部。")])]),t._v(" "),n("li",[n("p",[t._v("defer 函数分配。")])]),t._v(" "),n("li",[n("p",[t._v("垃圾收集操作，比如 STW（ stopping the world ），扫描 Goroutine 的栈，以及一些标记清理操作。")])]),t._v(" "),n("li",[n("p",[t._v("栈增长。当需要的时候，Go 会增加 Goroutine 的大小。这个操作是由 "),n("code",[t._v("g0")]),t._v(" 的 prolog 函数完成的。")])])]),t._v(" "),n("p",[n("strong",[t._v("参考：")]),t._v(" "),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/381747249",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎专栏文章"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"m0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#m0"}},[t._v("#")]),t._v(" m0")]),t._v(" "),n("p",[n("code",[t._v("M0")]),t._v("是启动程序后的编号为0的主线程，这个M对应的实例会在全局变量runtime.m0中，不需要在heap上分配，M0负责执行初始化操作和启动第一个G， 在之后M0就和其他的M一样了。")]),t._v(" "),n("h1",{attrs:{id:"n-1-1-1线程模型问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#n-1-1-1线程模型问题"}},[t._v("#")]),t._v(" N:1，1:1线程模型问题")]),t._v(" "),n("p",[t._v("N个协程绑定1个线程，优点就是"),n("strong",[t._v("协程在用户态线程即完成切换，不会陷入到内核态，这种切换非常的轻量快速")]),t._v("。但也有很大的缺点，1个进程的所有协程都绑定在1个线程上")]),t._v(" "),n("p",[t._v("缺点：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("某个程序用不了硬件的多核加速能力")])]),t._v(" "),n("li",[n("p",[t._v("一旦某协程阻塞，造成线程阻塞，本进程的其他协程都无法执行了，根本就没有并发的能力了。")])])]),t._v(" "),n("p",[t._v("1:1模型缺点：跟多线程多进程无异，协程的创建、删除和切换的代价都由CPU完成，有点略显昂贵了。")]),t._v(" "),n("p",[t._v("而M:N模型能够利用多核，但是过于依赖协程调度器的优化和算法，实现起来复杂")]),t._v(" "),n("p",[n("strong",[t._v("参考：")]),t._v(" "),n("a",{attrs:{href:"https://www.bilibili.com/video/BV19r4y1w7Nx?p=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("B站视频"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"如果p本地队列满了-新创建的g怎么办"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果p本地队列满了-新创建的g怎么办"}},[t._v("#")]),t._v(" 如果p本地队列满了，新创建的g怎么办？")]),t._v(" "),n("p",[t._v("调度器会将p本地队列的一半g和新创建的g放到全局队列，而且这一半g是队列头部的前一半，并且打乱这些g的顺序放到全局队列")]),t._v(" "),n("h1",{attrs:{id:"如果g系统调用阻塞发生什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果g系统调用阻塞发生什么"}},[t._v("#")]),t._v(" 如果g系统调用阻塞发生什么？")]),t._v(" "),n("p",[t._v("当前m继续等待该g返回，m与p解绑，p会去休眠的线程队列中寻找新的m执行（注意，是休眠线程不是自旋线程，自旋线程已经有p了），如果没有空闲m，p会放进空闲p队列。")]),t._v(" "),n("p",[t._v("如果系统调用已经结束，该m会优先尝试获取之前的p，如果获取不到，则去p空闲队列中获取p，如果依然没有，则将该m放到休眠线程队列中并且将g放到全局队列中")]),t._v(" "),n("p",[n("strong",[t._v("参考：")]),t._v(" "),n("a",{attrs:{href:"https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-goroutine/#%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("draveness调度器"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);