import { Request, Response } from 'express'

import { CreateTaskService } from '../services/CreateTaskService'

export class CreateTaskController {
  handle(req: Request, res: Response) {
    const { titulo } = req.body

    const createTaskService = new CreateTaskService()

    const newTask = createTaskService.execute(titulo)

    return res.json({
      newTask
    })
  }
}
