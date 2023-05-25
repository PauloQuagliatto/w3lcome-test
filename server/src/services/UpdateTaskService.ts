import { updateTasks } from '../tasks'
import { Task } from '../types'

export class UpdateTaskService {
  execute(task: Task) {
    const tasks = updateTasks(task)

    return tasks
  }
}
