import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import TodoFormMessage from './TodoFormMessage'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskAddSuccess: false,
            taskAddError: false,
        }
    }

    handleInput = e => {
        e.preventDefault()
        const taskName = this.state.taskName

        if (taskName !== null && taskName.length > 0) {
            this.props.addTodo(this.state.taskName)
            this.setState(state => ({
                taskName: '',
                taskAddSuccess: true,
                taskAddError: false
            }))
        } else {
            // in case user submit nothing
            this.setState(state => ({
                taskAddError: true,
                taskAddSuccess: false
            }))
        }
    }

    handleOnChange = (e, { name, value }) => {
        this.setState(state => ({
            [name]: value
        }))
    }

    render() {
        const { taskName, taskAddSuccess, taskAddError } = this.state

        return (
            <>
                <Form success={taskAddSuccess} error={taskAddError} onSubmit={this.handleInput}>
                    <Form.Input
                        name='taskName'
                        placeholder="What you want to do today?"
                        onChange={this.handleOnChange}
                        value={taskName}
                    />
                    <TodoFormMessage />
                    <Form.Button
                        primary
                        type="submit"
                        content="Add Task" />
                </Form>
            </>
        )
    }
}

export default TodoForm
