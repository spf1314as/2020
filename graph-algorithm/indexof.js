function indexOf(arr, value) {
  let i = arr.length
  for (; i-- && arr[i] !== value;) {}
  return i;
}
function indexOf1 (arr, value) {
  let i = arr.length
  while(i--) {
    if (arr[i] === value) return i
  }
  return i
}
let arr = [3, 4, 6]
console.log(indexOf(arr, 3))
