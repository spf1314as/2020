function CustomPromise (fn) {
    let callBacks = []
    let status = 'pedding'
    let value = ''
    this.then = function(onFulfilled, onRejected){
        return new CustomPromise(function (resolve, reject) {
            handle({
                onRejected: onRejected,
                onFulfilled: onFulfilled,
                reject,
                resolve
            })
        })
    }
    function handle (callback) {
        if (status === 'pendding') {
            callBacks.push(callback)
            return
        }
        var cb = status === 'fulfilled' ? callback.onFulfilled : callback.onRejected
        if (cb === null) {
            cb = status === 'fulfilled' ? callback.resolve : callback.reject
            cb(value)
            return
        }
        try {
            let ret = cb(value)
            callback.resolve(ret)
        } catch(error) {
            callback.reject(error)
        }
    }
    function resolve (data) {
        let then = data.then
        if (!!then && typeof then === 'function') {
          return then.call(data, resolve, reject)
        } 
        value = data
        status = 'fulfilled'
        execute()
    } 
    function reject (error) {
        status = 'reject'
        value = error
        execute()
    }
    function execute () {
        setTimeout(function () {
            for (let cb of callBacks) {
                handle(cb)
            } 
        }, 0)
    }
    this.catch = function (onRejected) {
        return this.then.call(this, null, onRejected)
    }
    this.all = function (promises) {
        let resolveList = []
        let rejectList = []
        return new CustomPromise(function (resolve, reject) {
            promises.foreach(item => {
                let itemResult = false
                item.then(res => {
                 resolveList.push(res)
                 if (resolveList.length === promises.length) {
                     value = resolveList
                     return this.then.call(this, resolve, reject)
                 }
                }).catch(err => {
                    rejectList.push(err)
                    value = err
                    if ( rejectList.length === 1) {
                        return this.then.call(this, null, reject)
                    }
                })
            })
        })
    }
    fn(resolve, reject)
    
}

/* new Promse((resolve, reject) => {
resolve()
})
Promise.resolve(1).then(function(){}, function(){}).then()

*/