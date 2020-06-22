// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

let str = ["flower","flow","flight"]
function double (list) {
    let start = list[0]
    let common = ''
    for(let i =0; i< start.length; i++) {
        common += start[i]
       let res = list.every(str => str.startsWith(common))
       if (!res) {
            common = common.slice(0, common.length -1 )
            break
       }
    }
    return common
}
console.log(double(str))
console.log(double(["dog","racecar","car"]))
