let wall = [1, 0, 0, 2, 1, 3, 4];
// [0, 1, 0, 2, 3]
// [-1, 0, -1, 1, -2]

function water (arr) {
    let res = []


   let list =  arr.map((item, index) => {
        return {
            val: item,
            index: index
        }
    }).filter(item => !!item.val)
    list.reduce((pre, curr) => {
        if (curr.index - pre.index > 1) {
            res.push(curr.index - pre.index - 1)
        }
        return curr
    })

    recursive(list)
    function recursive(list) {
        let newList = list.map((item) => {
            let {val, index} = item
            return {
                val: val - 1,
                index
            }
        }).filter(item => !!item.val)
        newList.reduce((pre, curr) => {
            if (curr.index - pre.index > 1) {
                res.push(curr.index - pre.index - 1)
            }
            return curr
        })

        if (newList.length > 1) {
            recursive(newList)
        }
    }


    return res



}

console.log(water(wall))