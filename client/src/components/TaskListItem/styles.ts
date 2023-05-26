import { styled } from '../../styles'

export const TaskListItemContainer = styled('li', {
  width: '100%',
  padding: '8px 4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '$black300',
  border: '1.5px solid transparent',
  borderRadius: '6px',
  '&:not(:last-child)': {
    marginBottom: '12px'
  },
  '&:hover': {
    border: '1.5px solid $black200',
  },
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
})

export const CheckButton = styled('input', {
  width: '20px',
  height: '20px',
})

const Button = styled('button' ,{
  marginLeft: '6px',
  padding: '8px',
  border: 'none',
  borderRadius: '6px',
  color: '$white200'
})

export const EditButton = styled(Button, {
  backgroundColor: '$black200',
})

export const DeleteButton = styled(Button, {
  backgroundColor: '$red300',
})
