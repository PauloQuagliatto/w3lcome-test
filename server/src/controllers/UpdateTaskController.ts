import { Request, Response } from 'express'

import { UpdateTaskService } from '../services/UpdateTaskService'

export class UpdateTaskController {
  handle(req: Request, res: Response) {
    const { id } = req.params
    const { task } = req.body

    const updateTaskService = new UpdateTaskService()

    const tasks = updateTaskService.execute(id, task)

    return res.json({
      tasks
    })
  }
}
