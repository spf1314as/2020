// 中序遍历
//对栈顶元素深度遍历左子树入栈，然后将栈顶添加到结果中，然后访问当前子节点的右子树，依次循环

function mid(root){
    if(root === null) return root;
    let res = [],stack = [];
    stack.push(root);
    while (stack.length){
        while(root != null){
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop()
        res.push(node.val);
        root = node.right;
    }
    //根节点添加了两次
    return res.slice(0,res.length-1);
}


let tree = {
    val: 0,
    left: {
        val: 1,
        left: {
            val: 1
        },
        right:{
            val: 9
        }
    },
    right:{
        val: 2,
        right: {
            val: 44
        },
        left: {
            val: 55,
            left: {
                val: 66,
                right: {
                    val: 77
                }
            }
        }

    }

}

function levelVisit(tree) {
    if (!tree) return tree
    let cur = 1;
    let next = 0;
    let temp = [] 
    let res = []
    let stack = [tree]

    while(stack.length > 0) {
        let root = stack.shift()
        temp.push(root.val)
        
        root.left && stack.push(root.left) && next ++
        root.right && stack.push(root.right) && next ++

        cur --
        if (!cur) {
            res.push(temp)
            cur = next;
            next = 0
            temp = []
        }

    }

    console.log(res)


}

// levelVisit(tree)




function levelVisitDouble(tree) {
    if (!tree) return tree
    let cur = 1;
    let next = 0;
    let temp = [] 
    let res = []
    let stack = [tree]
    let even = true

    while(stack.length > 0) {
        let root = stack.shift()

        if (even) {
            temp.push(root.val)
        } else {
            temp.unshift(root.val)
        }
        root.left && stack.push(root.left) && next ++
        root.right && stack.push(root.right) && next ++

        cur --

        if (!cur) {
            res.push(temp)
            cur = next;
            next = 0
            temp = []
            even = !even
        }

    }

    console.log(res)


}

// levelVisitDouble(tree)

// console.log(mid(tree))




function back(path) {
    if(condition === [])
    back(path.slice())
}

function walkTree(tree) {
    let res = []
    let temp = []
    let curr = 1
    let next = 0
    let stack = [tree]
    let isEven = true
    while(stack.length > 0) {
        let node = stack.shift()
        isEven ? temp.push(node.val) : temp.unshift(node.val)

        let {right, left} = node
        left && stack.push(left) && next++
        right && stack.push(right) && next++
        curr--
        if (!curr) {
            res.push(temp)
            temp = []
            curr = next
            next = 0
            isEven = !isEven
        }
    }
    return res
}

// console.log(walkTree(tree))

function snakConsole(tree) {
    let stack = [tree]
    let curr = 1
    let next = 0
    let res = []
    let temp = []
    let isEven = true
    while(stack.length > 0) {
        let node = stack.shift()
        
        isEven ? temp.push(node.val) : temp.unshift(node.val)

        node.left && stack.push(node.left) && next++
        node.right && stack.push(node.right) && next++
        curr --
        if(!curr) {
            res.push(temp)
            temp = []
            curr = next
            next = 0
            isEven = !isEven
        }
    }
    return res
}

console.log(snakConsole(tree))

function deep(tree) {
    if(!tree) return 0

    let left = deep(tree.left)
    let right = deep(tree.right)
    return Math.max(left, right) + 1
}

console.log(deep(tree))

function mid2 (root) {
    let res = []
    let stack = [root]
    while(stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        let node = stack.pop()
        res.push(node.val)
        root = node.right
    }
    return res.slice(0, -1)
}










