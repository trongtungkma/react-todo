import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import { Home } from './Home'
import { TodoNav } from '../components/TodoNav'

import { createAddTodo } from '../actions/todoActions'

const App = ({ addTodo, tasks = [] }) => (
    <Container>
        <TodoNav tasksNumber={tasks.length} />
        <Home addTodo={addTodo} tasks={tasks} />
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
