// str = 'abcabcf'
// str = 'fcbacba'

let str = 'abbabaabba'

function doubleStr (str) {
   let res = []
   for(let i = 0; i<str.length; i++) {
        let item = str[i]
        let lastIndex = str.lastIndexOf(item)
        while(lastIndex > -1) {
            if (lastIndex > i ) {
                let raw = str.slice(i, lastIndex+1)
                let reverse = raw.split('').reverse().join('')
                if (raw === reverse) {
                    res.push(raw)
                    // i = lastIndex
                    // console.log(lastIndex)
                }
                lastIndex = str.lastIndexOf(item, lastIndex-1)
            } else {
                lastIndex = -1
            }
        }
   }
   return res
}
console.log(doubleStr(str))


