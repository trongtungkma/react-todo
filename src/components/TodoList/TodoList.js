import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

import { TodoItem } from '../TodoItem'

const TodoList = ({ tasks }) => (
    <List>
        {
            tasks.map(({ key, text }) => <TodoItem key={key} text={text} />)
        }
    </List>
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
