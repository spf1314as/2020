 // resolve relative path
 function resolve(base, relative) {
  let stack = base.replace(/^\/|\/$/g,'').split('/')
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }
  return stack.join('/')
 }

 let path = "/././path/name"
 console.log(resolve('/base/', path))



 //  ... 