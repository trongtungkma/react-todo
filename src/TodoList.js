import React from 'react'
import PropTypes from 'prop-types'

import ToDoItem from './TodoItem'

const TodoList = ({ tasks }) => {
  return (
      <ul className="theList">
        {
          tasks.map(({key, text}) =>
              <ToDoItem key={key} text={text}/>
          )
        }
      </ul>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
        key: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TodoList
