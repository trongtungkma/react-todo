import React from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'

import { TodoItem } from '../TodoItem'
import { TodoActions } from '../TodoActions'

const TodoList = ({ tasks }) => (
    <Segment
        style={{
            borderStyle: 'hidden',
        }}
    >
        {
            tasks.map(({ id, text }) => <TodoItem key={id} id={id} text={text} />)
        }
        <TodoActions tasks={tasks} />
    </Segment>
)

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TodoList
