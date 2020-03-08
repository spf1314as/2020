let str = "123abcedffde321123"
let result = []
let len = str.length
for (let i =0 ; i <len-1; i++) {
    let lastIndex = str.lastIndexOf(str[i])
    if (~lastIndex && (lastIndex !== i)) {
        let temp = str.slice(i, lastIndex+1)
        if (temp === temp.split("").reverse().join("")){
            result.push(temp)
        }
    }
}
console.log(result)
