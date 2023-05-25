import { Router } from 'express'

import { GetTasksController } from '../controllers/GetTasksController'
import { CreateTaskController } from '../controllers/CreateTaskController'
import { UpdateTaskController } from '../controllers/UpdateTaskController'
import { DeleteTaskController } from '../controllers/DeleteTaskController'

const getTasksController = new GetTasksController()
const createTaskController = new CreateTaskController()
const updateTaskController = new UpdateTaskController()
const deleteTaskController = new DeleteTaskController()

const router = Router()

router.get('/tasks', getTasksController.handle)
router.post('/tasks', createTaskController.handle)
router.patch('/tasks', updateTaskController.handle)
router.delete('/tasks', deleteTaskController.handle)

export { router }
