// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

let list = [3,2,3,1,2,8,5,5,6]

function pickK(list, k) {
    let newList = [...list].sort()
    return newList[list.length - k]
}
console.log(pickK(list, 4))