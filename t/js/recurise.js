let  arr = [[[33], 33, 1, [2]], [[[[[6]]]]]]

function flatArray(list) {
    let arr = []
    for (const iterator of list) {
        if (Array.isArray(iterator)) {
            arr = arr.concat(flatArray(iterator))
        }else {
            arr = arr.concat(iterator)
        }
    }
    return arr
}

function flatArrayReduce(list) {
   return list.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return pre.concat(flatArrayReduce(cur))
        } else {
            return pre.concat(cur)
        }
    }, [])
}
// console.log(flatArray(arr))
// console.log(flatArrayReduce(arr))

let pickMax = [3333, 555, 33,2,1,0, 1000]

function selectSort(list) {
    let len = list.length
    for (let i = 0; i< len; i++) {
        let min= i
        for (let j = i+1; j < len; j++) {
            if (list[j] <= list[min]) {
                let temp = list[j]
                list[j] = list[i]
                list[i] = temp
            }
        }
    }
    return list 
}

console.log(selectSort(pickMax))
