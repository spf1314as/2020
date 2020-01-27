const p = Promise.resolve();

(async () => {await p; console.log("eng")})()

 p.then(_ => console.log(1)).then(_ => console.log(2))

 var a = 3;
 b = 3;
 a = 4;
 console.log(b);
 setTimeout(function () {
     console.log(this.a,'11')
 },0)

 // 3 eng 1  4 5 2 undefined 11


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
Promise.resolve().then(function () {
    console.log(a,'55')
})
new Go(10) // 3 eng 1  4 55 2 undefined 11 undefined 22 5 33 6 44

Go.apply({}, [30]) // undefined 22, 30 33, undefined 44

