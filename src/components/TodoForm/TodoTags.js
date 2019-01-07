import React from 'react'
import { Label } from 'semantic-ui-react'

const TodoTags = () => (
    <p>
        <Label as="a" basic>
            business
        </Label>
        {' '}
        <Label as="a" basic>
            study
        </Label>
        {' '}
        <Label as="a" basic>
            family
        </Label>
        {' '}
        <Label as="a">
            selected tag
        </Label>
    </p>
)

export default TodoTags
