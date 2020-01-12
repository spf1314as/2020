/**
 * @desc 改变this的行为特性，不是为了简洁
 * 1. 继承、绑定this, arguments, super
 * 2. 简洁 默认retrun一个值
 * 3. 回调太多时，不直观易懂
 * 4. 匿名函数
 * 5. 不能进行递归
 * 6. 不能作为构造函数
 * 
 */

// 1. 箭头函数不能作为构造函数使用 > this是继承自定义时的函数或者全局，不能动态改变
// const First = (name, age) => {
//     this.name = name
//     this.age = age
// }
// let first = new First('didi', 7)
// output > 报错 First不是构造函数
// 2. 箭头函数中arguments，继承自定义时所在的函数的arguments
// + function() {
//     const second = () => {
//         console.dir([...arguments])
//     }
//     second(222, 4555)
//     console.log([...arguments])
// }(222, 4444)
// output > [222, 4444], [222, 4444]
// 3. super 继承来自于外层函数
// class Third {
//     constructor() {
//         this.name = 'third'
//     }
//     sayName () {
//         console.log(this.name)
//     }
// }
// class ThirdChild extends Third {
//     sayName(){
//        function say () {
//             super.sayName()
//         }
//         setTimeout(() => {
//             say()
//         }, 3 * 1000);
//     }
// }
// let child = new ThirdChild()
// child.sayName()
// output 报错 super不存在

