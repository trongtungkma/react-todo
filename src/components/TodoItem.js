import React from 'react'
import PropTypes from 'prop-types'

const ToDoItem = ({ text }) => {
    return (
        <li>
            {text}
        </li>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default ToDoItem