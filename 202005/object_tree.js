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
function getData(data, str) {
   

    let newObj = {}
    function formateObj (data, rawKey = []) {
        for (let key in data) {
            let keys = [...rawKey]
            keys.push(key)
            if (typeof data[key] === 'string') {
                newObj[data[key]] = keys
            } else {
                formateObj(data[key], keys)
            }
        }
    }

    formateObj(data)

    return newObj[str].join()

}
console.log(getData(data, 'str1'))