// function oneNumberRangN (n){
//     let ones = 0
//     for(let i = 1; i<=n ; i*=10) {
//         let a = Math.floor(n/i), b = n%i;
//         ones += Math.floor((a+8)/10)*i + (a%10 === 1) * (b+1)
//     }
//     return ones
// }
// console.log(oneNumberRangN(20))
// 0 0
// 10 1
// 20 10 11 12 13 14 15 16 17 18 19
// 30 21 
// 40 31
// 50 41
// 60 51
// 100 91
// 110 100 101 102 103 104 105 106 107 108 109 
// 120 110 111 112 ... 119
// n/

// 6
function counter(n){
    let ones = 0
    for(let i = 1; i<=n; i*=10) {
        let a = Math.floor(n/i), b = n%i; // a 6 b 6
        console.log(a, 'a')
        console.log(b, 'b')
        console.log( Math.floor((a+8)/10)*i, 'floor')
        console.log((a%10 ===1)* (b+1), 'ab')
        console.log('***********')
        ones = ones + Math.floor((a+8)/10)*i + (a%10 ===1) * (b+1)
        // 1010 110 2010
    }
    return ones
}
console.log(counter(13))
// 1 10 11 12 13

