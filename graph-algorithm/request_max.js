
/**
 * 
 * @param {string[]} urls 请求的地址参数
 * @param {nubmer} max 同时请求的最大数量
 * @param {function} callback 回调函数
 */

function requestMax(urls = [], max=2, callback) {
    let len = urls.length
    if (max >= len) {
        Promise.all(urls.map(item => fetch(item).then(res => res.json()))).then((...res) => {
            callback(res)
        })
    } else {
        let resList = []
        let index = max
        for (let item of urls.slice(0, max)) {
           recursiveFetch(item)
        }
        urls.slice(0, max).forEach(item => {
            asyncFetch(item)
        })
        function recursiveFetch (url) {
            fetch(url).then(res => res.json()).then(res => resList.push(res)).finally(_ => {
                if (resList.length === len){
                    callback(resList)
                } else {
                   recursiveFetch(urls[index])
                   index++
                }
            })
        }
        async function asyncFetch (url) {
           let res = await fetch(url).then(res => res.json())
            resList.push(res)
            if (resList.length === len) {
                callback(resList)
            } else {
                asyncFetch(urls[index++])
            }
        }
    }
    
}


function requestMax(urls = [], max=2, callback) {
    let len = urls.length
    if (max >= len) {
        Promise.all(urls.map(item => fetch(item).then(res => res.json()))).then((...res) => {
            callback(res)
        })
    } else {
        let resList = []
        let index = max
        for (let item of urls.slice(0, max)) {
           recursiveFetch(item)
        }
        urls.slice(0, max).forEach(item => {
            asyncFetch(item)
        })
        function recursiveFetch (url) {
            fetch(url).then(res => res.json()).then(res => resList.push(res)).finally(_ => {
                if (resList.length === len){
                    callback(resList)
                } else {
                   recursiveFetch(urls[index])
                   index++
                }
            })
        }
        async function asyncFetch (url) {
           let res = await fetch(url).then(res => res.json())
            resList.push(res)
            if (resList.length === len) {
                callback(resList)
            } else {
                asyncFetch(urls[index++])
            }
        }
    }
    
}
