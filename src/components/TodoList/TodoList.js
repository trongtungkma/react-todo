import React from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'

import { TodoItem } from '../TodoItem'
import { TodoActions } from '../TodoActions'

const TodoList = ({ tasks }) => (
    <Segment>
        {
            tasks.map(({ key, text }) => <TodoItem key={key} text={text} />)
        }
        <TodoActions tasks={tasks} />
    </Segment>
)

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TodoList
