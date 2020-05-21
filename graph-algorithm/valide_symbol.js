/**
 *  str = "(())()()((())"
 * 
 */
let str = "()(())()()((())()"
// function findMaxValidSeg(str) {
    
//     return result
// }

// console.log(findMaxValidSeg(str))
// () () ()() () ()
function findByArray(str) {
    let str2array = str.split(/\(\s*\)/)
    console.log(str2array)
    let result = []
    let target = "()"
    for (const [index, item] of str2array.entries()) {

       if (item) {
           result.push(target)
       }else {
           if (result.length === 0 || index === str2array.length -1 ) {
                result.push(target)
           }else {
                result[result.length -1] = result[result.length -1] + target
           }
       }

    //    if (item )  {
    //     result.push(target)
    //    } else {
    //        if (index == 0 || index == str2array.length-1) {
    //             result.push(target)
    //        } else {

    //         result[result.length-1] = result[result.length-1] + target
    //        }
    //    }
    }
    return result
    
}
console.log(findByArray(str))
