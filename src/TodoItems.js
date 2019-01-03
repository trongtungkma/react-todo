import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key}>
        {item.text}
      </li>
    )
  }
  render() {
    const { entries } = this.props;
    const listItems = entries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
