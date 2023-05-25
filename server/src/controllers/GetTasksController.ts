import { Request, Response } from 'express'

import { GetTasksService } from '../services/GetTasksService'

export class GetTasksController {
  handle(req: Request, res: Response) {
    const getTasksService = new GetTasksService()

    const tasks = getTasksService.execute()

    return res.json({
      tasks
    })
  }
}
