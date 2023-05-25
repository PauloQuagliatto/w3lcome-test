import { getTasks, pushToTasks } from '../tasks'

export class CreateTaskService {
  execute(titulo: string) {
    const tasks = getTasks()

    const task = {
      id: tasks.length + 1,
      titulo,
      concluida: false
    }

    pushToTasks(task)

    return task
  }
}
