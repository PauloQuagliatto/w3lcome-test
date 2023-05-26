import { useState } from 'react'

import { api } from '../services/api'

import { Task } from '../types'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function getTasks() {
    setIsLoading(true)

    const res = await api.get('tasks')

    setTasks(res.data.tasks)

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  async function handleDataChange(task: string | Task) {
    if (typeof task === 'string') {
      await api.post('tasks', {
        titulo: task
      })
    } else {
      await api.patch(`tasks/${task.id}`, {
        task
      })

    }

    await getTasks()
  }


  async function handleDeleteTask(id: number) {
    await api.delete(`tasks/${id}`)

    getTasks()
  }

  return {
    tasks,
    setTasks,
    getTasks,
    handleDataChange,
    handleDeleteTask,
    isLoading,
    setIsLoading
  }
}
