import { styled } from '../../styles'

export const PlusButton = styled('button', {
  width: '32px',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$green300',
  color: '$white200',
  border: 'none',
  borderRadius: '6px',
  transition: '0.2s ease',
  '&:hover': {
    width: '40px',
    height: '40px'
  }
})
