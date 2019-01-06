import React from 'react'
import PropTypes from 'prop-types'
import {
    Segment,
    Checkbox,
    Button,
} from 'semantic-ui-react'

const TodoItem = ({ text }) => (
    <Segment
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}
    >
        <Checkbox
            style={{
                marginRight: '1em',
            }}
        />
        <span
            style={{
                flexGrow: 1,
            }}
        >
            {text}
        </span>
        <Button
            icon="x"
            circular
            style={{
                marginLeft: '1em',
            }}
        />
    </Segment>
)

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TodoItem
