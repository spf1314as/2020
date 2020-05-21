let sayHello = (...str) => `Hello , ${str.join(" And ")}`;
let toUpper = str => str.toUpperCase();
let combin = content(
  sayHello,
  toUpper
);
combin("jack", "bob"); // HELLO , JACK AND BOB

function content (...res) {
    let fnList = res.reverse()
    return function (...args) {
        let result = ''
        for (let item of fnList) {
            if (item.length !== 1) {
              let toArray = Array.isArray(result) ? result : [result]
              result = item.apply(this, result ? toArray : args)
            } else if (item.length === 1) {
                for (let arg of args) {
                   let fnRest = item.call(this, arg)
                   result  = Array.isArray(result) ? result.concat(fnRest) : [fnRest]
                }
            }
        }
        return result
    }

}