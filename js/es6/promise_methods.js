// race
// all
// none 所有都失败，算完成；否则算失败
Promise.none = function (list) {
    return Promise.all(
        list.map(item => {
            Promise.resolve(item).then(value => {
                return Promise.reject(value)
            }).catch(error => Promise.resolve(error))
        })
    )
}
// any 完成一个就可以算成功
Promise.any = function (list) {
    let rejectList = []
    let resolveList = []
    let len = list.length
    return new Promise((resolve, reject) => {
        list.foreach(item => {
            Promise.resolve(item).then(res => {
                resolveList.push(res)
            }).catch(error => rejectList.push(error)).finally(_ => {
                if (resolveList.length + rejectList.length === len) {
                    let totalList = [...resolveList, ...rejectList]
                    let promisedList = totalList.map(item => Promise.resolve(item))
                    if (resolveList.length > 0) {
                        resolve(promisedList)
                    } else {
                        reject(promisedList)
                    }
                }
            })
        })


    })
}
// 
// first 只要有第一个完成就可以， 忽略后面的所有结果

// last 只要最后一个完成的结果

Promise.last = function (list) {
    let len = list
    let resolve = []
    let totalList = []
    return new Promise((resolve, reject) => {
        list.foreach(item => {
            Promise.resolve(item).then(res => {
                resolve.push(res)
                totalList.push(res)
            }).catch(error => {
                totalList.push(error)
            }).finally(_ => {
                if (totalList.length === len){
                    if (resolveList.length > 0) {
                        resolve(resolveList[resolveList.length - 1])
                    } else {
                        reject(totalList)
                    }
                }
            })
        })
    })
}
