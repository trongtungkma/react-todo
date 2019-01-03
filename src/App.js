import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super();
    this.state = {
        tasks: []
    }
  }

   addItem = (taskName) => {
      const newTask = {
          text: taskName,
          key: Date.now()
      }
      if (taskName !== null && taskName !== '') {
          this.setState(state =>  {
              return {
                  tasks: [...state.tasks, newTask]
              }
          })
      }
  }


  render() {
    return (
        <div>
          <TodoForm addItem={this.addItem} />
          <TodoList tasks={this.state.tasks} />
        </div>
    )
  }
}

export default App
