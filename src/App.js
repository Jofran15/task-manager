import React, { Component } from 'react'
import { tasks } from './Data.json'
import Task from './components/Task'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks    }
  }

  render() {
    let allTask = this.state.tasks.map((task, i) => {
      return (
        <Task
          title={task.title}
          description={task.description}
          date={task.date}
        />
      )
    })

    return <div>{allTask}</div>
  }
}
export default App
