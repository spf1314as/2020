function Promise1 (fn) {
    var status = 'pendding'
    var callbacks = []
    var value = ''
    this.then = function (onFullfilled, onRejected) {
        return new Promise1(function(resolve, reject) {
            handle({
                onFullfilled: onFullfilled,
                onRejected: onRejected,
                resolve,
                reject
            })
        })
    }

    function handle(callback) {

        if (status === 'pendding') {
            callbacks.push(callback)
            return
        }
        var cb = null
        if (status === 'onFullfilled') {
            cb = callback.onFullfilled ? callback.onFullfilled : callback.resolve
        } else {
            cb = callback.onRejected ? callback.onRejected : callback.reject
        }

        try{
            var val = cb()
            value = resolve(val)
           
        }catch(error) {
            value = reject(error)
           
        }
    }

    function resolve(data) {
        if (typeof data.then === 'function') {
            data.then.call(data, resovle, reject)
            return
        }
        
        value = data
        status = 'onFullfilled'
        execute()

    }

    function reject(data) {
        value = data
        status = 'onReject'
        execute()
    }



    function execute() {
       setTimeout(function () {
            callbacks.forEach(function(cb) {
                handle(cb)
            })
       }, 0)
    }

    fn(resolve, reject)

} 