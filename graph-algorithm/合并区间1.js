// 输入: [[1,3],[2,6],[8,10],[5,9]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]

let list = [[1,3],[0,6],[9, 16],[5,10]]
function merge(list) {
    var aRes = [];
       for(var i = 0;i<list.length-1;i++){
           
           var imin = Math.min(list[i][0],list[i][1]);
           var imax = Math.max(list[i][0],list[i][1]);
           var jmin = Math.min(list[i+1][0],list[i+1][1]);
           var jmax = Math.max(list[i+1][0],list[i+1][1]);
           if(! (Math.max(list[i][0],list[i][1]) < Math.min(list[i+1][0],list[i+1][1]))){
               list[i] =[Math.min(imin,jmin),Math.max(imax,jmax)];
               list.splice(i,1)
              
           }
       }
       return list;
    }


// console.log(merge(list))


function getMerge(list){
    let newList = list.sort((a, b) => {
       return a[1] - b[1]
    })
    let res = [newList[0]]
    for(let i = 1; i< newList.length; i++ ) {
        let [min, max] = list[i]
        
        let index = res.findIndex(item => {
            return item[1] >= min
        })
        if (index > -1) {
            let [tempMin, tempMax]= res[index]
            res[index] = [Math.min(tempMin, min), Math.max(tempMax, max)]
        } else {
            res.push(newList[i])
        }
    }
    return res


}
console.log(getMerge(list))