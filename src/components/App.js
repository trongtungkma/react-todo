import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Segment} from 'semantic-ui-react'

import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoMenu } from './TodoMenu'

import { createAddTodo } from '../actions/todoActions'

class App extends Component {

  render() {
    const { addTodo } = this.props
    return (
        <>
            <TodoMenu />
            <Segment>
                <TodoForm addTodo={addTodo} />
                <TodoList tasks={this.props.tasks} />
            </Segment>
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
