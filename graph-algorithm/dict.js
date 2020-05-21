// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
//   输出: false

let wordDict = ["cats", "dog", "sand", "and", "cat"]
let s = "catsnddog"
function findDict (s) {
    for (let index = 0; index < s.length ; index ++) {
        let item = s[index]
        let list = wordDict.filter(dict => {
            return  dict.indexOf(item) === 0
         })
         if (list.length === 0) return false
         let result = false
         for (const cell of list) {
            let i = s.indexOf(cell, index)
            if (i > -1) {
                let nextIndex = i + cell.length
                let nextString = s.slice(nextIndex)
                if (!nextString) return true
                result =  findDict(nextString)
                if (result) return true
            }
         }
         return result
    }
    return false
   

}
console.log(findDict(s))
