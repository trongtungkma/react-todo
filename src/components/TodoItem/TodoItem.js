import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Checkbox,
    Button,
} from 'semantic-ui-react'

import { createDelTodo } from '../../actions/todoActions'

const TodoItem = ({ id, text, delTodo }) => (
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
            onClick={() => delTodo(id)}
        />
    </Segment>
)


TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    delTodo: id => dispatch(createDelTodo(id)),
})

export default connect(null, mapDispatchToProps)(TodoItem)
