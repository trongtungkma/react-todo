import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import TodoFormMessage from './TodoFormMessage'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: '',
            taskAddSuccess: false,
            taskAddError: false,
        }
    }

    handleInput = (e) => {
        e.preventDefault()
        const { taskName } = this.state
        const { addTodo } = this.props

        if (taskName !== null && taskName.length > 0) {
            addTodo(taskName)
            this.setState({
                taskName: '',
                taskAddSuccess: true,
                taskAddError: false,
            })
        } else {
            // in case user submit nothing
            this.setState({
                taskAddError: true,
                taskAddSuccess: false,
            })
        }
    }

    handleOnChange = (e, { name, value }) => {
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { taskName, taskAddSuccess, taskAddError } = this.state

        return (
            <>
                <Form success={taskAddSuccess} error={taskAddError} onSubmit={this.handleInput}>
                    <Form.Input
                        name="taskName"
                        placeholder="What you want to do today?"
                        onChange={this.handleOnChange}
                        value={taskName}
                    />
                    <TodoFormMessage />
                    <Form.Button
                        primary
                        type="submit"
                        content="Add Task"
                    />
                </Form>
            </>
        )
    }
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default TodoForm
