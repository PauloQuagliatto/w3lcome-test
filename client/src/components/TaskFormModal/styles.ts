import * as Dialog from '@radix-ui/react-dialog'

import { keyframes, styled } from '../../styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50 %, -48 %) scale(0.96)'
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50 %, -50 %) scale(1)'
  }
})


export const DialogOverlay = styled(Dialog.DialogOverlay, {
  backgroundColor: '$overlayColor',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$black300',
  borderRadius: '6px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  animation: `${contentShow} 150ms cubic - bezier(0.16, 1, 0.3, 1)`
})

export const DialogCloseButton = styled('button', {
  position: 'absolute',
  top: '10px',
  right: '10px',
  height: '25px',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  color: '$red300',
  border: 'none',
  borderRadius: '100%',
})

export const Form = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '8px'
})

export const Fieldset = styled('fieldset', {
  width: '100%',
  border: 'none'
})

export const Input = styled('input', {
  width: '100%',
  padding: '4px 8px',
  backgroundColor: '$black200',
  border: '1px solid transparent',
  borderRadius: '6px',
  '&:focus': {
    outline: 'none',
    border: '1px solid $yellow300'
  }
})
