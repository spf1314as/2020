### vue

- 生命周期
    - beforeCreate
        - 重置声明周期参数、实例参数
        - 初始化events事件集合
        - 初始化渲染相关参数 如 $listeners、$attrs
    - created
        - 数据观测 (props、methods、data observer)，属性和方法的运算，watch/event 事件回调。
        - dom挂载阶段还没开始，$el 属性目前尚不可用。
        - resolve injections
        - 初始化props、methods、data、computed
        - resolve provide
    - beforeMounte
        - 相关的render函数第一次调用
        - 服务器端渲染没有这个hook
    - mounted
        - 完成渲染的dom挂载到实例上
    - beforeUpdate
        - 虚拟 DOM 打补丁之前调用
    - updated
        - 数据更改导致的虚拟 DOM 重新渲染和打补
    - activated
        - 被keep-alive 缓存的组件激活时调用
    - deactivated
        - 被 keep-alive 缓存的组件停用时调用
    - beforeDestroy
        - 实例销毁之前调用。在这一步，实例仍然完全可用
    - destoryed
        - 该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁
- 通讯方式
    1. props
        - 引用类型传递
        - 调用函数传递参数
        - ** 不适用多级组件之间通信 **
    2. eventBus
        - 能够解决多级组件之间通信问题
        - 简单项目可以
        - ** 没有统一的规则约束状态、事件的变化 **
        - ** 多人协助时，不容易维护 **
    3. vuex
        - 统一处理状态变化
        - 统一api规定状态的更改
        - 辅助函数，方便使用
        - debug开发友好
        - 严格模式，规范状态变更
        - 状态变化统一处理，便于多人协作
- 状态
    - 组件逻辑状态
    - UI视图状态
    - 页面级状态
    - 父子组件通讯属性
- 原理数据驱动>依赖收集
    - 对象类型的属性采取 对响应式属性进行劫持，转换为访问器属性
    ```
    Object.defineProperty(name, key , {
        set: 
        get
    })
    ```
    - 数组类型的属性，劫持push、splice、pop、shift、unshift改变数组的方法,直接调用notify方法,通知依赖更新
    - 依赖收集，赋值时调用依赖收集中的所有watch实例，各个实例进行对比判断是否需要更新
    - 渲染模板上使用过的属性，会被依赖收集，如果这些属性发生变化，渲染函数进行重新求值
- 数组响应式实现
    - 对象属性转化为访问器属性
    - 数组结构拦截push、splice等引起原数组变化的方法，通知依赖发生变化了，watch判断是否要更新
    - v-for支持set、map数据结构但是，不是响应式的，将他们转化为数组处理
    - 数据响应式转化是在组件初始化时进行的，所以后期添加的属性，如果要响应式，需要使用Vue.set()或者vm.$set()进行响应式转化
- mixins、extends
    - 底层实现上没有区别，都是与组件选项进行参数合并
    - 生命周期hook会在组件之前执行
    - 属性、函数、data会被组件中的同名覆盖，已组件为准
    - 先合并extends、后合并mixins
- extend
    - 存在继承关系
    - 默认调用extend的情况 ?
    - ? 
- computed和watch、fun的区别
    - computed进行缓存
    - ?
- method函数的this问题
    - 初始化时对所有函数进行了bind操作，绑定this为实例
    - 不能使用箭头函数
- 异步 $nextTick的含义，实现方式
    - 优先使用promise、MutationObserver、setImmediate(目前只有ie支持) 、setTimeout
    - 下轮事件之前之前执行，这时dom已经更新
    - ？
- directive
    - bind
    - inserted 
    - update
    - unbind
- v-for
    - array
    - object
    - set/map 
    - 只根据array设计了api，其他数据结构转化为array进行处理
- key
    - 所以作为key,简单局部状态的不适合？
    - viewModel 尽可能会复用之前已经渲染过的组件
    - key标识是否是同一个组件，以便进行复用，首先检查key值是否相同
    - index作为key，只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出
