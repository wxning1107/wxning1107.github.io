(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{417:function(v,_,s){v.exports=s.p+"assets/img/image-20211023134120792.053f6921.png"},418:function(v,_,s){v.exports=s.p+"assets/img/image-20211023134239149.b3b1e576.png"},547:function(v,_,s){"use strict";s.r(_);var t=s(46),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[v._v("#")]),v._v(" 缓存穿透")]),v._v(" "),t("p",[v._v("先来考虑这样一种场景：在你的电商系统的用户表中，我们需要通过用户 ID 查询用户的信息，缓存的读写策略采用 Cache Aside 策略。")]),v._v(" "),t("p",[v._v("那么，如果要读取一个用户表中未注册的用户，会发生什么情况呢？按照这个策略，我们会先读缓存，再穿透读数据库。由于用户并不存在，所以缓存和数据库中都没有查询到数据，因此也就不会向缓存中回种数据（也就是向缓存中设置值的意思），这样当再次请求这个用户数据的时候还是会再次穿透到数据库。在这种场景下，缓存并不能有效地阻挡请求穿透到数据库上，它的作用就微乎其微了。")]),v._v(" "),t("p",[v._v("那如何解决缓存穿透呢？一般来说我们会有两种解决方案： "),t("strong",[v._v("回种空值以及使用布隆过滤器。")])]),v._v(" "),t("h2",{attrs:{id:"回种空值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回种空值"}},[v._v("#")]),v._v(" 回种空值")]),v._v(" "),t("p",[v._v("回顾上面提到的场景，你会发现最大的问题在于数据库中并不存在用户的数据，这就造成无论查询多少次，数据库中永远都不会存在这个用户的数据，穿透永远都会发生。")]),v._v(" "),t("p",[t("strong",[v._v("类似的场景还有一些：")]),v._v(" 比如由于代码的 bug 导致查询数据库的时候抛出了异常，这样可以认为从数据库查询出来的数据为空，同样不会回种缓存。")]),v._v(" "),t("p",[v._v("那么，当我们从数据库中查询到空值或者发生异常时，我们可以向缓存中回种一个空值。但是因为空值并不是准确的业务数据，并且会占用缓存的空间，所以我们会给这个空值加一个比较短的过期时间，让空值在短时间之内能够快速过期淘汰。")]),v._v(" "),t("p",[v._v("回种空值虽然能够阻挡大量穿透的请求，但如果有大量获取未注册用户信息的请求，缓存内就会有有大量的空值缓存，也就会浪费缓存的存储空间，如果缓存空间被占满了，还会剔除掉一些已经被缓存的用户信息反而会造成缓存命中率的下降。")]),v._v(" "),t("p",[t("strong",[v._v("所以这个方案，我建议你在使用的时候应该评估一下缓存容量是否能够支撑。")]),v._v(" 如果需要大量的缓存节点来支持，那么就无法通过通过回种空值的方式来解决，这时你可以考虑使用布隆过滤器。")]),v._v(" "),t("h2",{attrs:{id:"布隆过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布隆过滤器"}},[v._v("#")]),v._v(" 布隆过滤器")]),v._v(" "),t("p",[v._v("1970 年布隆提出了一种布隆过滤器的算法，用来判断一个元素是否在一个集合中。这种算法由一个二进制数组和一个 Hash 算法组成。 "),t("strong",[v._v("它的基本思路如下：")])]),v._v(" "),t("p",[v._v("我们把集合中的每一个值按照提供的 Hash 算法算出对应的 Hash 值，然后将 Hash 值对数组长度取模后得到需要计入数组的索引值，并且将数组这个位置的值从 0 改成 1。在判断一个元素是否存在于这个集合中时，你只需要将这个元素按照相同的算法计算出索引值，如果这个位置的值为 1 就认为这个元素在集合中，否则则认为不在集合中。")]),v._v(" "),t("p",[t("img",{attrs:{src:s(417),alt:"img"}})]),v._v(" "),t("p",[v._v("A、B、C 等元素组成了一个集合，元素 D 计算出的 Hash 值所对应的的数组中值是 1，所以可以认为 D 也在集合中。而 F 在数组中的值是 0，所以 F 不在数组中。")]),v._v(" "),t("p",[t("strong",[v._v("那么我们如何使用布隆过滤器来解决缓存穿透的问题呢？")])]),v._v(" "),t("p",[v._v("还是以存储用户信息的表为例进行讲解。首先，我们初始化一个很大的数组，比方说长度为 20 亿的数组，接下来我们选择一个 Hash 算法，然后我们将目前现有的所有用户的 ID 计算出 Hash 值并且映射到这个大数组中，映射位置的值设置为 1，其它值设置为 0。")]),v._v(" "),t("p",[v._v("新注册的用户除了需要写入到数据库中之外，它也需要依照同样的算法更新布隆过滤器的数组中，相应位置的值。那么当我们需要查询某一个用户的信息时，我们首先查询这个 ID 在布隆过滤器中是否存在，如果不存在就直接返回空值，而不需要继续查询数据库和缓存，这样就可以极大地减少异常查询带来的缓存穿透。")]),v._v(" "),t("p",[t("img",{attrs:{src:s(418),alt:"img"}})]),v._v(" "),t("p",[v._v("布隆过滤器拥有极高的性能，无论是写入操作还是读取操作，时间复杂度都是 "),t("code",[v._v("O(1)")]),v._v("，是常量值。在空间上，相对于其他数据结构它也有很大的优势，比如，20 亿的数组需要 "),t("code",[v._v("2000000000/8/1024/1024 = 238M")]),v._v(" 的空间，而如果使用数组来存储，假设每个用户 ID 占用 4 个字节的空间，那么存储 20 亿用户需要 "),t("code",[v._v("2000000000 * 4 / 1024 / 1024 = 7600M")]),v._v(" 的空间，是布隆过滤器的 32 倍。")]),v._v(" "),t("p",[v._v("不过，任何事物都有两面性，布隆过滤器也不例外， "),t("strong",[v._v("它主要有两个缺陷：")])]),v._v(" "),t("ol",[t("li",[v._v("它在判断元素是否在集合中时是有一定错误几率的，比如它会把不是集合中的元素判断为处在集合中；")]),v._v(" "),t("li",[v._v("不支持删除元素。")])]),v._v(" "),t("p",[t("strong",[v._v("关于第一个缺陷，主要是 Hash 算法的问题。")]),v._v(" 因为布隆过滤器是由一个二进制数组和一个 Hash 算法组成的，Hash 算法存在着一定的碰撞几率。")]),v._v(" "),t("p",[v._v("布隆过滤器的误判有一个特点，就是它只会出现 "),t("code",[v._v("false positive")]),v._v(" 的情况。这是什么意思呢？当布隆过滤器判断元素在集合中时，这个元素可能不在集合中。但是一旦布隆过滤器判断这个元素不在集合中时，它一定不在集合中。 "),t("strong",[v._v("这一点非常适合解决缓存穿透的问题。")])]),v._v(" "),t("p",[t("strong",[v._v("一个解决方案是：")])]),v._v(" "),t("p",[v._v("使用多个 Hash 算法为元素计算出多个 Hash 值，只有所有 Hash 值对应的数组中的值都为 1 时，才会认为这个元素在集合中。")]),v._v(" "),t("p",[t("strong",[v._v("布隆过滤器不支持删除元素的缺陷也和 Hash 碰撞有关。")]),v._v(" 给你举一个例子，假如两个元素 A 和 B 都是集合中的元素，它们有相同的 Hash 值，它们就会映射到数组的同一个位置。这时我们删除了 A，数组中对应位置的值也从 1 变成 0，那么在判断 B 的时候发现值是 0，也会判断 B 是不在集合中的元素，就会得到错误的结论。")]),v._v(" "),t("p",[t("strong",[v._v("那么我是怎么解决这个问题的呢？")]),v._v(" 我会让数组中不再只有 0 和 1 两个值，而是存储一个计数。比如如果 A 和 B 同时命中了一个数组的索引，那么这个位置的值就是 2，如果 A 被删除了就把这个值从 2 改为 1。这个方案中的数组不再存储 bit 位，而是存储数值，也就会增加空间的消耗。")]),v._v(" "),t("h2",{attrs:{id:"dog-pile-effect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dog-pile-effect"}},[v._v("#")]),v._v(" dog-pile effect")]),v._v(" "),t("p",[v._v("总的来说，"),t("strong",[v._v("回种空值和布隆过滤器")]),v._v(" 是解决缓存穿透问题的两种最主要的解决方案，但是它们也有各自的适用场景，并不能解决所有问题。比方说当有一个极热点的缓存项，它一旦失效会有大量请求穿透到数据库，这会对数据库造成瞬时极大的压力，我们把这个场景叫做 "),t("code",[v._v("dog-pile effect")]),v._v("（狗桩效应）")]),v._v(" "),t("p",[v._v("这是典型的缓存并发穿透的问题， "),t("strong",[v._v("那么，我们如何来解决这个问题呢？")]),v._v(" 解决狗桩效应的思路是尽量地减少缓存穿透后的并发，方案也比较简单：")]),v._v(" "),t("ol",[t("li",[v._v("在代码中，控制在某一个热点缓存项失效之后启动一个后台线程，穿透到数据库，将数据加载到缓存中，在缓存未加载之前，所有访问这个缓存的请求都不再穿透而直接返回。")]),v._v(" "),t("li",[v._v("通过在 Memcached 或者 Redis 中设置分布式锁，只有获取到锁的请求才能够穿透到数据库。")])]),v._v(" "),t("p",[v._v("分布式锁的方式也比较简单，比方说 ID 为 1 的用户是一个热点用户，当他的用户信息缓存失效后，我们需要从数据库中重新加载数据时，先向 Memcached 中写入一个 Key 为 "),t("code",[v._v("lock.1")]),v._v(" 的缓存项，然后去数据库里面加载数据，当数据加载完成后再把这个 Key 删掉。这时，如果另外一个线程也要请求这个用户的数据，它发现缓存中有 Key 为“ "),t("code",[v._v("lock.1")]),v._v(" 的缓存，就认为目前已经有线程在加载数据库中的值到缓存中了，它就可以重新去缓存中查询数据，不再穿透数据库了。")])])}),[],!1,null,null,null);_.default=e.exports}}]);