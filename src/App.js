import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  constructor() {
    super();
    this.state = {
        items: []
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
                  items: [...state.items, newTask]
              }
          })
      }
  }


  render() {
    return (
        <div>
          <TodoList addItem={this.addItem} />
          <TodoItems entries={this.state.items} />
        </div>
    )
  }
}

export default App
