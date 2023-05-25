import { ButtonHTMLAttributes } from 'react'
import { Plus } from 'phosphor-react'

import { DialogTrigger } from '../../styles/defaults/DialogTrigger'
import { PlusButton } from './styles'


export function NewTaskButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <DialogTrigger asChild>
      <PlusButton {...props} ><Plus /></PlusButton>
    </DialogTrigger>
  )
}
