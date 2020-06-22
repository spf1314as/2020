var decodeString = function(s) {
    // 用两个栈来存放当前状态，前者是重复次数，后者是累积字符串
    let repetStack=[],resStack=[];
    //拼接字符串
    let resStr = "";
    //表示重复次数
    let repet = 0;
    // 遍历s
    for(let i=0;i<s.length;i++){
        let cur = s.charAt(i);
        if(cur == '['){
            //双双压入栈中,保存当前状态
            repetStack.push(repet);
            resStack.push(resStr);
            //置空，准备下面的累积
            repet = 0;
            resStr = "";
        }else if(cur == ']'){
            // 取出当前重复次数栈中的值，也就是当前字符串的重复次数
            let count = repetStack.pop();
            // 根据重复次数生成重复字符串，赋值给temp，和resStr拼接
            let temp = "";
            for(let i = 0;i<count;i++){
                temp += resStr;
            }
            // 和前面已经求得的字符串进行拼接
            resStr = resStack.pop() + temp;
        }else if(cur>='0' && cur<='9'){
            // repet累积
            repet = repet*10 + (cur-'0');
        }else{
            //字符累积
            resStr += cur;
        }
    }
    return resStr;
}