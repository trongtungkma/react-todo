import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { createAddTodo } from './actions/todoActions'

class App extends Component {
  render() {
    const { addTodo } = this.props
    return (
        <div>
          <TodoForm addTodo={addTodo} />
          <TodoList tasks={this.props.tasks} />
        </div>
    )
  }
}

const mapStateToProps = state => ({
    tasks: state.todoList
})

const mapDispatchToProps = dispatch => ({
    addTodo: (taskName) => dispatch(createAddTodo(taskName))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
