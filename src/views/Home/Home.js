import React from 'react'
import PropTypes from 'prop-types'

import { TodoForm } from '../../components/TodoForm'
import { TodoList } from '../../components/TodoList'

const Home = ({ addTodo, tasks = [] }) => (
    <>
        <TodoForm addTodo={addTodo} tasksNumber={tasks.length} />
        <TodoList tasks={tasks} />
    </>
)

Home.propTypes = {
    addTodo: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default Home
