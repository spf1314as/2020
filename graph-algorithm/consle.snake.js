// 二叉树 蛇形打印出结果

/**
 * 
 *  v left_v right_v             
 * 
 */
let tree = {
    v: 1,
    left: {
        v: 2,
        left: {
            v: 4,
            left: {
                v: 8
            },
            right: {
                v: 9
            }
        },
        right: {
            v: 5,
            left: {
                v: 10
            }
        }
    },
    right: {
        v: 3,
        left: {
            v: 6,
            left: {
                v: 11
            },
            right: {
                v: 12,
                right: {
                    v: 16,
                    left: {
                        v: 17
                    }
                }
            }

        },
        right: {
            v: 7,
            right: {
                v: 13,
                left: {
                    v: 14,
                    right: {
                        v: 15
                    }
                }
            }
        }
    }
}

function snakeData(root) {
    let list = [[root]]
    let result = []
    let len =  0
    while(len < list.length) {
        let item = list[len]
        let cellList = []
        item.forEach(cell => {
            result.push(cell.v)
            if (len > 1) {
                if (cell.right){
                    cellList.push(cell.right)
                }
                if (cell.left) {
                    cellList.push(cell.left)
                }

            } else {
                if (cell.left){
                    cellList.push(cell.left)
                }
                if (cell.right) {
                    cellList.push(cell.right)
                }
            }
        })
        if (cellList.length != 0) {
            if (len > 0) cellList.reverse()
            list.push(cellList)
        }
        len ++
    }
    console.log(result)
    
}
snakeData(tree)

