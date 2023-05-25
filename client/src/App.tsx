import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { TaskFormModal } from './components/TaskFormModal'
import { NewTaskButton } from './components/NewTaskButton'
import { TasksList } from './components/TasksList'
import { TaskListItem } from './components/TaskListItem'

import { api } from './services/api'

import { globalCss } from './styles'
import { Container } from './styles/defaults/Container'

import { Task } from './types'

const css = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box'
  },
  body: {
    backgroundColor: '$black500',
    'h1, h2, h3, h4, h5, h6, p, span, input, label, textarea': {
      fontFamily: 'Inter',
      color: '$white300'
    },
    button: {
      cursor: 'pointer'
    }
  }
})

export function App() {
  css()
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    async function getTasks() {
      const res = await api.get('tasks')
      setTasks(res.data.tasks)
    }

    getTasks()
  }, [])

  return (
    <Container>
      <Dialog.Root>
        <NewTaskButton onClick={() => setSelectedTask(undefined)} />
        <TaskFormModal task={selectedTask} />
        {tasks.length > 0 &&
          <TasksList>
            {tasks.map((task) => {
              return (
                <TaskListItem
                  key={task.id}
                  titulo={task.titulo}
                  concluido={task.concluido}
                />
              )
            })}
          </TasksList>
        }
      </Dialog.Root>
    </Container>
  )
}
