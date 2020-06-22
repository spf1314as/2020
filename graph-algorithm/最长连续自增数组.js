// 输入: [1,3,5,4,7]
// 输出: 3

let list = [1, 1, 2, 1, 1]

function getMaxLongNum(list) {

    let temp = []
    let res = []
    for(let i = 0; i < list.length; i++) {
        if (i !== list.length-1) {
            if(list[i] < list[i+1] ) {
                temp.push(list[i])
            } else {
                res.push(temp.length + 1)
                temp.length = 0
            }
        } else {
            if (list[i] > list[i-1]){
                temp.push(list[i])
            }
        }
    }
    console.log(res, temp)
}



// getMaxLongNum(list)

function pickLong (list) {
    
    let res = []
    let start = 0
    let end = 0

    for(let i = 1; i< list.length; i++) {
        if (list[i-1] < list[i]) {
            end = i
        } else {
            end - start >= 0 && res.push(end - start +1)
            start = i
        }
    }
    console.log(res)



}

pickLong(list)

function getLong(list) {
    let res = []
    let temp = [list[0]]
    for(let i = 1;i< list.length; i++) {
        if (list[i] > list[i-1]) {
            temp.push(list[i])
        } else {
            if(temp.length >= res.length) {
                res = [...temp]
            } 
            temp = [list[i]]
        }
    }
    if(temp.length > res.length) res = [...temp]
    console.log(res)
}

// getLong(list)












