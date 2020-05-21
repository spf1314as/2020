let str = [1, 3]
str.name = 'str'
for (const iterator of str.entries()) {
    console.log(iterator)
    
}
for (const iterator of str.keys()) {
    console.log(iterator)
    
}
for (const key in str) {
    if (str.hasOwnProperty(key)) {
       console.log(key, 'key')
        
    }
}