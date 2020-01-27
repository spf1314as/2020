function Go(a) {
    this.a = a;
   var a = 6;
    setTimeout(function () {
        console.log(this.a , '22')
        
    },2000)
    setTimeout(() => {
        console.log(this.a,'33')
    },3000)
    setTimeout(function () {
        console.log(a,'44')
    },4000)
}

new Go(10) // undefined 22, 10 33, undefined 44
Go() // undefined 22, undefined 33, undefied 44
Go.apply({}, [30]) // undefined 22, 30 33, undefined 44
