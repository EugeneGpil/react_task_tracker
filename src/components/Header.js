import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ isAddTaskButtonVisible, onToggleIsAddTaskButtonVisible }) => {

  const location = useLocation()

  return (
    <header className = 'header'>
      <h1>Task tracker</h1>
      {location.pathname === '/' && <Button
        color = {isAddTaskButtonVisible ? 'red' : 'green'}
        text = {isAddTaskButtonVisible ? 'Close' : 'Add'}
        onClick = {onToggleIsAddTaskButtonVisible}
      />}
    </header>
  )
}

export default Header
