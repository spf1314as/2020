let str = '444eeee'
str.replace(/\d+(\w+)/, function(...res) {
    console.log(res)
    return 'test'
})
"undefinedeeee"