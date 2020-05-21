let tree = {
    name: 'root',
    left: {
        name: 111,
        left: {

        },
        right: {

        }
    },
    right: {

    }
}

/**
 *          1
 *      2         3    // 1237654
 * 4        5   6   7
 * 
 * 
 * 
 * 
 */

 let first = 'left'
 let secode = 'right'
function traveTree(tree, first = 'left', init = []) {
    for (const key in tree) {
       init.push(tree.name)
       if (tree[first]) {
          init.push(tree[first])
       } else {
           init.push(tree[secode])
       }
    }


    
}