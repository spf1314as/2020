/*var getData = {
    key1:'str1',
    key2: 'str2',
    key3:{
        key4:'str3'
    },
    key5:{
        key6:{
            key7:'str4'
        },
        key8: 'str5'
    }
        ...
}
getData(data,'str1')  key1
getData(data,'str2')  key2
getData(data,'str3')  key3 key4
getData(data,'str4')  key5 key6 key7
.....

*/

function getData(data,str){
    let newData = {}
    function isObject (params) {
        return !!params && typeof params === 'object'
    }
    function recursion(obj, keys) {
        
        for (let key in obj) {
            let forKeys = keys ? [...keys, key] : [key]
            if (isObject(obj[key])) {
                recursion(obj[key], forKeys)
            } else {
                newData[obj[key]] = forKeys
            }   
        }
    }
    recursion(data)
    console.log(newData)
    return newData[str] + ''
}

var data = {
    key1:'str1',
    key2: 'str2',
    key3:{
        key4:'str3'
    },
    key5:{
        key6:{
            key7:'str4'
        },
        key8: 'str5'
    }
}
console.log(getData(data, 'str3'))