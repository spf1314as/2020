/**
 * 1. 块级作用域变量
 * 2. 不会声明提前
 * 3. 未声明之前不能够使用（TDZ）
 * 4. 不能重复声明
 * 5. const 变量声明后不能修改，变量是常量
 */
let a = 11 
const b = 11
let aa = {}
const bb = {}
/**
 * typeof Symbol(11) === 'symbol'
 * 1. 声明
 * 2. symbol.iterator
 * 3. symbol.for
 * 4. symbol.hasInstance
 * 5. symbol.                  
 */


 function Foo () {
 }
Foo[Symbol.hasInstance] = function (instance) {
    console.log('false')
    return false
}
Foo.prototype[Symbol.toStringTag] = 'XXXX'
let foo = new Foo()
console.log(({}).toString.call(foo))
