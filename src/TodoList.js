import React, { Component } from 'react'

const TodoList = ({ tasks }) => {

  const createTasks = item => {
    return (
      <li key={item.key}>
        {item.text}
      </li>
    )
  }

  const listTasks = tasks.map(createTasks)

  return (
      <ul className="theList">
        {listTasks}
      </ul>
  )
}

export default TodoList