- filter、method区别
    - filter 没有this的绑定，就是单纯的处理函数，函数自身与组件没有关系。使用时`variable | filter(second, third)`
    - method 绑定this，实例的方法
- scoped
- pug
    - 写法简洁、省略部分标签元素 
- 属性引用类型和data为什么要用函数
    - 如果不用函数调用，直接使用引用类型，会造成单例模式，相同组件的多个实例共享同一个属性或data,导致状态混乱

--- 
### vue-router

1. 原理是什么
    - 支持history api时
        - ** pushState() 绝对不会触发 hashchange 事件，即使新的URL与旧的URL仅哈希不同也是如此 **
        - pushState(state, title, urlParams) 浏览器历史记录数量增加
            - state 状态对象
            - title 标题 暂不支持
            - url参数 必须与当前页面同源
            - hash的区别  前后url相同时也会产生历史记录
        - replaceState(state, title, urlParams) 浏览器历史记录数量不增加
        - popstate 只有点击浏览器的后退前进或history.forward()、history.back()才会触发事件，参数为state
    - 不支持时
        - hash模式使用onhashchang 事件 location.href = '#xxx' location.hash = ''
        - history模式下，不支持history api时降级为hash模式
- window.history api
    - 页面跳转 loaction.href、location.assign() location.reload() location.replace()  window.open()
    - History.state
    - history.back() history.go(n) history.forward()
    - history.pushState()
    - history.replaceState()
1. mode含义
    - hash default
    - history
    - abstract 服务端渲染
2. base
    - base 默认为 /
    - 地址栏上显示的地址pathname为`` base + fullpath``(vue-router 根据单个路由配置解析处理的pathname + search + hash)
3. hash模式和history模式的区别是什么
    - 支持history api时 底层处理是一样
    - url显示的页面地址不同
    - 如果是history模式时，nginx需要配置页面重定向到到首页，否则刷新会找不到页面
4. 命名视图 ? 
    - 默认为defalut视图
    - 
5. 判断是不是同一个路由的标准
    - path 
    - params
    - 如果是同一个路由时，路由组件会复用，不会重新new 实例
    - 同一路由组件复用时执行下面的导航守卫
        - beforeEach
        - beforeRouteUpdate
        - afterEach
6. 导航守卫的分类、有哪些
    - beforeEach
    - beforeEnter
    - beforeRouteEnter
    - beforeResove
    - beforeRouteUpdate
    - beforeRouteLeave
    - afterEach
        - dom更新后执行beforeRouteEnter中传给next的回调函数
7. router和route 的区别是什么 ?
    - router
        - 一个实例
        - push() replace() go() back()
        - router.app router.currentRoute router.mode
        - 
    - route 路由快照、一次导航信息，只读 /path/index?query=33#hash?hash
        - name 
        - meta
        - path: 解析过的pathname > /path/index
        - hash: #hash?hash
        - query: {query:333}
        - params
        - fullPath: path + query + hash
        - matched[{path:路由选项中的原始path}]


---
### vuex

- 原理
    - 更加全面的eventBus
    - 利用vue的响应式原理
- strict
    - dev模式下建议开启，方便规范，状态变更操作
    - 生产模式，关闭，因为是deep检测，一方面影响性能，另一方面能够忽略错误提示
- 为什么能够做到必须通过mutation才可以改变state不报错
    - 对state进行watch，deep为true，每个属性的变化都进行检测
    - 通过mutation修改状态值时，会有一个flag（true）标识这次是正常的改变,mutation回调函数执行后flag会变为初始值（false）
- action mutation的区别是什么
    - 易于调试、开发，每次状态的变化都会记录快照，可追溯
    - 异步调用时，前后状态无法记录，无法确定状态在未来哪个时间会发生变更
    - mutation只能是同步函数，能够记录状态变化前后快照
    - action的函数可以是任意类型