1. promise 执行顺序
2. setTimeout setinterval setimmiately
    - 执行特点、区别
3. vue $nextTick实现
4. web 页面异步实现种类
#### setTimeout模拟setInterval的原因
1. setTimeout
    - 期待的时间之后将回调函数放入事件队列当中，最小延时时间为4ms
    - 由于单线程原因，callback延时执行的时间不会大于这个时间
2. setInterval
    - 期待的时间后，将回调函数放入事件队列当中，一直重复
    - 如果队列繁忙，执行回调函数等待直到，前面的队列执行完
    - 如果回调函数执行的时间过长，导致前后两次回调函数的执行间隔小于期待值 `setTimeout模拟setInterval就是解决这个问题`
