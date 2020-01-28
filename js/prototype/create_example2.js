let obj = {
    name: 'xiaomi',
    age: 12
};
let obj1 = Object.create(obj);

// console.log(obj1) // {}
// console.log(obj1.__proto__ === obj) // true

obj.game = 'huyu';
// console.log(obj1) // {}
function create(obj){
    let target = new Object();
    target.__proto__ = obj;
    return target
}
function createFn(obj){
    function fn() {
    }
    fn.__proto__ = obj; // 错误   fn.prototype = obj
    return new fn()
}
function P(name) {
    this.name = name;
}
P.prototype.sayName = function () {
    console.log('game')
    
}
function p() {
    
}
 p.prototype = create(P.prototype);

let test = new p()

// console.log(p.prototype.__proto__ === P.prototype) // true
// console.log( p.prototype instanceof P) // true

console.log(test instanceof p) // true
// console.log(test instanceof P) // true
// console.log(test.constructor === P) // false








