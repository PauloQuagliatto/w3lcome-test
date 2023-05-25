import { Pen } from 'phosphor-react'
import { DialogTrigger } from '../../styles/defaults/DialogTrigger'
import { TaskListItemContainer } from './styles'

type TaskListItemProps = {
  titulo: string
  concluido: boolean
}

export function TaskListItem({ titulo, concluido }: TaskListItemProps) {
  return (
    <TaskListItemContainer>
      <h2>{titulo}</h2>
      <div>
        <input type='checkbox' checked={concluido} />
        <DialogTrigger asChild>
          <button>
            <Pen />
          </button>
        </DialogTrigger>
      </div>
    </TaskListItemContainer>
  )
}
