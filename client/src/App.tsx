import { useEffect, useState } from 'react'

import { useTasks } from './hooks/useTasks'

import { TaskFormModal } from './components/TaskFormModal'
import { NewTaskButton } from './components/NewTaskButton'
import { TasksList } from './components/TasksList'
import { TaskListItem } from './components/TaskListItem'


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
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined)
  const {
    tasks,
    getTasks,
    handleDataChange,
    handleDeleteTask,
    isLoading,
    setIsLoading
  } = useTasks()



  useEffect(() => {
    getTasks()
  }, [])

  async function handleFormAction(task: string | Task) {
    await handleDataChange(task)
    setIsFormOpen(false)
  }

  function openNewTaskForm() {
    setSelectedTask(undefined)
    setIsFormOpen(true)
  }

  function openUpdateTaskForm(task: Task) {
    setSelectedTask(task)
    setIsFormOpen(true)
  }


  return (
    <>
      <LoadingSpinner isOpen={isLoading} setIsOpen={setIsLoading} />
      <TaskFormModal
        task={selectedTask}
        isOpen={isFormOpen}
        setIsOpen={setIsFormOpen}
        handleDataChange={handleFormAction}
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
