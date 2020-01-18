let set = new Set([1,4])
set.has()
set.add()
set.size
set.delete()
let array = [...set]
let array1 = Array.from(set)
typeof set === 'object'

// Map
let map = new Map([[1, 3], [3, 4]])
map.has()
map.get()
map.size
map.delete()


/**
 * @desc 可遍历对象
 * 1. arguments
 * 2. document.querySelectorAll()
 * 3. array
 * 4. set
 * 5. map
 * 6. for of 时自动执行迭代器,Array.form,...
 * [Symbol.iterator]() { retur {next: func,}}
 * return {value, done}
 */
