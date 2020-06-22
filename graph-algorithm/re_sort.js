let str = 'i like watching tv' // ilwt iav kt ec h i n g

function sort (str) {
    let res = []
    let index = 0
    for(let i = 0; i < str.length; i ++) {
        let item = str[i]
        if (item !== " ") {
            res[index] = res[index] === undefined ? item : res[index] + item
            index ++
        } else {
            index = 0
        }
    }
    return res.join(' ')
}
console.log(sort(str))

