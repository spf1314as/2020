// efcabcddabcd

function findDouble(params) {
    let str = ''
    let result = []
    for (let i = 0; i< params.length; i ++) {
        let item = params[i]
        if (!~str.indexOf(item)) {
            str += item
        } else {
            let reserveStr =  reverse(str)
            let allStr = str + reserveStr
            let leaOne = str + reserveStr.slice(1)
            if (~params.indexOf(allStr)) {
                result.push(allStr)
                str = ''
            }
            if (~params.indexOf(leaOne)) {
                result.push(leaOne)
                str = ''
            }
        }
    }

    function reverse(str) {
        let toList = str.split('')
        return toList.reverse().join()
        
    }
    return result
    
}

findDouble('cabcddcbafcb')

function findStr(params) {
    let result = []
    for (let i = 0 ; i < params.length; i ++) {
        let item = params[i]
        let lastIndex = params.lastIndexOf(item)
        if (lastIndex > i ) {
            let newStr = params.slice(i, lastIndex+1)
            let reverseStr = reverse(newStr)
            let findeIndex = params.indexOf(reverseStr)
            if (findeIndex === i) {
                result.push(reverseStr)
            }
        }
    }
    return result

    function reverse(str) {
        let toList = str.split('')
        return toList.reverse().join('')
        
    }

}
console.log(findStr('cabcdfdcbafcb'))