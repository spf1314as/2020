// reduce
// let list = [1, 3, 4, 5]
// let min = ''
// list.reduce(function(pre, current, index, array) {
//     console.log(index)
//     if (index === 0) min = pre
//     if (current < min){
//         min = current
//         console.log(min, 22)
//     }
//     return current
// }, Infinity)
// console.log(min, 11)

// flat
var list = [1, [4,[[[[4]]]]], 5, [4, 4, 5, 3, 2], [0, 3]]

function flat (array) {
    let arr = []
    for(let item of array) {
        if(Array.isArray(item)) {
           arr.push.apply(arr, flat(item))
        } else {
           arr.push(item)
        }
    }
    return arr
}

function flat2(array) {
    let arr = []
    return array.reduce(function(pre, curr, index, list) {
        if (Array.isArray(curr)) {
            return pre.concat(flat2(curr))
        } else {
            return pre.concat(curr)
        }
    }, [])
}

let result = flat2(list)
console.log(new Date())
console.log(result)





