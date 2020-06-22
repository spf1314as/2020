// "a good   example"
// 输出: "example good a"
let str = "a good   example"
function reverse (str) {
    let res = ''
    let temp = ''
    for (let i =0; i<str.length; i++) {
        let val = str[i]
        if (val === ' ') {
            res = temp + ' ' + res
            temp = ''

        } else {
            temp += val
        }
    }
    res = temp + res
  return  res.trim()

}
console.log(reverse(str))
