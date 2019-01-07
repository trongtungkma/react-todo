import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Message } from 'semantic-ui-react'

class TodoFormMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
        }
    }

    componentWillReceiveProps(nextProps) {
        const { tasksNumber } = this.props
        // TODO: Case: those values is equal, but user enter empty string
        if (nextProps.tasksNumber > tasksNumber) {
            this.setState({
                visible: true,
            })
        }
    }

    handleDismiss = () => {
        this.setState({
            visible: false,
        })
    }

    render() {
        const { visible } = this.state
        if (visible) {
            return (
                <>
                    <Message
                        icon="arrow alternate circle down outline"
                        onDismiss={this.handleDismiss}
                        success
                        header="New Task Added"
                        content="Move on by select one (or many) tasks in the list"
                    />
                    <Message
                        icon="arrow alternate circle up outline"
                        onDismiss={this.handleDismiss}
                        error
                        header="Action failed"
                        content="You can not add an empty content"
                    />
                </>
            )
        }
        return <></>
    }
}

TodoFormMessage.propTypes = {
    tasksNumber: PropTypes.number.isRequired,
}

export default TodoFormMessage
