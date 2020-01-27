Function.prototype.apply1 = function (target) {
    let self = this
    let obj = target || window
    obj.fn = self
    if (arguments.length < 2) {
        obj.fn()
    } else {
        let arr = []
        let params = arguments[1]
        for (let i = 1 ; i < params.length ; i++) {
            arr.push('params[' + i + ']')
        }
        
        
        eval("obj.fn("+ arr +")")
    }
    delete obj.fn
}
function fn (num1, num2, num3) {
    console.log(this.name)
    console.log(typeof num1, typeof num2,typeof num3, 'num')
}

fn.apply1({name: 'test'}, '1', 2, "'ssaaaa'")
// let arr = [{}, {}, 3, 4]
// console.log(arr.toString())