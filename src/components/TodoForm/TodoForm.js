import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import TodoFormMessage from './TodoFormMessage'
import { BUTTON_ADD_TASK, ADD_TASK_PLACEHOLDER } from '../../constants/content'

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
        const { tasksNumber } = this.props

        return (
            <Segment>
                <Form success={taskAddSuccess} error={taskAddError} onSubmit={this.handleInput}>
                    <Form.Input
                        name="taskName"
                        placeholder={ADD_TASK_PLACEHOLDER}
                        onChange={this.handleOnChange}
                        value={taskName}
                    />
                    <TodoFormMessage tasksNumber={tasksNumber} />
                    <Form.Button
                        primary
                        type="submit"
                        content={BUTTON_ADD_TASK}
                    />
                </Form>
            </Segment>
        )
    }
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    tasksNumber: PropTypes.number.isRequired,
}

export default TodoForm
