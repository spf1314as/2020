/**
 * find
 * inclues
 * indexOf
 * map(fn,)
 * forEach(fn)
 * 
 * 
 * 
 * 
 * 
 */

let list = [1]
list.map((item, index, array) => {
    return item * 2
} ) // => [2]



Array.prototype.mayMap = function (fn){
   let rawList = this
   let result = []
   for(let i = 0; i < rawList.length; i++ ) {
       let item = rawList[i]
       result.push(fn(item, i, rawList))
   }
   return result
}
 
({} )instanceof Object


function myInstanceof(child, parent) {
   let prototype = child.__proto__
   while(prototype) {
       if (prototype.constructor === parent) {
           return true
       } else {
           prototype = prototype.__proto__
       }
   }
   return false
}


/**
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 */


 function reverse1 (str) {
     let str2list = str.split(' ')
     let newList = []
     for (const item of str2list) {
         let cell = item.split('')
          newList.push(cell.reverse().join(''))
     }
     return newList.join(" ")   
 }

 function reverse2 (str) {
   let string = ''
   let cell = ''
  for(let i = 0 ; i < str.length; i++) {
      let item = str[i]
      if (item === ' ') {
          cell = cell + item
          string += cell
          cell = ''
      } else {
          cell = item + cell
      }
  }
  return string + cell
}
