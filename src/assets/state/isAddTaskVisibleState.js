const isAddTaskVisibleState = {
  default: false,
  toggleIsAddTaskVisible (value) {
    this.setIsAddTaskVisible(!value)
  }
}

export default isAddTaskVisibleState
