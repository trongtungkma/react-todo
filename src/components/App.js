import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoMenu } from './TodoMenu'

import { createAddTodo } from '../actions/todoActions'

const App = ({ addTodo, tasks = [] }) => (
    <Container>
        <TodoMenu tasksNumber={tasks.length} />
        <TodoForm addTodo={addTodo} tasksNumber={tasks.length} />
        <TodoList tasks={tasks} />
    </Container>
)

App.propTypes = {
    addTodo: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
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
