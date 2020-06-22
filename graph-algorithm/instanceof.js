// console.log(([]) instanceof Object)

function instanceof1 (child, parent) {
    let prototype = parent.prototype
    let childPrototype = child.__proto__

    while(childPrototype) {
        if(childPrototype === prototype) return true
        childPrototype = childPrototype.__proto__
    }
    return false
}

console.log(instanceof1('', Object))