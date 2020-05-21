//单链表

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.length = 0
    }
    createNode (ele) {
        return {element: ele, next: null}
    }
    append (ele) {
        let node = new Node(ele)
        if (this.head) {
            let p = this.head
            while(p.next) {
                p = p.next
            }
            p.next = node
        } else {
            this.head = node
        }
        this.length ++
        return this
    }
    search (ele) {
        let temp = this.head || {}
        while(temp.element != ele && temp.next ) {
            temp = temp.next
        } 
        if (temp.element == ele) return temp
        return !!temp.next
    }
    insert (ele, preNode) {
        let node = new Node(ele)
       let pre =  this.search(preNode)
       if (pre) {
           let next = preNode.next
           preNode.next = node
           node.next = next
           this.length ++
       } else {
           this.append(ele)
       }
       return this

    }

}






//   let list = new List()
//   for(let i = 0; i < 5; i+=1) {
//     list.append(i)
//   }
//   console.log(list)
//   console.log(list.search(5))
// 双链表

class DoubleList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = null
    }
    createNode (ele) {
        return {
            ele,
            preNode: null,
            nextNode: null
        }
    }





}