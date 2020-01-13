let obj = {
    name: 'didi',
    sayName(num) {
        console.log(num)
        console.log(this.name)
    }
}


// sayName()
// 1. 默认绑定
// let sayName = obj.sayName
// sayName()
// 2.隐式绑定
// obj.sayName()
// 3. 显示绑定
// obj.apply({name: 'xiaomi'})
// obj.call(null, 111)
// let sayName = obj.sayName
// let newSay = sayName.bind({})
// let say = new newSay('newSay')
// console.dir(say)
// new可以改变bind绑定的this指向，相当于函数的正常调用
// function Go(name, num) {
//     this.name = name
//     console.log(num, 'num')
// }
// let newGo = Go.bind({})
// let go = new newGo(8888, 5555)
// console.log(go)

// 4. new 调用
/**
 * 1. 创建this
 * 2. 将执行环境中的this替换掉
 * 3. 执行函数代码
 * 4. 返回代码
 */
function BindNew () {

}
// new BindNew()