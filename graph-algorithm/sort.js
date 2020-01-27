function quickSort(array) {
    if (array.length <2) return array
    let base = array[0]
    let min = []
    let max = []
    for (let i = 1 ;i < array.length; i++) {
        if (array[i] < base) {
            min.push(array[i])
        } else {
            max.push(array[i])
        }
    }
    return quickSort(min).concat(base,quickSort(max))
}


// 选择排序
function select (arr) {
    let len = arr.length
    let min = 0
    for (let i =0;i<len-1; i++) {
        min = i
        for (let j = i+1; j< len; j++){
            if (arr[j] <=  arr[min]) {
                min = j
            }
        }
        
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr

}

let arr = [3,4,5,1000, 3,5,8,200,100,10]
console.log(quickSort(arr))