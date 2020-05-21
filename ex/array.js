let obj =  {
    o: []
}
let value = []
Object.defineProperty(obj, 'o', {
    get () {
        return value
    },
    set (v) {
        console.log(v, 'v')

    }
})

console.log(obj.o)
obj.o[9] =  111
console.log(obj.o)