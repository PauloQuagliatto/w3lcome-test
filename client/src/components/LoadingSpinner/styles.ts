import { Content } from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../styles'

const ldsRing = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

export const DialogContent = styled(Content, {
  borderRadius: '6px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Spinner = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
  'div': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '64px',
    height: '64px',
    margin: '8px',
    border: '8px solid #fff',
    borderRadius: '50%',
    animation: `${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderColor: '#fff transparent transparent transparent',
    '&:nth-child(1)': {
      animationDelay: '-0.45s'
    },
    '&:nth-child(2)': {
      animationDelay: '-0.3s'
    },
    '&:nth-child(3)': {
      animationDelay: '-0.15s'
    },
  }
})

