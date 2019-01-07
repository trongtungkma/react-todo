import React from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    Label,
    Icon,
} from 'semantic-ui-react'

import { NO_TASK } from '../../constants/messages'
import {
    BUTTON_COMPLETE,
    BUTTON_ARCHIVE,
} from '../../constants/content'

const TodoMenu = ({ tasks = [] }) => (
    tasks.length > 0 ? (
        <Button.Group>
            <Button color="pink" content={BUTTON_COMPLETE} />
            <Button.Or />
            <Button content={BUTTON_ARCHIVE} />
        </Button.Group>
    ) : (
        <Label>
            <Icon
                name="paper plane outline"
            />
            {' '}
            {NO_TASK}
        </Label>
    )
)

TodoMenu.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TodoMenu
