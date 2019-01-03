import React, { Component } from 'react'
import { createAddTodo } from '../actions/todoActions'

class TodoForm extends Component {

    handleInput = e => {
        e.preventDefault()
        const taskName = this.refs.taskInput.value;
        this.props.addItem(taskName);

        // dispatch an action to my redux
        console.log(JSON.stringify(this.props.store.getState()))
        this.props.store.dispatch(
            createAddTodo(taskName)
        )
        console.log(JSON.stringify(this.props.store.getState()))

        // reset and focus again on input form
        this.refs.taskInput.value = ''
        this.refs.taskInput.focus()
    }

    render() {

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.handleInput}>
                        <input
                            placeholder="Task"
                            ref="taskInput"
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm
