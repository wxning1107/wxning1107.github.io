(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{949:function(r,t,e){"use strict";e.r(t);var v=e(15),s=Object(v.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"进程、线程、协程的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程、线程、协程的区别"}},[r._v("#")]),r._v(" 进程、线程、协程的区别？")]),r._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[r._v("进程和线程")]),r._v(" "),e("p",[r._v("进程和线程参考："),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/125716637",target:"_blank",rel:"noopener noreferrer"}},[r._v("知乎专栏文章"),e("OutboundLink")],1)])]),r._v(" "),e("h1",{attrs:{id:"线程为什么比协程切换快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程为什么比协程切换快"}},[r._v("#")]),r._v(" 线程为什么比协程切换快？")]),r._v(" "),e("p",[e("strong",[r._v("回答一：")])]),r._v(" "),e("p",[r._v("先说结论：协程切换比线程切换快主要有两点：（1）协程切换"),e("strong",[r._v("完全在用户空间进行")]),r._v("，线程切换涉及"),e("strong",[r._v("特权模式切换，需要在内核空间完成")]),r._v("；（2）协程切换相比线程切换"),e("strong",[r._v("做的事情更少")]),r._v("。")]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("协程切换")])])]),r._v(" "),e("p",[r._v("协程切换只涉及基本的"),e("strong",[r._v("CPU上下文切换")]),r._v("，协程拥有自己的寄存器上下文和栈，所谓的 CPU 上下文，就是一堆寄存器，里面保存了 CPU运行任务所需要的信息：从哪里开始运行（%rip：指令指针寄存器，标识 CPU 运行的下一条指令），栈顶的位置（"),e("strong",[r._v("%rsp：")]),r._v(" 是堆栈指针寄存器，通常会指向栈顶位置），当前栈帧在哪（%rbp 是栈帧指针，用于标识当前栈帧的起始位置）以及其它的CPU的中间状态或者结果（%rbx，%r12，%r13，%14，%15 等等）。协程切换非常简单，就是把"),e("strong",[r._v("当前协程的 CPU 寄存器状态保存起来，然后将需要切换进来的协程的 CPU 寄存器状态加载的 CPU 寄存器上")]),r._v("就 ok 了。而且"),e("strong",[r._v("完全在用户态进行")]),r._v("，一般来说一次协程上下文切换最多就是"),e("strong",[r._v("几十ns")]),r._v(" 这个量级。")]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("线程切换")])])]),r._v(" "),e("p",[r._v("系统内核调度的对象是线程，因为线程是调度的基本单元（进程是资源拥有的基本单元，进程的切换需要做的事情更多，这里占时不讨论进程切换），而"),e("strong",[r._v("线程的调度只有拥有最高权限的内核空间才可以完成")]),r._v("，所以线程的切换涉及到"),e("strong",[r._v("用户空间和内核空间的切换")]),r._v("，也就是特权模式切换，然后需要操作系统调度模块完成"),e("strong",[r._v("线程调度（task")]),r._v("*struct），而且除了和协程相同基本的 CPU 上下文，还有线程私有的栈和寄存器等，说白了就是上下文比协程多一些")]),r._v(" "),e("p",[r._v("进程是资源的分配和调度的一个独立单元，而线程是CPU调度的基本单元")]),r._v(" "),e("p",[r._v("协程也失去了标准线程使用多CPU的能力。")]),r._v(" "),e("hr"),r._v(" "),e("p",[e("strong",[r._v("回答二：")])]),r._v(" "),e("p",[r._v("1.内存占用：")]),r._v(" "),e("p",[r._v("创建一个 goroutine 的栈内存消耗为 2 KB，实际运行过程中，如果栈空间不够用，会自动进行扩容。创建一个 thread 则需要消耗 1 MB 栈内存，而且还需要一个被称为 “a guard page” 的区域用于和其他 thread 的栈空间进行隔离。")]),r._v(" "),e("p",[r._v("对于一个用 Go 构建的 HTTP Server 而言，对到来的每个请求，创建一个 goroutine 用来处理是非常轻松的一件事。而如果用一个使用线程作为并发原语的语言构建的服务，例如 Java 来说，每个请求对应一个线程则太浪费资源了，很快就会出 OOM 错误（OutOfMermoryError）。")]),r._v(" "),e("p",[r._v("2.创建和销毀：")]),r._v(" "),e("p",[r._v("Thread 创建和销毀都会有巨大的消耗，因为要和操作系统打交道，是内核级的，通常解决的办法就是线程池。而 goroutine 因为是由 Go runtime 负责管理的，创建和销毁的消耗非常小，是用户级。")]),r._v(" "),e("p",[r._v("3.切换：")]),r._v(" "),e("p",[r._v("当 threads 切换时，需要保存各种寄存器，以便将来恢复：")]),r._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("16 general purpose registers, PC (Program Counter), SP (Stack Pointer), segment registers, 16 XMM registers, FP coprocessor state, 16 AVX registers, all MSRs etc.\n")])]),r._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[r._v("1")]),e("br")])]),e("p",[r._v("而 goroutines 切换只需保存三个寄存器：Program Counter, Stack Pointer and BP。")]),r._v(" "),e("p",[r._v("一般而言，线程切换会消耗 1000-1500 纳秒，一个纳秒平均可以执行 12-18 条指令。所以由于线程切换，执行指令的条数会减少 12000-18000。")]),r._v(" "),e("p",[r._v("Goroutine 的切换约为 200 ns，相当于 2400-3600 条指令。")]),r._v(" "),e("p",[r._v("因此，goroutines 切换成本比 threads 要小得多。")]),r._v(" "),e("p",[e("strong",[r._v("参考：")]),r._v(" "),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/rpCf5vm9xYFXjmR98vanfQ",target:"_blank",rel:"noopener noreferrer"}},[r._v("微信文章"),e("OutboundLink")],1)]),r._v(" "),e("hr"),r._v(" "),e("p",[e("strong",[r._v("回答三：")])]),r._v(" "),e("p",[r._v("多个线程可以属于同一个进程并共享内存空间。因为多线程不需要创建新的虚拟内存空间，所以它们也不需要内存管理单元处理上下文的切换，线程之间的通信也正是基于共享的内存进行的，与重量级的进程相比，线程显得比较轻量。")]),r._v(" "),e("p",[r._v("虽然线程比较轻量，但是在调度时也有比较大的额外开销。每个线程会都占用 1M 以上的内存空间，在切换线程时不止会消耗较多的内存，恢复寄存器中的内容还需要向操作系统申请或者销毁资源，每一次线程上下文的切换都需要消耗 ~1us 左右的时间，但是 Go 调度器对 Goroutine 的上下文切换约为 ~0.2us，减少了 80% 的额外开销。")]),r._v(" "),e("p",[r._v("Go 语言的调度器通过使用与 CPU 数量相等的线程减少线程频繁切换的内存开销，同时在每一个线程上执行额外开销更低的 Goroutine 来降低操作系统和硬件的负载。")]),r._v(" "),e("p",[e("strong",[r._v("参考：")]),r._v(" "),e("a",{attrs:{href:"https://draveness.me/golang/docs/part3-runtime/ch06-concurrency/golang-goroutine/",target:"_blank",rel:"noopener noreferrer"}},[r._v("draveness源码分析"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);