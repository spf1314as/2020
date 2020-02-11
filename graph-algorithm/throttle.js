/**
 * 第一次调用执行
 * 后面每次调用按照规定的间隙时间执行
 * 如果调用间隙时间大于规定的时间 直接执行
 */
function throttle(fn, dely) {
    let timer = null
    let fireTime = 0
    return function cb() {
        let self = this
        let args = [...arguments]
        let cur = Date.now()
        clearTimeout(timer)
        isEvalute()
        function isEvalute () {
            if (cur - fireTime >= dely) {
                evalute()
            } else {
               timer = setTimeout(function () {
                    isEvalute()
                }, dely + fireTime - cur)
            } 
        }
        function evalute () {
            fn.apply(self, args)
            fireTime = Date.now()
            timer && clearTimeout(timer)
            timer = null
        }

        
    }
}

function test () {
    console.log(Date.now())
}
let i = 0
let deTest = throttle(test, 2 * 1000)
let timer = setInterval(() => {
    deTest()
    i++
    if (i >= 10) clearInterval(timer)
}, 1 * 1000);

