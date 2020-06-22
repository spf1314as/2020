function slice(array) {
    var max = 0,temp = 0;
    for (var i = 0; i < array.length; i++) {
        temp += array[i];
        if (temp < 0)
            temp = 0;
        if ( max < temp)
            max = temp;
    }
    return max
}
let list = [-2,1,-3,1, 4,2,1,-5,4]
// console.log(slice(list))


function sliceMax(list) {
    let max = 0
    let temp = 0
    for(let i = 0; i< list.length; i++) {
        temp = temp + list[i]
        if (temp <0){
            temp = 0
        }
        if (max < temp) max = temp
    }
    return max
}

// console.log(sliceMax(list))

function findMax(list) {
    let max = 0
    let temp = 0
    list.forEach((item, i) => {
        temp += item
        if (temp < 0) {
            temp = 0
        }
        if (temp > max) max = temp
    })
    
    console.log(max)
}

// findMax(list)

function getMax(list) {
    let max = 0
    let temp = 0
    // for(let i=0; i< list.length; i++){
    //     temp = temp + list[i]
    //     max = Math.max(temp, max)
    //     if(temp < 0) {
    //         temp = 0
    //     }
    // }

    list.reduce((pre, cur) => {
        let total = pre + cur
        max = Math.max(total, max)
        if (total < 0) return 0
        return total
    })
    return max
}

let flat = [[[[[2], 3, 4, 5, [[[78]]]]]]]

function flatFn(list) {
    let res = []
   res = list.reduce((pre, curr) => {
      if (Array.isArray(curr)) {
          return pre.concat(flatFn(curr))
      } else {
          return pre.concat(curr)
      }
    }, [])
    return res
}

console.log(flatFn(flat))

+function(list) {




} ([])
