console.log(1)
async function tes1 () {
    console.log(2)
    let res = 3
    console.log(res)
}
let p = new Promise(function (resolve, reject) {
    console.log(4)
    setTimeout(() => {
        resolve(5)
    }, 2*1000);
})
p.then(res => {
    console.log(res)
    return Promise.resolve(6)
}).then(res => {
    console.log(res)
})
setTimeout(() => {
    console.log(7)
    Promise.resolve(8).then(res => {
        console.log(9)
    }).then(res => console.log(10)).then(res => {
        setTimeout(() => {
            console.log(11)
        }, 0);
    })
}, 0);
tes1()