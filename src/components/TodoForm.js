import React, { Component } from 'react'
import styles from './TodoForm.module.css'

class TodoForm extends Component {

    handleInput = e => {
        e.preventDefault()
        const taskName = this.refs.taskInput.value;
        
        // dispatch an action to my redux
        this.props.addTodo(taskName)

        // reset and focus again on input form
        this.refs.taskInput.value = ''
        this.refs.taskInput.focus()
    }

    render() {

        return (
            <div>
                <div>
                    <form onSubmit={this.handleInput}>
                        <input
                            className={styles.formInput}
                            placeholder="Task"
                            ref="taskInput"
                        />
                        <button
                            className={styles.formButton}
                            type="submit">
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm
