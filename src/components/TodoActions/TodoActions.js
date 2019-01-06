import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

const TodoActions = ({ tasks = [] }) => {
    if (tasks.length > 0) {
        return <Button content="Complete" />
    }
    return (<div>You have no task today</div>)
}

TodoActions.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TodoActions
