import { Request, Response } from 'express'

import { DeleteTaskService } from '../services/DeleteTaskService'

export class DeleteTaskController {
  handle(req: Request, res: Response) {
    const { id } = req.body

    const deleteTaskService = new DeleteTaskService()

    const tasks = deleteTaskService.execute(id)

    return res.json({
      tasks
    })
  }
}
