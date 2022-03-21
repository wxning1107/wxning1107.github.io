(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{497:function(v,_,p){v.exports=p.p+"assets/img/image-20220315183033761.9611faa0.png"},498:function(v,_,p){v.exports=p.p+"assets/img/image-20220315184744040.99cab85c.png"},499:function(v,_,p){v.exports=p.p+"assets/img/image-20220315182732302.4ba58758.png"},500:function(v,_,p){v.exports=p.p+"assets/img/image-20220315185343980.74c25a08.png"},501:function(v,_,p){v.exports=p.p+"assets/img/image-20220315191726615.9b17516d.png"},502:function(v,_,p){v.exports=p.p+"assets/img/image-20220315191843853.8978f70a.png"},503:function(v,_,p){v.exports=p.p+"assets/img/image-20220315192014806.ee3ca1e6.png"},966:function(v,_,p){"use strict";p.r(_);var t=p(15),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据库中什么情况下进行分库-什么情况下进行分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库中什么情况下进行分库-什么情况下进行分表"}},[v._v("#")]),v._v(" 数据库中什么情况下进行分库，什么情况下进行分表？")]),v._v(" "),t("h1",{attrs:{id:"如何进行分库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何进行分库"}},[v._v("#")]),v._v(" 如何进行分库？")]),v._v(" "),t("p",[v._v("分库：由单个数据库实例拆分成多个数据库实例，将数据分布到多个数据库实例中。分库分表采取的是分而治之的策略，分库目的是减轻单台MySQL实例存储压力及可扩展性。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("垂直分库")])]),v._v(" "),t("p",[v._v("纵向切库，太经典的切分方式，基于表进行切分，通俗来讲就是大表拆小表，通常是把新的业务模块或集成公共模块拆分出去，比如订单库，商品库，会员库。")]),v._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:p(497),alt:"image-20220315192014806"}}),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("每个库的表都不一样；")])]),v._v(" "),t("li",[t("p",[v._v("表不一样，数据就更不一样了，没有任何交集；")])]),v._v(" "),t("li",[t("p",[v._v("每个库相对独立，模块化；")])])]),v._v(" "),t("p",[t("strong",[v._v("场景：")])]),v._v(" "),t("p",[v._v("可以抽象出单独的业务模块时，可以抽象出公共区时，如字典、公共时间、公共配置等。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("水平分库")])]),v._v(" "),t("p",[v._v("以行数据为依据，将一个库中的数据拆分到多个库中。这种策略并不实用，因为会对后台开发很不友好，有很多坑，不建议采用，理解即可。比如下面对 userid 对2取模，如果是1就分到会员1表，如果是2就分到会员2表。")]),v._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:p(498),alt:"image-20220315192014806"}}),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("每个库的结构都一样；")])]),v._v(" "),t("li",[t("p",[v._v("每个库的数据都不一样，没有交集；")])]),v._v(" "),t("li",[t("p",[v._v("所有库的并集是全量数据；")])])]),v._v(" "),t("p",[t("strong",[v._v("场景：")])]),v._v(" "),t("p",[v._v("系统绝对并发量上来了，CPU内存压力大。分表难以根本上解决量的问题，并且还没有明显的业务归属来垂直分库，主库磁盘接近饱和。")]),v._v(" "),t("p",[t("br"),t("br")]),v._v(" "),t("h1",{attrs:{id:"如何进行分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何进行分表"}},[v._v("#")]),v._v(" 如何进行分表？")]),v._v(" "),t("p",[v._v("分表：由单张表拆分成多张表，将数据划分到多张表内。分表是解决单张表数据过大以后查询的瓶颈问题。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("垂直分表")])]),v._v(" "),t("p",[v._v("垂直分表，或者叫竖着切表，该策略是以字段为依据的，主要按照字段的活跃性、字段长度，将表中字段拆分到不同的表（主表和扩展表）中。")]),v._v(" "),t("p",[t("img",{attrs:{src:p(499),alt:"img"}})]),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("每个表的结构都不一样；")])]),v._v(" "),t("li",[t("p",[v._v("每个表的数据也不一样，有一个关联字段，一般是主键或外键，用于关联兄弟表数据；")])]),v._v(" "),t("li",[t("p",[v._v("所有兄弟表的并集是该表的全量数据；")])])]),v._v(" "),t("p",[t("strong",[v._v("场景：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("有几个字段属于热点字段（比如上图的用户表中热点就是用于登陆的user_base表），更新频率很高，要把这些字段单独切到一张表里，不然innodb行锁影响并发性能。")])]),v._v(" "),t("li",[t("p",[v._v("有大字段，如text，存储压力很大，毕竟innodb数据和索引是同一个文件。")])]),v._v(" "),t("li",[t("p",[v._v("有明显的业务区分，或表结构设计时字段冗余。")])])]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("水平分表")])]),v._v(" "),t("p",[v._v("水平分表，也叫“横着切”。以行数据为依据进行切分，一般按照某列的自容进行切分。")]),v._v(" "),t("p",[t("img",{attrs:{src:p(500),alt:"img"}})]),v._v(" "),t("p",[v._v("方法：")]),v._v(" "),t("p",[t("strong",[v._v("1.RANGE")])]),v._v(" "),t("p",[v._v("第一种方法们可以指定一个数据范围来进行分表，例如从1~1000000，1000001-2000000。当然这种方法需要维护表的ID，特别是分布式环境下，这种分布式ID,在不使用第三方分表工具的情况下，建议使用Redis，Redis的incr操作可以轻松的维护分布式的表ID。")]),v._v(" "),t("p",[v._v("优点： 扩容简单，提前建好库、表就好")]),v._v(" "),t("p",[v._v("缺点： 大部分读和写都访会问新的数据，有IO瓶颈，这样子造成新库压力过大，不建议采用。")]),v._v(" "),t("p",[t("strong",[v._v("2.HASH取模")])]),v._v(" "),t("p",[v._v("针对上述RANGE方式分表有IO瓶颈的问题，咱们可以采用根据用户ID HASG取模的方式进行分库分表。这样就可以将数据分散在不同的库、表中，避免了IO瓶颈的问题。")]),v._v(" "),t("p",[v._v("优点： 能保证数据较均匀的分散落在不同的库、表中，减轻了数据库压力。")]),v._v(" "),t("p",[v._v("缺点： 扩容麻烦、迁移数据时每次都需要重新计算hash值分配到不同的库和表。")]),v._v(" "),t("p",[t("strong",[v._v("3.一致性HASH")])]),v._v(" "),t("p",[v._v("优点： 通过虚拟节点方式能保证数据较均匀的分散落在不同的库、表中，并且新增、删除节点不影响其他节点的数据，高可用、容灾性强。")]),v._v(" "),t("p",[t("strong",[v._v("特点：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("每个表的结构都一样；")])]),v._v(" "),t("li",[t("p",[v._v("每个表的数据都不一样，没有交集；")])]),v._v(" "),t("li",[t("p",[v._v("所有表的并集是该表的全量数据；")])])]),v._v(" "),t("p",[t("strong",[v._v("场景：")])]),v._v(" "),t("p",[v._v("单表的数据量过大或增长速度很快，已经影响或即将会影响SQL查询效率，加重了CPU负担，提前到达瓶颈。记得水平分表越早越好。")]),v._v(" "),t("h1",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[t("strong",[v._v("垂直划分：")])]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("每个库（表）结构不一样")])]),v._v(" "),t("li",[t("p",[v._v("每个库（表）的数据都至少有一列一样（关联起来）")])]),v._v(" "),t("li",[t("p",[v._v("每个库（表）的并集是全量数据")])])]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("拆分后业务清晰")])]),v._v(" "),t("li",[t("p",[v._v("数据维护比较简单，不同业务放到不同机器上")])])]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如果单表的数据量比较大，写读压力大，比如垂直分表后每个表的数据条数是一样的，只是字段不同而已。")])]),v._v(" "),t("li",[t("p",[v._v("收到某种业务来决定、或者被限制。也就是说一个业务往往会影响到数据库的瓶颈。比如双十一时下订单的量远远比注册账户的量大，所以只有订单库压力比较大，会员和商品库压力相对较小。")])])]),v._v(" "),t("p",[t("strong",[v._v("水平拆分：")])]),v._v(" "),t("p",[v._v("特点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("每个库（表）结构一样")])]),v._v(" "),t("li",[t("p",[v._v("每个库（表）数据不一样")])]),v._v(" "),t("li",[t("p",[v._v("每个库（表）数据的并集是全量数据")])])]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("单个库（表）的数据量保持一定量的减少，有助于性能提升")])]),v._v(" "),t("li",[t("p",[v._v("提高量系统的稳定性和负载能力")])]),v._v(" "),t("li",[t("p",[v._v("切分的表的结构相同，程序改造较少")])])]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("数据的扩容很有难度维护量大")])]),v._v(" "),t("li",[t("p",[v._v("拆分规则很难抽象出来")])])]),v._v(" "),t("p",[t("br"),t("br"),v._v("\n一般先分库再分表，因为分库比较容易一些，等到数据量大时再分表。")]),v._v(" "),t("p",[v._v("一般在项目早期进行垂直拆分（因为如果后期再垂直拆分工作量太大，而且代码改动也大，因为增加了新库），后期再水平拆分。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("分库分表需要解决的问题")])]),v._v(" "),t("p",[t("strong",[v._v("1.事务问题")])]),v._v(" "),t("p",[v._v('当更新内容同时分布在不同库中，不可避免会带来跨库事务问题。跨分片事务也是分布式事务，没有简单的方案，一般可使用"XA协议"和"两阶段提交"处理。')]),v._v(" "),t("p",[v._v("分布式事务能最大限度保证了数据库操作的原子性。但在提交事务时需要协调多个节点，推后了提交事务的时间点，延长了事务的执行时间。导致事务在访问共享资源时发生冲突或死锁的概率增高。随着数据库节点的增多，这种趋势会越来越严重，从而成为系统在数据库层面上水平扩展的枷锁。")]),v._v(" "),t("p",[v._v("除了分布式事务以外还有一种方案是由应用程序和数据库共同控制。原理是将一个跨多个数据库的分布式事务分拆成多个仅处于单个数据库上面的小事务，并通过应用程序来总控各个小事务。")]),v._v(" "),t("p",[v._v("对于那些性能要求很高，但对一致性要求不高的系统，往往不苛求系统的实时一致性，只要在允许的时间段内达到最终一致性即可，可采用事务补偿的方式。与事务在执行中发生错误后立即回滚的方式不同，事务补偿是一种事后检查补救的措施，一些常见的实现方法有：对数据进行对账检查，基于日志进行对比，定期同标准数据来源进行同步等等。事务补偿还要结合业务系统来考虑。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("2.跨节点关联查询 join 问题")])]),v._v(" "),t("p",[v._v("切分之前，系统中很多列表和详情页所需的数据可以通过sql join来完成。而切分之后，数据可能分布在不同的节点上，此时join带来的问题就比较麻烦了，考虑到性能，尽量避免使用join查询。")]),v._v(" "),t("p",[v._v("解决这个问题的一些方法：")]),v._v(" "),t("p",[v._v("1.全局表")]),v._v(" "),t("p",[v._v('全局表，也可看做是"数据字典表"，就是系统中所有模块都可能依赖的一些表，为了避免跨库join查询，可以将这类表在每个数据库中都保存一份。这些数据通常很少会进行修改，所以也不担心一致性的问题。')]),v._v(" "),t("p",[v._v("2.字段冗余")]),v._v(" "),t("p",[v._v('一种典型的反范式设计，利用空间换时间，为了性能而避免join查询。例如：订单表保存userId时候，也将userName冗余保存一份，这样查询订单详情时就不需要再去查询"买家user表"了。')]),v._v(" "),t("p",[v._v("但这种方法适用场景也有限，比较适用于依赖字段比较少的情况。而冗余字段的数据一致性也较难保证，就像上面订单表的例子，买家修改了userName后，是否需要在历史订单中同步更新呢?这也要结合实际业务场景进行考虑。")]),v._v(" "),t("p",[v._v("3.数据组装")]),v._v(" "),t("p",[v._v("在系统层面，分两次查询，第一次查询的结果集中找出关联数据id，然后根据id发起第二次请求得到关联数据。最后将获得到的数据进行字段拼装。")]),v._v(" "),t("p",[v._v("4.ER分片")]),v._v(" "),t("p",[v._v("关系型数据库中，如果可以先确定表之间的关联关系，并将那些存在关联关系的表记录存放在同一个分片上，那么就能较好的避免跨分片join问题。在1:1或1:n的情况下，通常按照主表的ID主键切分。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("3.跨节点分页、排序、函数问题")])]),v._v(" "),t("p",[v._v("跨节点多库进行查询时，会出现limit分页、order by排序等问题。分页需要按照指定字段进行排序，当排序字段就是分片字段时，通过分片规则就比较容易定位到指定的分片;当排序字段非分片字段时，就变得比较复杂了。需要先在不同的分片节点中将数据进行排序并返回，然后将不同分片返回的结果集进行汇总和再次排序，最终返回给用户。")]),v._v(" "),t("p",[v._v("在使用Max、Min、Sum、Count之类的函数进行计算的时候，也需要先在每个分片上执行相应的函数，然后将各个分片的结果集进行汇总和再次计算，最终将结果返回。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("4.全局主键避重问题")])]),v._v(" "),t("p",[v._v("1.UUID")]),v._v(" "),t("p",[v._v("UUID标准形式包含32个16进制数字，分为5段，形式为8-4-4-4-12的36个字符，例如：550e8400-e29b-41d4-a716-446655440000")]),v._v(" "),t("p",[v._v("UUID是主键是最简单的方案，本地生成，性能高，没有网络耗时。但缺点也很明显，由于UUID非常长，会占用大量的存储空间;另外，作为主键建立索引和基于索引进行查询时都会存在性能问题，在InnoDB下，UUID的无序性会引起数据位置频繁变动，导致分页。")]),v._v(" "),t("p",[v._v("2.Snowflake分布式自增ID算法")]),v._v(" "),t("h1",{attrs:{id:"开源框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开源框架"}},[v._v("#")]),v._v(" 开源框架")]),v._v(" "),t("p",[v._v("proxy代理层：mycat，atlas，mysql-proxy")]),v._v(" "),t("p",[v._v("JDBC直连层：shardingphere，tddl，cobar")]),v._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:p(501),alt:"image-20220315192014806"}}),v._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:p(502),alt:"image-20220315192014806"}}),v._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:p(503),alt:"image-20220315192014806"}}),v._v(" "),t("p",[v._v("JDBC 的性能比 proxy（跨网络） 更好，但是 proxy 应用更广，因为 proxy 方式支持跨平台，跨语言。")]),v._v(" "),t("p",[t("br"),t("br"),v._v(" "),t("strong",[v._v("参考：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("如何分库分表：https://zhuanlan.zhihu.com/p/348659067")])]),v._v(" "),t("li",[t("p",[v._v("分库分表带来的问题：https://mp.weixin.qq.com/s/YJAloopqimywC7-Z45dKNA")])]),v._v(" "),t("li",[t("p",[v._v("https://www.bilibili.com/video/BV1BU4y137Me?p=1")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);