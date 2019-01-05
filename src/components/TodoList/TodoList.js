import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

import { TodoItem } from '../TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({ tasks }) => (
    <List className={styles.tasksList}>
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
