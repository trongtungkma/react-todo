import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoMenu } from './TodoMenu'

import { createAddTodo } from '../actions/todoActions'

class App extends Component {
    render() {
        const { addTodo, tasks } = this.props
        return (
            <>
                <TodoMenu />
                <Segment>
                    <TodoForm addTodo={addTodo} />
                    <TodoList tasks={tasks} />
                </Segment>
            </>
        )
    }
}

App.propTypes = {
    addTodo: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

const mapStateToProps = state => ({
    tasks: state.todoList,
})

const mapDispatchToProps = dispatch => ({
    addTodo: taskName => dispatch(createAddTodo(taskName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
