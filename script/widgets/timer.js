import { v4 as uuid } from 'uuid'

export { tsk } 

class Task {
    constructor(title, description, startTime, endTime) {
        this.id = new uuid()
        this.title = title
        this.description = description
        this.startTime = startTime
        this.endTime = endTime
    }
}

const tsk = new Task()

