let search = 'name=1111&age=444&age=555'

function getQuery(query) {
    let regexp = new RegExp('(^|&)' + query + '=([^&]*)(&|$)', 'i')
    
    let res = search.match(regexp)
    if (res) {
        console.log(res)
        return res[2]
    }
    return ''
}

// console.log(getQuery('age'))

function replace() {
    let str = 'https://www.baidu.com'
    return str.replace(/^https/, function(match, index, input) {
        console.log(arguments)
        return 'http'
    })
}
console.log(replace())

let regexp = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')