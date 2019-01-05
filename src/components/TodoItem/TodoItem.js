import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

import styles from './TodoItem.module.css'

const TodoItem = ({ text }) => (
    <div className={styles.taskItem}>
        <List.Item>
            {text}
        </List.Item>
    </div>
)

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TodoItem
