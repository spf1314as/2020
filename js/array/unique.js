// 不区分 数字 字符串
function objKeys (arr) {
    let obj = {}
    for (let item of arr) {
        if (!obj[item]) obj[item] = true
    }
    return Object.keys(obj)
}

function useSet (arr) {
    let set = new Set(arr)
    return [...set]
}
// 不使用set
// 不使用map
// 处理NaN
function normalFun (arr) {
    let newArray = []
    let hasNaN = false
    for (let item of array) {
        if (item !== item && !hasNaN) {
            newArray.push(item)
            hasNaN = true
        }
        if (!~newArray.indexOf(item)) newArray.push(item)

    }
    return newArray
}

function unique(arr) {
    let i = 0
    let len = arr.length
    while(i < len) {
        i++
    }
}

function mapFun (arr) {
    
}
