import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

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
