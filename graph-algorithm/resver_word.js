// let`s go to => s`tel og ot
let str = 'let`s go to '
function reverse(str) {
    let res = ''
    let temp = ''
    for (let i = 0; i < str.length; i++){
        let item = str[i]
        if(item === ' ') {
            res = res ? res +  " " + temp : temp
            temp = ""
        } else {
            temp = item + temp
        }
        if (i === str.length - 1) {

            res = res ? res +  " " + temp : temp
        }

    }
    return res

}

console.log(reverse(str))
