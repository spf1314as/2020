// abcddefafcd  => abcd defa afcd => abcd afcd

let str = 'abcddefafcd'

function pickLong(str) {
    let result = []
    let temp = []
    for (let i = 0; i< str.length; i++) {
        let item = str[i]
        let index = temp.indexOf(item)
        if (index === -1) {
            temp.push(item)
        } else {
            result.push([...temp])
            temp = [...temp.slice(index+1), item]
        }
    }
    console.log(result, temp)
}

pickLong(str)