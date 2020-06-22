let str = "123abcedffde3211111123"
// 123abced
// 123abced ff
// 123abc edffde
// 123ab cedffdec
let result = []
let len = str.length
for (let i =0 ; i <len-1; i++) {
    let lastIndex = str.lastIndexOf(str[i])
    recursive(lastIndex)
   function recursive(lastIndex) {
    if (~lastIndex && (lastIndex !== i)) {
        let temp = str.slice(i, lastIndex+1)
        if (temp === temp.split("").reverse().join("")){
            result.push(temp)
            i = lastIndex
        } else {
          let index =  str.lastIndexOf(str[i], lastIndex-1)
            index > -1 && recursive(index)
        }
    }
   }
}
console.log(result)
