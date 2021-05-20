import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ isAddTaskVisible, onToggleIsAddTaskVisible }) => {

  const location = useLocation()

  return (
    <header className = 'header'>
      <h1>Task tracker</h1>
      {location.pathname === '/' && <Button
        color = {isAddTaskVisible ? 'red' : 'green'}
        text = {isAddTaskVisible ? 'Close' : 'Add'}
        onClick = {onToggleIsAddTaskVisible}
      />}
    </header>
  )
}

export default Header
