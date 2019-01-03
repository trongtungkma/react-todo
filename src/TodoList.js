import React, { Component } from 'react'

class TodoList extends Component {
  createTasks = item => {
    return (
      <li key={item.key}>
        {item.text}
      </li>
    )
  }
  render() {
    const { tasks } = this.props;
    const listTasks = tasks.map(this.createTasks)

    return <ul className="theList">{listTasks}</ul>
  }
}

export default TodoList
