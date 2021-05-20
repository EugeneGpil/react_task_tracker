import { useState, useEffect } from 'react'
import taskState from './assets/state/taskState'
import isAddTaskVisibleState from './assets/state/isAddTaskVisibleState'
import Root from './components/Root'

function App() {

  useEffect(() => {
    taskState.setTasks = setTasks
    isAddTaskVisibleState.setIsAddTaskVisible = setIsAddTaskVisible
    taskState.fetchTasks()
  }, [])

  //tasks
  const [tasks, setTasks] = useState(taskState.default)
  // Delete task
  const deleteTask = id => {
    taskState.deleteTask(tasks, id)
  }
  // Toggle reminder
  const toggleReminder = id => {
    taskState.toggleReminder(tasks, id)
  }
  // Add task
  const addTask = task => {
    taskState.addTask(tasks, task)
  }

  // add task button
  const [isAddTaskVisible, setIsAddTaskVisible] = useState(isAddTaskVisibleState.default)
  // toggle is add task visible
  const toggleIsAddTaskVisible = () => {
    isAddTaskVisibleState.toggleIsAddTaskVisible(isAddTaskVisible)
  }
  return <Root

    tasks = {tasks}
    addTask = {addTask}
    toggleReminder = {toggleReminder}
    deleteTask = {deleteTask}

    isAddTaskVisible = {isAddTaskVisible}
    toggleIsAddTaskVisible = {toggleIsAddTaskVisible}
  />
}

export default App;
