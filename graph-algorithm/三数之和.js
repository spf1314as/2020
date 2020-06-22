function sliceN(list, n) {
    let result = []
    for(let i = 0; i< list.length; i++){
        let cell = [list[i]]
        recursive(list.slice(i+1), cell)
    }

    function recursive(array, cell) {
        for(let i = 0; i< array.length; i++) {
            let tempCell = [...cell]
            tempCell.push(array[i])
            if(tempCell.length == n) {
                result.push(tempCell)
            } else {
                recursive( array.slice(i+1)  , tempCell)
            }
        }
    }

    return result
}


let array = [-1, 0, 1, 2, -1, -4]

function slice (list) {
  let tempList =  sliceN(list, 3)
    return tempList.filter(item => {
        let total = 0
        item.reduce((pre, cur) => {
            total = pre + cur
            return total
        }, total)
        return total === 0
    })
}
// console.log(slice(array))

function useBack (list, target, n) {
    let res = []
    function back (path, i) {
        if (path.length === n) {
            let total = 0
            path.reduce((pre, cur) => {
                total = pre + cur
                return total
            }, total)
            if (total === target) {
                res.push(path)
                return
            } 
        }
        for(let j = i; j < list.length; j++) {
            path.push(list[j])
            back(path.slice(), j + 1)
            path.pop()
        }
    }
    back([], 0)
    return res

}

console.log(useBack(array, 0, 3))




















