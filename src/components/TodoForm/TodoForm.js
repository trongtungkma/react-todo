import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import styles from './TodoForm.module.css'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
        }
    }

    handleInput = e => {
        e.preventDefault()
        this.props.addTodo(this.state.taskName)
    }

    handleOnChange = (e, { name, value }) => {
        this.setState(state => ({
            [name]: value
        }))
    }

    render() {

        return (
            <div>
                <div>
                    <Form onSubmit={this.handleInput}>
                        <Form.Input
                            name='taskName'
                            onChange={this.handleOnChange}
                            placeholder="Task"
                            ref="taskInput"
                        />
                        <Form.Button
                            type="submit"
                            content="Add Task" />
                    </Form>
                </div>
            </div>
        )
    }
}

export default TodoForm
