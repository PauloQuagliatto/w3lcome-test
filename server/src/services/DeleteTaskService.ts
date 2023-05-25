import { filterFromTasks } from '../tasks'

export class DeleteTaskService {
  execute(id: number) {
    const tasks = filterFromTasks(id)

    return tasks
  }
}
