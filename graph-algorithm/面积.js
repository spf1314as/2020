function cal (list) {
    let max = 0
    let formatList = []
    for(let i = 0; i< list.length; i++) {
        let row = list[i]
        for (let j =0; j< row.length; j++) {
            if (list[i][j] == 1) {
                list[i][j] = Number(list[i][j])
                if ( i !=0 && j !=0){
                    list[i][j] = Math.min(list[i-1][j], list[i-1][j-1], list[i][j-1]) + 1
                }
            }
            if (j == row.length -1) {
              let map =  row.map((val, index) => {
                    return {
                        val: val,
                        index
                    }
                }).filter(obj => obj.val >1)
                formatList.push(map)
            }
        }
    }

    console.log(formatList)
    return JSON.stringify(list)
}

// * 1 0 1 1 1
// * 1 1 1 1 1
// * 1 1 1 1 1
// * 1 0 0 1 1

let list = [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1]
]

console.log(cal(list))
