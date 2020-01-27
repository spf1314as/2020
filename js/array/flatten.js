function flatten (list, level = 1) {
  let result = list.reduce(function(preVal, curVal, index) {
        console.log(index, 'index')
        return preVal.concat(Array.isArray(curVal) && level > 1 ? flatten(curVal, level - 1) : curVal)
    }, [])
    return result
}
function recursion(list, level = 1) {
    let result = []
    for (let item of list) {
        if (Array.isArray(item) && level > 0) {
            result = result.concat(recursion(item, level - 1))
        } else {
            result.push(item)
        }
    }
    return result
}
let arr = [1, [2], [[3]], [[[4], 6]]]
// console.log(flatten(arr, 5))

// console.log(JSON.stringify(recursion(arr)))
// console.log(JSON.stringify(arr.flat(1)))
