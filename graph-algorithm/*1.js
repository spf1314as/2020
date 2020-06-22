// num1 = "123", num2 = "456"
// 输出: "56088"

function result (num1, num2) {
    let newNum1 = num1.split('').reverse()
    let newNum2 = num2.split('').reverse()
    let res = []
    for (let i = 0; i < newNum1.length; i++){
        for(let j = 0; j < newNum2.length; j++) {
            let temp = newNum1[i] * newNum2[j]
            res[i+j] = !res[i+j] ?  temp : res[i+j] + temp
        }
    }
    
    res.forEach((item, i) => {
        if(item > 9) {
            let int = Math.floor(item/10)
            res[i+1] = res[i+1] ? res[i+1]*1 + int : int
            res[i] =  item - int*10
        }
    })

    return res.reverse().join('')
}

console.log(result('1000', '23'))