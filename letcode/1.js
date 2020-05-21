/**
 * 最长没重复的字符串长度
 * @param {string | number} str 
 *  abcdeffabnmjf =>  abcdef  fabnmj 6
 *  bcdeff bnmjf + 1 => bnmjf
 *  bcde, + 1 + 1
 */
/**
 *  bcdeffaabnmjf =>  bcdef  abnmjf 
 *  bcde aabnmjf   bcde + 1
 *  bnmjf, + 1 + 1
 */
function maxLongUnique(str) {
    let result = []
    let temp = ''
    for (let i = 0; i<str.length; i++) {
        let findIndx = temp.indexOf(str[i])
        if (findIndx > -1) {
            result.push(temp)
            temp = temp.slice(findIndx+1) + str[i]
        }else {
            temp += str[i]
        }
    }
    result.push(temp)
    console.log(result)
}
let str = '12345abjcddefehaa56789'
maxLongUnique(str)
