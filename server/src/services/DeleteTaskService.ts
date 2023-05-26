import { filterFromTasks } from '../tasks'

export class DeleteTaskService {
  execute(id: string) {
    const numberId = Number(id)

    if (isNaN(numberId)) throw new Error('Not Possible')

    const tasks = filterFromTasks(numberId)

    return tasks
  }
}
