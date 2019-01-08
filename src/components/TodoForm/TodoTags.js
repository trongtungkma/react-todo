import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'
import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

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

const TodoTags = ({ taskName }) => (
    taskName.length < 10
        ? <></>
        : (
            <div style={{ paddingBottom: '1rem' }}>
                <TodoTag text="business" />
                <TodoTag text="study" />
                <TodoTag text="family" />
                <Label as="a" basic>
                    <Loader size={5} />
                </Label>
            </div>
        )
)

TodoTags.propTypes = {
    taskName: PropTypes.string.isRequired,
}

export default TodoTags
