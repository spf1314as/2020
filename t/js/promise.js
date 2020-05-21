function Promise1(fn) {
    let status = 'pendding'
    let callbacks = []
    let value = ''

    this.then = function (onFullfilled, onRejected) {
        return new Promise1 ((resolve, reject) => {
            handle(
                {
                    onFullfilled, 
                    onRejected,
                    resolve,
                    reject
            })
        })
    }
    
    function handle (callback) {
        if (status === 'pendding') {
            callbacks.push(callback)
        }


        let cb = status === 'fullfilled '? callback.onFullfilled : callback.onRejected
        
        if (cb === null) {
           cb = status === 'fullfilled' ? callbacks.resovle : callback.reject
           cb(value)
           return 
        }
        try{
           let res =  cb(value)
           callback.resolve(res)
        } catch (error) {
            callback.reject(error)
        }
    }

    function resolve(data) {
        let then = data.then
        if (typeof then === 'function') {
            return then.call(data, resolve, reject)
        }
        value = data
        status = 'fullfilled'
        execute()
       
    }
    function reject(error) {
        stauts = 'reject'
        value = error
        execute()
        
    }
    function execute () {
        setTimeout(() => {
            callbacks.forEach(cb => {
               handle(cb)
            })
        }, 0); 
    }

    fn(resolve, reject)
}
