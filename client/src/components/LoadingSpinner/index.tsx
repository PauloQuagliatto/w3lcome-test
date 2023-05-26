import { Dispatch, SetStateAction } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { DialogOverlay } from '../../styles/defaults/DialogOverlay'
import { DialogContent, Spinner } from './styles'

type LoadingSpinnerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function LoadingSpinner({ isOpen, setIsOpen }: LoadingSpinnerProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <DialogOverlay onClick={() => { return }} />
        <DialogContent>
          <Spinner>
            <div />
            <div />
            <div />
            <div />
          </Spinner>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
