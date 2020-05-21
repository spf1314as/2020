// tree
/**
 * function TreeNode (val) {
 *  this.val = val
 *  this.left = this.right = null
 * 
 * }
 */

 let tree = {val: 111, left: 1, right: {val: 21, right: 22, left: {val: 33, left: 444, right: 555}}}

 function handleNode(item, fn, result) {
    if (typeof item == 'object') {
        fn(item, result)
    } else {
        result.push(item)
    }
 }
// DFS 深度优先 先序遍历
// 111 1 21 33 444 555 22
function DFS_treeNode_val(node, result = []) {
    result.push(node.val)
    handleNode(node.left, DFS_treeNode_val, result)
    handleNode(node.right, DFS_treeNode_val, result)
    return result
    
}
// 中序遍历
function DFS_treeNode_left(node, result = []) {
    handleNode(node.left, DFS_treeNode_left, result)
    result.push(node.val)
    handleNode(node.right, DFS_treeNode_left, result)
    return result
    
}

function DFS_treeNode_right(node, result = []) {
    handleNode(node.left, DFS_treeNode_right, result)
    handleNode(node.right, DFS_treeNode_right, result)
    result.push(node.val)
    return result
    
}
var preorderTraversal = function(root) {    
    var res = [], stack = [root], tmpNode = null;   
    while(stack.length !== 0){        
        tmpNode = stack.pop()        
        if(tmpNode){            
            res.push(tmpNode.val)            
            stack.push(tmpNode.right)            
            stack.push(tmpNode.left)        
        }    
    }    
    return res
};
const inorderTraversal = (root) => {    
    let curr = root,  res = [], stack = [];    
    while (curr || stack.length) {       
        while (curr) {            
            stack.push(curr);            
            curr = curr.left;        
        }        
        curr = stack.pop();        
        res.push(curr.val);     
        curr = curr.right;   
     }    
    return res;
};
console.log(DFS_treeNode_val(tree))
console.log(inorderTraversal(tree))

// BFS 广度优先

function BFS_node(node, result = []) {
    let list = [node]
    while(list.length) {
        let item = list.shift()
        if (typeof item === 'object') {
            result.push(item.val)
            item.left && list.push(item.left)
            item.right && list.push(item.right)
        } else {
            result.push(item)
        }
       
    }
    return result
}
console.log(BFS_node(tree))

var levelOrder = function(root) {    
    var res = [], queue = [root], tmp = []   
     while(root && queue.length){        
        tmp = queue        
        queue = []        
        res.push(tmp.map(tmpNode => {            
            tmpNode.left && queue.push(tmpNode.left)            
            tmpNode.right && queue.push(tmpNode.right)           
            return tmpNode.val        
        }))    
    }    
    return res
};