// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba")

// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False

function validate(s1, s2) {
    let formatS1 = []
    for(let i = 0; i < s1.length; i++) {
        let val = s1[i]
        let index = s2.indexOf(val)
        if (index > 0) {
            formatS1.push(index)
        }
    }
    if (s1.length !== formatS1.length) return false
    let indexList = [...formatS1].sort()
    let j = indexList.length
    while(j--) {
        if(j === 0) return true
        if (indexList[j] - 1 !== indexList[j-1]) return false
    }
    return true
    // for(let [index, item] of indexList.entries()) {
    //     if (index + 1 <= indexList.length -1) {
    //         if (item + 1 !== indexList[index+1]) return false
    //     } else {
    //         return true
    //     }
    // }
    // return true
}
let s1 = "ab" ;
let s2 = "eidbaoo";
console.log(validate(s1, s2))