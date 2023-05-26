import { ButtonHTMLAttributes } from 'react'
import { Plus } from 'phosphor-react'

import { PlusButton } from './styles'


export function NewTaskButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <PlusButton {...props} >
      <Plus />
    </PlusButton>
  )
}
