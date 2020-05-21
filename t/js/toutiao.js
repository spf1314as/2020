console.log(1);
async function asyncfn1(){
    console.log(2);
    await asyncfn2();
    console.log(3);
};
setTimeout(() => {
    console.log('setTimeout')
}, 0)

async function asyncfn2(){
    console.log(4)
   return Promise.resolve().then(function() {
    console.log('promise1')
}).then(function() {
    console.log('promise2')
})
};

asyncfn1();
console.log(5);

let sayHello = (...str) => `Hello , ${str.join(" And ")}`;
let toUpper = str => str.toUpperCase();
let combin = 

    //           0
    //     1               2
    //  3      4      5         6
    //      7                8      9

(
  sayHello,
  toUpper
);
combin("jack", "bob"); // HELLO , JACK AND BOB

// const el = require('./element.js')
// const ul = el('ul', {id: 'list'}, [
//   el('li', {class: 'item'}, ['Item 1']),
//   el('li', {class: 'item'}, ['Item 2']),
//   el('li', {class: 'item'}, ['Item 3'])
// ])

// const ulRoot = ul.render();
// document.body.appendChild(ulRoot);

// <ul id='list'>
//   <li class='item'>Item 1</li>
//   <li class='item'>Item 2</li>
//   <li class='item'>Item 3</li>
// </ul>


