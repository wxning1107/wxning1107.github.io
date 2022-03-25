(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1001:function(_,v,t){"use strict";t.r(v);var a=t(15),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"锁机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁机制"}},[_._v("#")]),_._v(" 锁机制")]),_._v(" "),t("h1",{attrs:{id:"全局锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局锁"}},[_._v("#")]),_._v(" 全局锁")]),_._v(" "),t("p",[_._v("顾名思义，全局锁就是对整个数据库实例加锁。让整个库处于只读状态。")]),_._v(" "),t("p",[_._v("全局锁的典型使用场景是，做全库逻辑备份。也就是把整库每个表都 select 出来存成文本。")]),_._v(" "),t("h1",{attrs:{id:"表级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表级锁"}},[_._v("#")]),_._v(" 表级锁")]),_._v(" "),t("p",[_._v("MySQL 里面表级别的锁有两种：一种是表锁，一种是元数据锁（meta data lock，MDL)。")]),_._v(" "),t("p",[_._v("表锁的语法是 lock tables … read/write。在还没有出现更细粒度的锁的时候，表锁是最常用的处理并发的方式。而对于 InnoDB 这种支持行锁的引擎，一般不使用 lock tables 命令来控制并发，毕竟锁住整个表的影响面还是太大。")]),_._v(" "),t("p",[t("strong",[_._v("另一类表级的锁是 MDL（metadata lock)。")]),_._v(" MDL 不需要显式使用，在访问一个表的时候会被自动加上。MDL 的作用是，保证读写的正确性。你可以想象一下，如果一个查询正在遍历一个表中的数据，而执行期间另一个线程对这个表结构做变更，删了一列，那么查询线程拿到的结果跟表结构对不上，肯定是不行的。")]),_._v(" "),t("p",[_._v("因此，在 MySQL 5.5 版本中引入了 MDL，当对一个表做增删改查操作的时候，加 MDL 读锁；当要对表做结构变更操作的时候，加 MDL 写锁。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("读锁之间不互斥，因此你可以有多个线程同时对一张表增删改查。")])]),_._v(" "),t("li",[t("p",[_._v("读写锁之间、写锁之间是互斥的，用来保证变更表结构操作的安全性。因此，如果有两个线程要同时给一个表加字段，其中一个要等另一个执行完才能开始执行。")])])]),_._v(" "),t("p",[_._v("虽然 MDL 锁是系统默认会加的，但却是你不能忽略的一个机制。比如我经常看到有人掉到这个坑里：给一个小表加个字段，导致整个库挂了。")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),t("p",[t("strong",[_._v("给一个表加字段，或者修改字段，或者加索引，需要扫描全表的数据。")]),_._v(" 在对大表操作的时候，你肯定会特别小心，以免对线上服务造成影响。而实际上，即使是小表，操作不慎也会出问题。")])]),_._v(" "),t("p",[_._v("给表加字段语句自己被阻塞，之后所有要在表 t 上新申请 MDL 读锁的请求也会被该语句阻塞。前面我们说了，所有对表的增删改查操作都需要先申请 MDL 读锁，就都被锁住，等于这个表现在完全不可读写了。")]),_._v(" "),t("p",[_._v("如果某个表上的查询语句频繁，而且客户端有重试机制，也就是说超时后会再起一个新 session 再请求的话，这个库的线程很快就会爆满。")]),_._v(" "),t("p",[_._v("事务中的 MDL 锁，在语句执行开始时申请，但是语句结束后并不会马上释放，而会等到整个事务提交后再释放。")]),_._v(" "),t("p",[t("strong",[_._v("那如何安全地给小表加字段？")])]),_._v(" "),t("p",[_._v("首先我们要解决长事务，事务不提交，就会一直占着 MDL 锁。在 MySQL 的 information_schema 库的 innodb_trx 表中，你可以查到当前执行中的事务。如果你要做 DDL 变更的表刚好有长事务在执行，要考虑先暂停 DDL，或者 kill 掉这个长事务。")]),_._v(" "),t("p",[_._v("但考虑一下这个场景。如果你要变更的表是一个热点表，虽然数据量不大，但是上面的请求很频繁，而你不得不加个字段，你该怎么做呢？")]),_._v(" "),t("p",[_._v("这时候 kill 可能未必管用，因为新的请求马上就来了。比较理想的机制是，在 alter table 语句里面设定等待时间，如果在这个指定的等待时间里面能够拿到 MDL 写锁最好，拿不到也不要阻塞后面的业务语句，先放弃。之后开发人员或者 DBA 再通过重试命令重复这个过程。")]),_._v(" "),t("h1",{attrs:{id:"行锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行锁"}},[_._v("#")]),_._v(" 行锁")]),_._v(" "),t("p",[t("strong",[_._v("在 InnoDB 事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放。这个就是两阶段锁协议。")])]),_._v(" "),t("h1",{attrs:{id:"事务中语句顺序怎么安排"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务中语句顺序怎么安排"}},[_._v("#")]),_._v(" 事务中语句顺序怎么安排？")]),_._v(" "),t("p",[_._v("由于两阶段锁协议这个设定，对我们使用事务有什么帮助呢？那就是，如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁尽量往后放。")]),_._v(" "),t("p",[_._v("假设你负责实现一个电影票在线交易业务，顾客 A 要在影院 B 购买电影票。我们简化一点，这个业务需要涉及到以下操作：")]),_._v(" "),t("p",[_._v("1.从顾客 A 账户余额中扣除电影票价；")]),_._v(" "),t("p",[_._v("2.给影院 B 的账户余额增加这张电影票价；")]),_._v(" "),t("p",[_._v("3.记录一条交易日志。")]),_._v(" "),t("p",[_._v("也就是说，要完成这个交易，我们需要 update 两条记录，并 insert 一条记录。当然，为了保证交易的原子性，我们要把这三个操作放在一个事务中。那么，你会怎样安排这三个语句在事务中的顺序呢？")]),_._v(" "),t("p",[_._v("试想如果同时有另外一个顾客 C 要在影院 B 买票，那么这两个事务冲突的部分就是语句 2 了。因为它们要更新同一个影院账户的余额，需要修改同一行数据。")]),_._v(" "),t("p",[_._v("根据两阶段锁协议，不论你怎样安排语句顺序，所有的操作需要的行锁都是在事务提交的时候才释放的。所以，如果你把语句 2 安排在最后，比如按照 3、1、2 这样的顺序，那么影院账户余额这一行的锁时间就最少。这就最大程度地减少了事务之间的锁等待，提升了并发度。")]),_._v(" "),t("h1",{attrs:{id:"死锁和死锁检测"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁和死锁检测"}},[_._v("#")]),_._v(" 死锁和死锁检测")]),_._v(" "),t("p",[_._v("当并发系统中不同线程出现循环资源依赖，涉及的线程都在等待别的线程释放资源时，就会导致这几个线程都进入无限等待的状态，称为死锁。")]),_._v(" "),t("p",[_._v("比如，事务 A 在等待事务 B 释放 id=2 的行锁，而事务 B 在等待事务 A 释放 id=1 的行锁。 事务 A 和事务 B 在互相等待对方的资源释放，就是进入了死锁状态。当出现死锁以后，有两种策略：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("一种策略是，直接进入等待，直到超时。这个超时时间可以通过参数 innodb_lock_wait_timeout 来设置。")])]),_._v(" "),t("li",[t("p",[_._v("另一种策略是，发起死锁检测，发现死锁后，主动回滚死锁链条中的某一个事务，让其他事务得以继续执行。将参数 innodb_deadlock_detect 设置为 on，表示开启这个逻辑。")])])]),_._v(" "),t("p",[_._v("在 InnoDB 中，innodb_lock_wait_timeout 的默认值是 50s，意味着如果采用第一个策略，当出现死锁以后，第一个被锁住的线程要过 50s 才会超时退出，然后其他线程才有可能继续执行。对于在线服务来说，这个等待时间往往是无法接受的。")]),_._v(" "),t("p",[_._v("但是，我们又不可能直接把这个时间设置成一个很小的值，比如 1s。这样当出现死锁的时候，确实很快就可以解开，但如果不是死锁，而是简单的锁等待呢？所以，超时时间设置太短的话，会出现很多误伤。")]),_._v(" "),t("p",[_._v("所以，正常情况下我们还是要采用第二种策略，即：主动死锁检测，而且 innodb_deadlock_detect 的默认值本身就是 on。主动死锁检测在发生死锁的时候，是能够快速发现并进行处理的，但是它也是有额外负担的。")]),_._v(" "),t("p",[_._v("你可以想象一下这个过程：每当一个事务被锁的时候，就要看看它所依赖的线程有没有被别人锁住，如此循环，最后判断是否出现了循环等待，也就是死锁。")]),_._v(" "),t("p",[_._v("那如果是我们上面说到的所有事务都要更新同一行的场景呢？")]),_._v(" "),t("p",[t("strong",[_._v("每个新来的被堵住的线程，都要判断会不会由于自己的加入导致了死锁，这是一个时间复杂度是 O(n) 的操作。假设有 1000 个并发线程要同时更新同一行，那么死锁检测操作就是 100 万这个量级的。虽然最终检测的结果是没有死锁，但是这期间要消耗大量的 CPU 资源。")]),_._v(" 因此，你就会看到 CPU 利用率很高，但是每秒却执行不了几个事务。")]),_._v(" "),t("p",[_._v("根据上面的分析，我们来讨论一下，怎么解决由这种热点行更新导致的性能问题呢？问题的症结在于，死锁检测要耗费大量的 CPU 资源。")]),_._v(" "),t("p",[_._v("一种头痛医头的方法，就是如果你能确保这个业务一定不会出现死锁，可以临时把死锁检测关掉。")]),_._v(" "),t("p",[_._v("另一个思路是控制并发度。比如同一行同时最多只有 10 个线程在更新，那么死锁检测的成本很低，就不会出现这个问题。这个并发控制要做在数据库服务端。如果你有中间件，可以考虑在中间件实现；基本思路就是，对于相同行的更新，在进入引擎之前排队。这样在 InnoDB 内部就不会有大量的死锁检测工作了。")])])}),[],!1,null,null,null);v.default=s.exports}}]);