import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  DialogContent,
  DialogCloseButton,
  DialogOverlay,
  Fieldset,
  Form,
  Input,
} from './styles'

type Task = {
  id: number,
  titulo: string,
}
type TaskFormModalProps = {
  task?: Task
}

export function TaskFormModal({ task }: TaskFormModalProps) {
  console.log(task)
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title className="DialogTitle">Criar tarefa</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Crie uma nova tarefa
        </Dialog.Description>
        <Form>
          <Fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Titulo:
            </label>
            <Input id="titulo" defaultValue="Titulo da tarefa" />
          </Fieldset>
          <Dialog.Close asChild>
            <button type='submit'>Save changes</button>
          </Dialog.Close>
        </Form>
        <Dialog.Close asChild>
          <DialogCloseButton type='button' aria-label="Close">
            <X size={20} />
          </DialogCloseButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  )
}
