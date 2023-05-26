import { Pen, Trash } from 'phosphor-react'

import {
  ButtonsContainer,
  CheckButton,
  DeleteButton,
  EditButton,
  TaskListItemContainer
} from './styles'
import { Task } from '../../types'

type TaskListItemProps = {
  task: Task
  handleDataChange: (task: Task) => void
  handleEditClick: () => void
  handleDeleteClick: () => void
}

export function TaskListItem({ task, handleDataChange, handleEditClick, handleDeleteClick }: TaskListItemProps) {
  const { titulo, concluida } = task

  function handleChange(isFinished: boolean) {
    handleDataChange({ id: task.id, titulo, concluida: isFinished })
  }

  return (
    <TaskListItemContainer>
      <h2>{titulo}</h2>
      <ButtonsContainer>
        <CheckButton
          type='checkbox'
          checked={concluida}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <EditButton onClick={handleEditClick}>
          <Pen size={24} />
        </EditButton>
        <DeleteButton onClick={handleDeleteClick}>
          <Trash size={24} />
        </DeleteButton>
      </ButtonsContainer>
    </TaskListItemContainer>
  )
}
