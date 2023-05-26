import { Dispatch, SetStateAction, useEffect, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { DialogOverlay } from '../../styles/defaults/DialogOverlay'

import {
  DialogContent,
  DialogCloseButton,
  Fieldset,
  Form,
  Input,
} from './styles'
import { Task } from '../../types'

const validationSchema = z.object({
  titulo: z.string().min(1, { message: 'Deve haver um titulo para a tarefa' })
})

type ValidationSchema = z.infer<typeof validationSchema>

type TaskFormModalProps = {
  task?: Task
  handleDataChange: (task: string | Task) => void
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function TaskFormModal({ task, isOpen, setIsOpen, handleDataChange }: TaskFormModalProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: useMemo(() => {
      return { titulo: task ? task.titulo : '' }
    }, [task])
  })

  useEffect(() => {
    if (task) {
      reset({ titulo: task.titulo })
    } else {
      reset({ titulo: '' })
    }
  }, [task, reset])

  const submitForm: SubmitHandler<ValidationSchema> = async (data) => {
    if (!errors.titulo) {
      if (task) {
        handleDataChange({ ...task, titulo: data.titulo })
      } else {
        handleDataChange(data.titulo)
      }
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <Dialog.Title>Criar tarefa</Dialog.Title>
          <Dialog.Description>
            Crie uma nova tarefa
          </Dialog.Description>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Fieldset>
              <label htmlFor="titulo">
                Titulo:
              </label>
              <Input
                id='titulo'
                placeholder='Titulo da tarefa'
                {...register('titulo')}
                css={{
                  border: errors.titulo && '1.5px solid $red300',
                  '&:focus': {
                    border: errors.titulo && '1.5px solid $red300',
                  }
                }}
              />
            </Fieldset>
            <button type='submit'>
              {
                task ?
                  'Atualizar Tarefa' :
                  'Criar Tarefa'
              }</button>
          </Form>
          <DialogCloseButton
            onClick={() => setIsOpen(false)}
            type='button'
            aria-label="Close"
          >
            <X size={20} />
          </DialogCloseButton>
        </DialogContent>
      </Dialog.Portal >
    </Dialog.Root>
  )
}
