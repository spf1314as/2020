function Parent() {


}
var p = new Parent();

console.log(p.__proto__ === Parent.prototype ) // true
console.log(p.prototype) // undefined
console.log(p.constructor) // Parent
console.dir(Parent.prototype ) // {}
console.log(Parent.__proto__ === Function.prototype) // true
console.log(Parent.constructor) // Function
