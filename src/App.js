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

  subscribeStore = () => {
      console.log('get inform from store')
  }


  render() {
    const { store } = this.props
    store.subscribe(this.subscribeStore)

    return (
        <div>
          <TodoForm addItem={this.addItem} store={store} />
          <TodoList tasks={this.state.tasks} />
        </div>
    )
  }
}

export default App
