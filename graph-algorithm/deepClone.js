function deepClone (params) {
    if (Array.isArray(params)) {
        return params.map(deepClone)
    } else if(typeof params === 'object' && !!params) {
        let obj = {}
        for (let key in params) {
            obj[key] = deepClone(params[key])
        }
        return obj
    } else {
        return params
    }
}
function deepClone1(params) {
    function clone(target) {
        for (let key in params) {
            target[key] = deepClone1(params[key])
        }
        return target
    }
    let type = ({}).toString.call(params).slice(8, -1) //[object Object]
    switch (type) {
        case 'Object': 
            return clone({})
        case 'Array':
            return clone([])
        case 'Date':
            return new Date(params.valueOf())
        default:
            return params
    }   
}
let arr = [[222], 555 , {name: 4444,type: [3]}, new Date()]
let result = JSON.stringify(deepClone1(arr))
arr[2].name = 'diddi'
console.log(result)
console.log(arr)