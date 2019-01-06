import React from 'react'
import PropTypes from 'prop-types'

import {
    Button,
    Label,
    Icon,
} from 'semantic-ui-react'

import { NO_TASK } from '../../constants/messages'
import { BUTTON_COMPLETE } from '../../constants/content'

const TodoActions = ({ tasks = [] }) => (
    tasks.length > 0 ? (
        <Button content={BUTTON_COMPLETE} />
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

TodoActions.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TodoActions
