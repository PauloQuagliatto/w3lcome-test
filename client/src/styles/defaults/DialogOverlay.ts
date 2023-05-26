import { Overlay } from '@radix-ui/react-dialog'

import { keyframes, styled } from '..'


const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

export const DialogOverlay = styled(Overlay, {
  backgroundColor: '$overlayColor',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})
