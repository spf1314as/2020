let arr = [1, 3, 3, 4]
function findTimes (num, list) {
  let times = 0
  list = [...list, Infinity]
  list.reduce((pre, current) => {
    console.log(pre)
    if (pre === num) {
      times ++
    }
    return current
  })
  return times
}
console.log(findTimes(4, arr))