let arr = [[3], [0, 1], [10, 8, 9]]
//   3   4 
// 10  8    9
// 13 11 12 13

// function slice(arr) {
//     for (let i = 0; i< arr.length; i++) {
//         let temp = arr[i]
//         let obj = {}
//         for (let j = 0; j< i+1 ; j++) {
//             console.log(temp)
//             let key = (i + 1) + '_' + j
//             let key2 = (i + 1) + '_' + (j+1)
//             let init = arr[i][j]
//             let ij = init + (i >= arr.length -1 ? 0 :  arr[i+1][j])
//             let i1j1 = init + (i>= arr.length-1 ? 0 : j >= i ? 0 : arr[i+1][j+1])
//             obj[key] = obj[key] ? Math.min(obj[key], ij) :ij
//             obj[key2] = obj[key2] ?  Math.min(obj[key2], i1j1) : i1j1
//         }

//     }
//     console.log(arr[arr.length-1])
// }
// slice(arr)

var slice = function(triangle) {
    let len = triangle.length;
    let dp = new Array(len+1).fill(new Array(len+1).fill(null));
    console.log(JSON.stringify(dp))
    for(let i=len-1;i>=0;i--){
        for(let j=0;j<len;j++){
            if(i===len-1){
                dp[i][j] = triangle[i][j];
                console.log(JSON.stringify(dp))
            }else{
                console.log(dp[i+1][j+1])
                dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
            }
        }
    }
    return dp[0][0]
}

// console.log(slice(arr))

function getPath (list) {
    let len = list.length

    for (let i = 0; i< len; i++) {
        let tempList = []
        for (let j = 0; j<=i ; j++) {
            if (i === len -1) {
                break
            }
           
            let curTemp = list[i][j] + list[i+1][j]
            let curTemp1 = list[i][j] + list[i+1][j+1]
           
            if (tempList[j]) {
                list[i+1][j] = Math.min(tempList[j], curTemp)
            } else {
                list[i+1][j] = curTemp
            }

            tempList[j] = curTemp // row[i+1][j] = row[i][j] + row[i+1][j]
            if (j >= i)  {
                list[i+1][j+1] = curTemp1
            }
            tempList[j+1] = curTemp1   // row[i+1][j+1] = row[i][j] + row[i+1][j+1]
        }
    }


    console.log(
        JSON.stringify(list)
    )

}

getPath(arr)