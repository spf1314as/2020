// str = 13011015140
let str = 1301101514
function validTelephone(str) {
    str = str + ''
    let res = str.match(/^1[3587]\d{9}$/)
    return !!res

}
console.log(validTelephone(str))