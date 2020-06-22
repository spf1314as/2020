// let path = '/a/b/c/../././f'


let path = '/a/b/f'

function resolve(path) {
    let newPath = path.replace(/^\/|\/$/, '')
    let list = newPath.split('/')
    let result = []
    for (let item of list) {
        if (item === '..') {
            result.pop()
        }else if (item !== '.') {
            result.push(item)
            
        }
    }
    return result.join('/')
}

console.log(resolve(path))