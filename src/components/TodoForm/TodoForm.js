import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

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
        this.setState(state => ({
            taskName: ''
        }))
    }

    handleOnChange = (e, { name, value }) => {
        this.setState(state => ({
            [name]: value
        }))
    }

    render() {
        const { taskName } = this.state

        return (
            <div>
                <div>
                    <Form onSubmit={this.handleInput}>
                        <Form.Input
                            name='taskName'
                            placeholder="What you want to do today?"
                            onChange={this.handleOnChange}
                            value={taskName}
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
