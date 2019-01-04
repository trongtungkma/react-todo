import React from 'react'
import PropTypes from 'prop-types'

import {TodoItem} from '../TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({ tasks }) => {
  return (
      <ul className={styles.theList}>
        {
          tasks.map(({key, text}) =>
              <TodoItem key={key} text={text}/>
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
