(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1005:function(t,v,_){"use strict";_.r(v);var s=_(15),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"红黑树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),s("p",[t._v("平衡二叉树的严格定义是这样的：二叉树中任意一个节点的左右子树的高度相差不能大于 1。但是很多平衡二叉查找树其实并没有严格符合上面的定义，比如我们下面要讲的红黑树，它从根节点到各个叶子节点的最长路径，有可能会比最短路径大一倍。")]),t._v(" "),s("p",[s("strong",[t._v("平衡二叉查找树中“平衡”的意思，其实就是让整棵树左右看起来比较“对称”、比较“平衡”，不要出现左子树很高、右子树很矮的情况。这样就能让整棵树的高度相对来说低一些，相应的插入、删除、查找等操作的效率高一些。")])]),t._v(" "),s("p",[t._v("红黑树的英文是“Red-Black Tree”，简称 R-B Tree。它是一种不严格的平衡二叉查找树，一棵红黑树还需要满足这样几个要求：")]),t._v(" "),s("ul",[s("li",[t._v("根节点是黑色的；")]),t._v(" "),s("li",[t._v("每个叶子节点都是黑色的空节点（NIL），也就是说，叶子节点不存储数据；")]),t._v(" "),s("li",[t._v("任何相邻的节点都不能同时为红色，也就是说，红色节点是被黑色节点隔开的；")]),t._v(" "),s("li",[t._v("每个节点，从该节点到达其可达叶子节点的所有路径，都包含相同数目的黑色节点；")])]),t._v(" "),s("p",[t._v("这里的第二点要求“叶子节点都是黑色的空节点”，稍微有些奇怪，它主要是为了简化红黑树的代码实现而设置的。"),s("strong",[t._v("这节我们暂时不考虑这一点")]),t._v("。")]),t._v(" "),s("p",[t._v("两个红黑树的图例：")]),t._v(" "),s("p",[s("img",{attrs:{src:_(551),alt:"img"}})]),t._v(" "),s("p",[t._v("两个非常重要的操作，"),s("strong",[t._v("左旋（rotate left）")]),t._v("、"),s("strong",[t._v("右旋（rotate right）")]),t._v("。左旋全称其实是叫"),s("strong",[t._v("围绕某个节点的左旋")]),t._v("，那右旋的全称估计你已经猜到了，就叫"),s("strong",[t._v("围绕某个节点的右旋")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(552),alt:"img"}})]),t._v(" "),s("p",[t._v("红黑树的插入、删除操作会破坏红黑树的平衡，所以，红黑树在插入、删除数据之后，需要通过左右旋和改变颜色调整平衡，具体细节不做阐述了，比较复杂。")])])}),[],!1,null,null,null);v.default=e.exports},551:function(t,v,_){t.exports=_.p+"assets/img/image-20211104103104450.f82a2c7e.png"},552:function(t,v,_){t.exports=_.p+"assets/img/image-20211104103616839.3c7aea25.png"}}]);