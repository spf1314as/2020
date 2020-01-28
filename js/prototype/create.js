function create(from) {
    function fn() {
        
    }
    fn.prototype = from
    return new fn()  
}
let from = {
    name: 'didi',
    getName () {
        console.log(this.name)
    }
}
function To() {

    
}
To.prototype = create(from)
To.constructor = To
let to = new To()
console.dir(to)
to.getName()
console.log(Object.prototype.__proto__ === null)
console.log(Object.getPrototypeOf(Object.prototype) === null)