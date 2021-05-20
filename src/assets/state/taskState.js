import taskFetcher from 'assets/fetchers/taskFetcher'

const taskState = {
  default: [],
  async fetchTasks () {
    this.setTasks(await taskFetcher.fetchTasks())
  },
  deleteTask (tasks, id) {
    taskFetcher.deleteTask(id)
    this.setTasks(tasks.filter(task => task.id !== id))
  },
  toggleReminder (tasks, id) {
    const task = tasks.find(task => task.id === id)
    task.reminder = !task.reminder
    taskFetcher.editTask(task)
    this.setTasks([...tasks])
  },
  async addTask (tasks, task) {
    const res = await taskFetcher.addTask(task)
    this.setTasks([...tasks, res])
  }
}

export default taskState
