import { useEffect, useState } from 'react'

import { TaskFormModal } from './components/TaskFormModal'
import { NewTaskButton } from './components/NewTaskButton'
import { TasksList } from './components/TasksList'
import { TaskListItem } from './components/TaskListItem'

import { api } from './services/api'

import { globalCss } from './styles'
import { Container } from './styles/defaults/Container'

import { Task } from './types'
import { LoadingSpinner } from './components/LoadingSpinner'

const css = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },
  body: {
    backgroundColor: '$black500',
    'h1, h2, h3, h4, h5, h6, p, span, input, label, textarea': {
      fontFamily: 'Roboto',
      color: '$white300'
    },
    button: {
      cursor: 'pointer'
    }
  }
})

export function App() {
  css()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined)
  const [tasks, setTasks] = useState<Task[]>([])

  async function getTasks() {
    setIsLoading(true)
    const res = await api.get('tasks')
    setTasks(res.data.tasks)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  useEffect(() => {
    getTasks()
  }, [])

  function openNewTaskForm() {
    setSelectedTask(undefined)
    setIsFormOpen(true)
  }

  function openUpdateTaskForm(task: Task) {
    setSelectedTask(task)
    setIsFormOpen(true)
  }

  async function handleDataChange(task: string | Task) {
    if (typeof task === 'string') {
      await api.post('tasks', {
        titulo: task
      })
    } else {
      await api.patch('tasks', {
        body: {
          task
        },
        params: { id: task.id }
      })

    }

    await getTasks()
    setIsFormOpen(false)
  }

  async function handleDeleteTask(id: number) {
    await api.delete('tasks', {
      params: { id }
    })

    getTasks()
  }

  return (
    <>
      <LoadingSpinner isOpen={isLoading} setIsOpen={setIsLoading} />
      <TaskFormModal
        task={selectedTask}
        isOpen={isFormOpen}
        setIsOpen={setIsFormOpen}
        handleDataChange={handleDataChange}
      />
      <Container>
        <NewTaskButton onClick={openNewTaskForm} />
        {tasks.length > 0 &&
          <TasksList>
            {tasks.map((task) => {
              return (
                <TaskListItem
                  key={task.id}
                  task={task}
                  handleDataChange={handleDataChange}
                  handleEditClick={() => openUpdateTaskForm(task)}
                  handleDeleteClick={() => handleDeleteTask(task.id)}
                />
              )
            })}
          </TasksList>
        }
      </Container>
    </>
  )
}
