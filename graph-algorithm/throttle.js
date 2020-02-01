/**
 * 第一次调用执行
 * 后面每次调用按照规定的间隙时间执行
 * 如果调用间隙时间大于规定的时间 直接执行
 */
function throttle(fn, dely) {
    let timer = null
    let time = ''
    let counter = 0
    return function callback() {

        
        if (time) {
            counter++
            setTimeout(() => {
                fn.apply(this, [].slice.call(arguments))
            },counter * dely)
        } else {
            time = Date.now()
            fn.apply(this, [].slice.call(arguments))
            timer = setInterval(() => {
                if (counter <=0) {
                    time = 0
                    clearInterval(timer)
                } else {
                    fn.apply(this, [].slice.call(arguments))
                    counter--
                }
            }, dely); 
        }   

    }

}

let argsList = []
function wrapper() {
    return function reFn() {
        argsList.push([].slice.call(arguments))
        
    }
    
}

let fn = wrapper()

fn(22)
fn(444)
console.log(argsList)

