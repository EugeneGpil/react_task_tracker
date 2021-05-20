import { api_url as apiUrl } from 'assets/base/config'
import { request } from 'assets/base/request'

const taskFetcher = {
  fetchTasks: async () => {
    return await request(`${apiUrl}/tasks`)
  },
  deleteTask: async id => {
    return await request(`${apiUrl}/tasks/${id}`, 'DELETE')
  },
  editTask: async task => {
    return await request(`${apiUrl}/tasks/${task.id}`, 'PATCH', task)
  },
  addTask: async task => {
    return await request(`${apiUrl}/tasks`, 'POST', task)
  }
}

export default taskFetcher
