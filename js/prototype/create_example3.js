function Fn() {
    
}

Fn.prototype = Object.create(Array)
var fn = new Fn()
console.log(fn instanceof Fn) // true
console.log(fn instanceof Array) // false
console.log(fn.constructor) // Array

Fn.prototype = Object.create(null)
var fn = new Fn()
console.log(fn instanceof Fn) // true
console.log(fn instanceof Object) // false
console.log(fn.constructor) // Array
