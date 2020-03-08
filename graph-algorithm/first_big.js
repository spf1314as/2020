let num = 4675 // 4765 4756 
// 75 57
// 675 765 756 567 576
function four (str, num, lastStr = '') {
    for (let index = 1 ; index < str.length ; index++) {
        let firstStr = str[index]
        let left = str.slice(0, index) + str.slice(index+1)
        if (left.length < 3) {
            let resStr = lastStr + firstStr + left
            if (Number(resStr) > num) {
                console.log(resStr)
            }
           two(left, num, lastStr + firstStr)
        } else {
            four(left, num, lastStr+firstStr)
        }
    }
}
function selectN (num) {
    num += ''
    for (let index = 2 ; index <= num.length ; index++) {
        four (num.slice(-index), num.slice(-index))
    }
}

selectN(657)
