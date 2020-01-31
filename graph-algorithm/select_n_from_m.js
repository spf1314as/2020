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