import { ReactNode } from 'react'
import { TasksListContainer } from './styles'

type TasksListProps = {
  children: ReactNode
}

export function TasksList({ children }: TasksListProps) {
  return (
    <TasksListContainer>
      {children}
    </TasksListContainer>
  )
}
