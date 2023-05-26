import { updateTasks } from '../tasks'
import { Task } from '../types'

export class UpdateTaskService {
  execute(id: string, task: Task) {
    const numberId = Number(id)

    if (isNaN(numberId)) throw new Error('Not Possible')

    const tasks = updateTasks(numberId, task)

    return tasks
  }
}
