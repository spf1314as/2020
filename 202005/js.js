
/**
 * 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 */

 let str = "Let's take LeetCode contest"

 function reverse (str) {
     console.log(str)
    let newStr = ''
    let tempStr = ''
    for (let i = 0; i < str.length; i++) {
        let temp = str[i]
        if (temp == ' ') {
            newStr = newStr + ' ' + tempStr
            tempStr = ''
        } else {
            tempStr = temp + tempStr
        }
    }
    return newStr
 }
 
 console.log(reverse(str))


/**
 * 
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 
 */

 function reverse (str) {
    let res = ''
    let temp = ''
    for(let i =0 ; i< str.length; i++) {
        let item = str[i]
        if (item !== ' ') {
            temp = item + temp
        } else {
            res = res + ' ' + temp
            temp = ''
        }

    }
    return res

 }



