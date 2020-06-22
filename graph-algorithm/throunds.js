// 10,000.02

function throunds (num) {
    let num2array = (num + '').split('.')
    let float = num2array[1] || ''
    let int = num2array[0]
    let int2array = int.split('').reverse()
    let res = []
    for(let i = 0; i< int2array.length; i++) {
        res.push(int2array[i])
        if( (i+1)/3 === parseInt((i+1)/3) && i !== int2array.length - 1) res.push(',')
    }
    let intStr = res.reverse().join('')
    if (float.length) return intStr + '.' + float
    return intStr

}

console.log(throunds(444446660000))


