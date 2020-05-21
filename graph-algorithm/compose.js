let add = num => num + 10
let double = num => num * 2
let foo = compose(double, add)
// foo(5) // 30
let sayHello = (...str) => `Hello , ${str.join(" And ")}`;
let toUpper = str => str.toUpperCase()
let combin = compose(sayHello, toUpper)
// combin("jack", "bob"); // HELLO , JACK AND BOB

function compose (...funcs) {
    if (funcs.length === 0) return arg => arg
    if (funcs.length === 1) return funcs[0]
    return funcs.reduce(function (a, b) {
        return (...args) => a(b(...args))
    })
}
console.log(foo(5))
console.log(combin("jack", "bob"))