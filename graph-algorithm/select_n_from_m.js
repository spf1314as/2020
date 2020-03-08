let list = [1, 2, 3, 4, 5, 20, 220, 40]
// 123 124 125 134 135 145
// 234 235 245
// 345
function pickNFromM(list, n) {
    let result = []
    function slice(array, index, before = false) {

        return  before ? array.slice(0, index).concat(array.slice(index+1)) : array.slice(index+1)
    }
    for (let [index, item] of list.entries()) {
        let cell = []
        cell.push(item) // 1
        recursion(slice(list, index), n, result, cell)
    }
    function recursion (list, n, result, cell) {

        for (let [index, item] of list.entries()) {
            let cellCopy = cell.slice()
            cellCopy.push(item) // 12
            if (cellCopy.length < n) {
                recursion(slice(list, index), n, result, cellCopy) // 123
            } else {
                result.push(cellCopy)
            }
        }
    }
    return {
        total: result.length,
        result
    }
}

console.log(pickNFromM(list, 3))
console.log(pickNFromM1(list, 3))

function pickNFromM1 (list, n) {
    let result = []
    function slice(arr, i, bef = true) {
        let before = arr.slice(0, i)
        let after = arr.slice(i+1)
        return bef ? [...before, ...after] : after
    }
    for (let [index, item] of list.entries()) {
        let cell = []
        cell.push(item)
        recursion(slice(list, index, false), cell)
    }

    function recursion(arr, cell) {
        for (let [j, item] of arr.entries()) {
            let newCell = cell.slice() 
            newCell.push(item)  
            if (newCell.length >= n) {
                result.push(newCell)
            } else {
                recursion(slice(arr, j, false), newCell)
            }
        }
    }

    return {
        result: result,
        len: result.length
    }
}
