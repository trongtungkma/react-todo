import React from 'react'
import PropTypes from 'prop-types'

import styles from './TodoItem.module.css'

const ToDoItem = ({ text }) => {
    return (
        <li className={styles.theItem}>
            {text}
        </li>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default ToDoItem