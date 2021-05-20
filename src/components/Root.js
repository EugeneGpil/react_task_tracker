import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'components/Header'
import Tasks from 'components/Tasks'
import AddTask from 'components/AddTask'
import Footer from 'components/Footer'
import About from 'components/About'

const Root = ({
  tasks,
  addTask,
  toggleReminder,
  deleteTask,

  isAddTaskVisible,
  toggleIsAddTaskVisible
}) => {
  return (
    <Router>
      <div className="container">
        <Header
          onToggleIsAddTaskVisible = {toggleIsAddTaskVisible}
          isAddTaskVisible = {isAddTaskVisible}
        />
        <Route
          path = '/'
          exact
          render = {props => (
            <>
              {isAddTaskVisible && <AddTask
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
  )
}

export default Root
