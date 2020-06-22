class Scheduler {
    constructor(count) {
        this.count = count
    }
    add(task) {}
    schedule() {}
}

// Usage
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler(2)

const addTask = (time, order) => {

  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')


// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4


class Scheduler1{
    constructor(count) {
        this.count = count
        this.task = []
        this.todo = []
        this.run = false
    }

    add (task) {
    
       if(this.todo.length < this.count) {
           this.todo.push(task)
       } else {
           this.task(task)
       }
       if (!this.run) {
           this.run = true
           this.schedule()
       }
    }
    schedule () {
        this.todo.forEach(fn => {
            fn.finaly(_ => {
                this.todo.shift()
                if (this.todo.length < this.count) {
                    let next = this.task.shift()
                    next && this.todo.push(next)
                }
            })

       })
    }



}