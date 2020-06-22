function trap(arr){
    if(!arr.length) return 0;
    let left = 0,right = arr.length-1,leftHeight = 0,rightHeight = 0,res = 0;
    while(left < right){
        if(arr[left] < arr[right]){
            leftHeight = Math.max(arr[left],leftHeight);
            res += leftHeight - arr[left];
            left++;
        }else{
            rightHeight = Math.max(arr[right],rightHeight);
            res += rightHeight - arr[right];
            right--;
        }
    }
    return res;
}

let list = [0,1,2,0,1,0]
// console.log(trap(list))

function fillWater(list) {
    let res = 0
    let leftHeight = 0
    let rightHeight = 0
    let left = 0
    let right = list.length - 1
    while(left < right) {
       if (list[left] < list[right]) {
        leftHeight = Math.max(list[left], leftHeight)
        let val = leftHeight - list[left]
        res +=val
        left++
       } else {
           rightHeight = Math.max(rightHeight, list[right])
           let val = rightHeight - list[right]
           res +=val
           right --
       }
    }
    return res
}

console.log(fillWater(list))




