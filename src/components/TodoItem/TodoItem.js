import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Segment,
    Checkbox,
    Label,
    Icon,
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
        <span>
            {text}
        </span>
        <span
            style={{
                flexGrow: 1,
                textAlign: 'center',
            }}
        >
            <Label>
                study
                <Icon name="delete" />
            </Label>
            <Label>
                family
                <Icon name="delete" />
            </Label>
        </span>
        <Icon
            name="delete"
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
