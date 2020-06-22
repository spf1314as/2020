function devide (sum, base) {
    let int = 0
    let leftList = []
    let left = 0
    let leftRes = []
    let floatInt = 0
    int = parseInt(sum/base)

    left = sum % base
    function recursive(leftSum) {
        if (leftSum === 0) return
        let index = leftList.findIndex(obj => obj.left === leftSum)
        if (index > -1) {
            leftRes = leftList.slice(index)
            return
        } else {
            while(leftSum < base) {
                leftSum = leftSum * 10
                floatInt++
            }
            let left = leftSum % base
            let int = parseInt(leftSum/base)
            leftList.push({
                val: int,
                left,
                index: floatInt
            })
            recursive(left)
        }
    }
    recursive(left)
    let leftRes2str = ''
    for(let i = 0; i< leftRes.length; i++) {
        let obj = leftRes[i]
        while (leftRes2str.length < obj.index - 1) {
            leftRes2str = leftRes2str + '0'
        }
        leftRes2str = leftRes2str + obj.val
    }

    return int + '.' + `(${leftRes2str})`


}

console.log(devide(100, 3))