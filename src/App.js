import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const appUrl = 'http://localhost:5000'

  const request = async (url, method = 'GET', data = []) => {
    const params = {
      headers: {
        'Content-Type': 'application/json'
      },
      method
    }

    if (!['GET', 'HEAD'].includes(method)) {
      params.body = JSON.stringify(data)
    }

    return await (await fetch(url, params)).json()
  }

  const [tasks, setTasks] = useState([])

  const [isAddTaskButtonVisible, setIsAddTaskButtonVisible] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    return await request(`${appUrl}/tasks`)
  }

  // Delete task
  const deleteTask = id => {
    request(`${appUrl}/tasks/${id}`, 'DELETE')
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = id => {
    const task = tasks.find(task => task.id == id)
    task.reminder = !task.reminder
    request(`${appUrl}/tasks/${id}`, 'PATCH', task)
    setTasks([...tasks])
  }

  // Add task
  const addTask = async task => {
    const res = await request(`${appUrl}/tasks`, 'POST', task)
    setTasks([...tasks, res])
  }

  const toggleIsAddTaskButtonVisible = () => {
    setIsAddTaskButtonVisible(!isAddTaskButtonVisible)
  }

  return (
    <Router>
      <div className="container">
        <Header
          onToggleIsAddTaskButtonVisible = {toggleIsAddTaskButtonVisible}
          isAddTaskButtonVisible = {isAddTaskButtonVisible}
        />
        <Route
          path = '/'
          exact
          render = {props => (
            <>
              {isAddTaskButtonVisible && <AddTask
                onAdd = {addTask}
              />}
              {tasks.length > 0
                ? <Tasks
                  tasks = {tasks}
                  onDelete = {deleteTask}
                  onToggle = {toggleReminder}
                />
                : <div>
                  No Tasks
                </div>}
            </>
          )}
        />
        <Route
          path = '/about'
          exact
          component = {About}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
