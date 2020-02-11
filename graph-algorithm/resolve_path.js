 // resolve relative path
 const segments = relative.replace(/^\//, '').split('/')
 for (let i = 0; i < segments.length; i++) {
   const segment = segments[i]
   if (segment === '..') {
     stack.pop()
   } else if (segment !== '.') {
     stack.push(segment)
   }
 }