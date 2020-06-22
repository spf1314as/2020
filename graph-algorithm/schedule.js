class Scheduler {
    constructor(count) {
        this.count = count
        this.taskList = []
        this.quences = []
        this.run = false
    }
    add(task) {
        return new Promise((resolve) => {
            this.taskList.push(function() {
                return resolve(task)
            })
            if(this.quences.length < this.count) {
                this.quences.push(this.taskList.shift())
            }
            if (!this.run) {
                this.schedule()
            }
        })
    }
    schedule() {
        this.run = true
        this.quences.forEach(fn => {
            Promise.resolve(fn()).then(result =>{
                let index = this.quences.findIndex(item => item ===fn)
                if (index > -1) {
                    this.quences.splice(index, 1)
                    this.quences.push(this.taskList.shift())
                }
                if(this.taskList.length + this.quences.length === 0) {
                    this.run = false
                }
                return result
            })
        })
    }
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

class Schedule{
    constructor(count) {
        this.count = count
        this.taskList = []
        this.quences = []
        this.runing = false
        this.runCount = 0
    }
}

function add (task) {

    return new Promise(resolve => {
        this.task.push(function() {
            return resolve(task())
        })
        if(this.quences.length < this.count) {
            this.quences.push(this.task.shift())
        }
       !this.runing && schedule()
    })
}

function schedule() {
    this.quences.forEach(fn => {
        run(fn)
    })

    function run (fn) {
        this.runing = true
        this.runCount ++
       return fn().then(res => {
            this.runCount--
            if (this.runCount < this.count) {
                let next = this.taskList.shift()
                if (!next) this.runing = false
                return run(next)
            }else {
                return undefined
            }
        })
    }

}