// 改变原数组
function sort (arr) {
    return arr.sort((a, b) => Math.random() > 0.5)
}
// 不改变原数组
function random1(param) { 
    let newArr = []
    let len = param.length
    let indexList = []
    while(newArr.length < len) {
        let index = Math.floor(Math.random() * len)
        if (indexList.indexOf(index) > -1) {
            indexList.push(index)
            newArr.push(param[index])
        }   
    }
    return newArr
 }