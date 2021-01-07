(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{383:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"关于setimmediate-的执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于setimmediate-的执行"}},[t._v("#")]),t._v(" 关于setImmediate()的执行")]),t._v(" "),a("p",[t._v("面试时被问到setTimeOut(),setImmediate() 以及 process.nextTik()的区别，回答的不是很好，回去查了一些资料，发现引出了不少知识点。")]),t._v(" "),a("h2",{attrs:{id:"关于setimmediate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于setimmediate"}},[t._v("#")]),t._v(" 关于setImmediate()")]),t._v(" "),a("ul",[a("li",[t._v("先看一段代码：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imma'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("直觉来看，应该是先输出'setTimeout'，然后是'imma',但是实际运行之后发现，有时settimeout在前，有时imma在前。这是为什么呢?")]),t._v(" "),a("ul",[a("li",[t._v("调用"),a("code",[t._v("setTimeout()")]),t._v(",会将其插入到定时器观察者的"),a("strong",[t._v("红黑树")]),t._v("中,每次Tick执行时，会从红黑树中迭代取出定时器对象(O(logn))，检查是否超过时间，超过就形成事件，立即执行回调函数。定时器观察者类似于I/O观察者，只是不需要I/O线程池的参与。")]),t._v(" "),a("li",[t._v("而"),a("code",[t._v("setImmediate()")]),t._v("属于check观察者，"),a("code",[t._v("process.nextTick()")]),t._v("属于idle观察者，他们的优先级顺序："),a("code",[t._v("idle > I/O > idle")]),t._v("。所以事件循环的过程中会先检查"),a("code",[t._v("process.nextTick()")]),t._v(",然后是"),a("code",[t._v("setTimeout()")]),t._v(",最后是"),a("code",[t._v("setImmediate()")]),t._v("。")]),t._v(" "),a("li",[t._v("那么根据上面的规则，结果应该和直觉一致才对，但是多次执行的结果却不一样。原因是：Node在执行时，如果"),a("code",[t._v("setTimeout()")]),t._v("延时为0，那么会改成1,相当于延时1ms，如果主线程执行速度很快，检查定时器观察者时还没有过去1ms，那么就不会执行回调，继续去检查check观察者。此时就是先执行"),a("code",[t._v("setImmediate()")]),t._v(",反之就是先执行"),a("code",[t._v("setTimeout()")]),t._v("。")]),t._v(" "),a("li",[t._v("另一端段代码："),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imma1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setTimeout1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//imma1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setTimeout2")]),t._v("\n")])])]),t._v("此时的结果是固定的，先输出"),a("code",[t._v("imma1")]),t._v("，按照上面的理论，检查定时器观察者，取出来执行最外层"),a("code",[t._v("setTimeout")]),t._v("，输出"),a("code",[t._v("etTimeout1")]),t._v("，并将"),a("code",[t._v("setTimeout")]),t._v("加入到定时器观察者中，再将"),a("code",[t._v("setImmediate")]),t._v("加入到check观察者，执行完毕。接下来检查check观察者，将"),a("code",[t._v("setImmediate")]),t._v("取出并执行，输出"),a("code",[t._v("imma1")]),t._v("。再进行下一轮检查定时器观察者，输出"),a("code",[t._v("setTimeout2")])])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("还是有很多疑问：\n"),a("ol",[a("li",[t._v("Node中还有那些观察者？")]),t._v(" "),a("li",[t._v("Promise会加入微任务队列，那它是什么观察者呢？")])])]),t._v(" "),a("li",[t._v("对Node的学习也要提上日程了。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);