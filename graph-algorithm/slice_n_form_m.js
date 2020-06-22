let list = [1, 12, 23, 5]

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

console.log(sliceN(list, 3))

