/**
 * 多次调用只执行一次
 * 超过最长时间时，会调用一次
 * 调用完，函数触发时间重新计算
 */
// fn = debounce(function(){})
// fn()
function debounce(fn, delay = 2 * 1000, maxTime = 5 * 1000) {
    let time = Date.now()
    let timer = null
    let first = false
    let max = Math.max(delay, maxTime)
    return function() {
        !timer && clearTimeout(timer)
        if (!first) {
            first = true
            time = Data.now()
        }
        if (Date.now() - max > time) {
            time = Date.now()
            let args = Array.from(arguments)
            fn.apply(this, args)
        } else {        
            timer = setTimeout(() => {
                time = Date.now()
                let args = Array.from(arguments)
                fn.apply(this, args)
            }, delay);
        }
    }

    
}