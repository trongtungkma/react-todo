import React from 'react'
import PropTypes from 'prop-types'
import {
    List,
    Segment,
    Checkbox,
    Input,
    Button,
} from 'semantic-ui-react'

const TodoItem = ({ text }) => (
    <Segment>
        <List.Item>
            <Checkbox
                style={{
                    marginRight: '1em',
                }}
            />
            <Input
                value={text}
            />
            <Button
                icon="x"
                circular
                style={{
                    marginLeft: '1em',
                }}
            />
        </List.Item>
    </Segment>
)

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TodoItem
