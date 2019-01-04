import React from 'react'
import PropTypes from 'prop-types'

import styles from './TodoItem.module.css'

const TodoItem = ({ text }) => {
    return (
        <li className={styles.theItem}>
            {text}
        </li>
    )
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default TodoItem