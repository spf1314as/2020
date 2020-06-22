let arr = [
    {id: 1, parent: null},
    {id: 2, parent: 4},
    {id: 4, parent: 1},
    {id: 3, parent: 2},
    {id: 8, parent: 2},
    {id: 9, parent: 4},
    {id: 10, parent: 3}
]

function generationTree(list){
    let obj = {}
    let root = list.find(obj => obj.parent === null)
    obj.id = root.id
    obj.children = []
    function findChild(root) {
        for(let node of list) {
            if (node.parent === root.id) {
                root.children.push(findChild({id: node.id, children: []}))
            }
        }
        return root
    }
    findChild(obj)
    return obj
}

let result = generationTree(arr)

function reverseTree(tree) {
    let res = []
    
    function genChildren(obj, parent) {
        for(let key in obj) {
            if (key === 'children') {
                obj.children.parent = obj.id
                for(let child of obj.children) {
                    genChildren(child, obj.children.parent)
                }
                
            }else {
                res.push({
                    id: obj.id,
                    parent: parent ? parent : null
                })
            }

        }
    }
    genChildren(tree, null)
    return res
}
console.log(reverseTree(result))

