/**
 * router
 * 1. 订阅发布
 * 2. url的参数处理
 * 3. history api
 * 4. 利用闭包，取消订阅
 * 5. 
 * 
 */
// /path/:name/:year => {regexp: new Regexp(), params: [name, year]} /\/path\/\w+\/\w+/
function parse(path) {
    if (!path.includes(':')) {
        return path
    } else {
        let result = {
            regexp: null,
            params: []
        }
        let w =  "(\\w+)"
        let pathList = path.split('/')
        let replacedList = pathList.map(item => {
            if (~item.indexOf(':')) {
                result.params.push(item.replace(/^:(\w+)$/i, '$1'))
                return w
            }else {
                return item
            }
        })
        let replacedStr = '^' + replacedList.join('\/') + '$' // \/path\/\\w+\/\\w+
        result.regexp = new RegExp(replacedStr, 'i')
        return result
    }  
}
function matched(url, parsed) {
    let matched = url.match(parsed.regexp)
    if (matched) {
        let parmasObj = {}
        for (let i = 1 ; i < matched.length; i++) {
            parmasObj[parsed.params[i-1]] = matched[i]
        }
        return parmasObj
    } else {
        return null
    }
}

let path = '/path/:name/:year'
let parsed = parse(path)
let url = '/path/age/1'

class Router {
    static parse(path) {
        if (!path.includes(':')) {
            return path
        } else {
            let result = {
                regexp: null,
                params: []
            }
            let w =  "(\\w+)"
            let pathList = path.split('/')
            let replacedList = pathList.map(item => {
                if (~item.indexOf(':')) {
                    result.params.push(item.replace(/^:(\w+)$/i, '$1'))
                    return w
                }else {
                    return item
                }
            })
            let replacedStr = '^' + replacedList.join('\/') + '$'
            result.regexp = new RegExp(replacedStr, 'i')
            return result
        }  
    }
    static matched (url, parsed) {
        let matched = url.match(parsed.regexp)
        if (!!matched) {
            let parmasObj = {}
            for (let i = 1 ; i < matched.length; i++) {
                parmasObj[parsed.params[i-1]] = matched[i]
            }
            return parmasObj
        } else {
            return null
        }
    }
}


