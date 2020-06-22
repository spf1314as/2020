let list = [1, 10, 4, 8, 2, 6] // 6 5 4/3/2/1

function getListTotal (list, target) {
    let res = []
    list.sort((x, y) => x - y)
    function back (path, j) {
        if (path.length == target) {
            res.push(path)
            return
        }
        
        for(let  i =  j; i < list.length; i++) {
           if (!~path.indexOf(list[i])) {
            path.push(list[i])
            back(path.slice(), 0)
            path.pop()
           }
        }
    }

    back([], 0)
    return res

}

// console.log(getListTotal(list, 3).length)


function slice(list, n) {
    let res = []
    
    function back(temp, j) {
        if(temp.length === n) {
            res.push(temp)
            return
        }
        for(let i = j; i< list.length; i++) {
            temp.push(list[i])
            back(temp.slice(), i+1)
            temp.pop()
        }
    }
    back([], 0)
    return res
}

console.log(slice(list, 3))




