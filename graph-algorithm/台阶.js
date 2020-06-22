

function clime(n) {
    if ( n == 1 || n ==2) {
        return n
    } else {
        return clime(n-1) + clime(n-2)
    }
}

function climb (n) {
    let array = new Array(n+1)
    array[0] = 0
    array [1] = 1
    array [2] = 2
    for (let i = 3; i< n+1 ; i++) {
        array[i] = array[i-1] + array[i-2]
    }
    return array[n]

}

console.log(clime(10))