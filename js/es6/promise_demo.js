function a (fn) {
    let callbacks = []
    let status = 'pedding'
    let value = ''
    this.then = function(onFullilled, onRejected) {
        return new a (function(resolve, reject) {
            handle({
                onFullilled,
                onRejected,
                resolve,
                reject
            })
        })
    }
    function handle (callback) {
        if (status === 'pendding') {
            callbacks.push(callback)
            return
        }
        let cb = status === 'fulfilled' ? callback.onFullilled : callback.onRejected
        if (cb === null) {
            cb = status === 'fulfilled' ? callback.resolve : callback.reject
            cb(value)
            return
        }
        try{
           let  ret = cb(value)
           callback.resolve(ret)
        }catch(error) {
            callback.reject(error)
        }
    }
    function resolve(data) {
        let then =data.then
        if (then && typeof then === 'function') {
            return then.call(data, resolve, reject)
        }
        value = data
        status = 'fullfilled'
        execute()
    }
    
    function reject(error) {
        value = error
        status = 'reject'
        execute()

    }
    function execute () {
        setTimeout(() => {
            callbacks.forEach(callback => {
                handle(callback)
            })
        }, 0);
    }
    fn(resolve, reject)


}


function PromiseDemo(fn) {
    let val = ''
    let status = 'pendding'
    let cbs = []

    this.then = function (onFullilled, onRejected) {
        return new PromiseDemo(function(resolve, reject) {
            handle({
                onFullilled,
                onRejected,
                resolve,
                reject
            })
        })


    function handle(params) {
        if (status === 'pendding') {
            cbs.push(params)
            return
        }

        let cb = status === 'fullfilled' ? params.onFullilled : params.onRejected;
        if(cb === null) {
            cb = status === 'fullfilled' ? params.resolve : params.reject
            cb(value)
        }
        try{
            let ret = cb(value)
            params.resolve(ret)
        } catch(error) {
            params.reject(error)
        }
    




    }
    function resolve (data) {
        let then = data.then
        if (then && typeof then === 'function') {
            return then.call(data, resolve, reject)
        }
        value = data
        status = 'fullfilled'
        execute()
        
    }
    function reject(data) {
        value = data
        satus = 'reject'
        execute()

    }

    function execute() {
       setTimeout(() => {
            cbs.forEach(cb => {
                handle(cb)
            })
       }, 0);

    }
    






}