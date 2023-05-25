import { getTasks } from '../tasks'

export class GetTasksService {
  execute() {
    return getTasks()
  }
}
