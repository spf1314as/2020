function Test (num2, num1 = {}, {x=4, y=5} = {}) {
    console.log(num1)
    console.log(x,y)
}
Test(1,0)
console.log(Test.length)
console.log(Test.name)