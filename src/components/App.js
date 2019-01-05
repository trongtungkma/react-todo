import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { createAddTodo } from '../actions/todoActions'

class App extends Component {
  render() {
    const { addTodo } = this.props
    return (
        <>
          <TodoForm addTodo={addTodo} />
          <TodoList tasks={this.props.tasks} />
        </>
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
