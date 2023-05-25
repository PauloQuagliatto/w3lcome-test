import { Request, Response } from 'express'

import { UpdateTaskService } from '../services/UpdateTaskService'

export class UpdateTaskController {
  handle(req: Request, res: Response) {
    const { task } = req.body

    const updateTaskService = new UpdateTaskService()

    const tasks = updateTaskService.execute(task)

    return res.json({
      tasks
    })
  }
}
