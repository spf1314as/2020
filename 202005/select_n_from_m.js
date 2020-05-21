let array = [1, 3, 4, 5, 6, 10, 20, 0 ];
// 134 135 136 137 1310 1320 130

function sliceNformM(arr, n) {
    function slice(list, i) {
        return list.slice(i)
    }
    let result = []
    for(let [index, item] of arr.entries()) {
        let cells = [item]
        recursive(slice(arr, index+1), cells)

    }

    function recursive(data, cells) {
        for (let [index, item] of data.entries()){
            let cell = [...cells]
            cell.push(item)
            if (cell.length === n) {
                result.push(cell)
            } else {
                recursive( slice(data, index+1), cell)
            }
        }
    }
    return result
}

console.log(sliceNformM(array, 3))

