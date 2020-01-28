function softBind(fn, self) {
    let args = [].slice.call(arguments, 2)
    function bind () {
        let totalArgs = args.concat([].slice.call(arguments))
        fn.apply( 
            (!this || this === (window || global)) ? self : this , totalArgs)
    }
    bind.prototype = Object.create(fn.prototype)
    bind.prototype.constructor = bind
    return bind
}

class Game {
    constructor () {}
}