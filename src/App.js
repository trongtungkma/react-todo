import React, { Component } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        tasks: []
    }

    const { store } = props
    store.subscribe(this.subscribeStore)
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

  subscribeStore = () => {
      this.setState(state => {
          const newState = this.props.store.getState()
          const { todoList } = newState;
          return {
              tasks: todoList
          }
      })
  }


  render() {
    const { ...other } = this.props
    return (
        <div>
          <TodoForm {...other} />
          <TodoList tasks={this.state.tasks} />
        </div>
    )
  }
}

export default App
