import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

class TodoTag extends Component {
    state = {
        selected: true,
    }

    handleOnClick = () => {
        this.setState(state => ({
            selected: !state.selected,
        }))
    }

    render() {
        const { text } = this.props
        const { selected } = this.state
        return (
            <Label
                as="a"
                basic={selected}
                onClick={this.handleOnClick}
            >
                {text}
            </Label>
        )
    }
}

TodoTag.propTypes = {
    text: PropTypes.string.isRequired,
}

const TodoTags = () => (
    <p>
        <TodoTag text="business" />
        {' '}
        <TodoTag text="study" />
        {' '}
        <TodoTag text="family" />
        {' '}
        <TodoTag text="selected tag" />
    </p>
)

export default TodoTags
