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
