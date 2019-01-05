import React from 'react'
import {Message} from "semantic-ui-react";

const TodoFormMessage = () => (
    <>
        <Message
            success
            header='New Task Added'
            content='Keep moving with new task'
        />
        <Message
            error
            header='Action failed'
            content='You can not add an empty content'
        />
    </>
)

export default TodoFormMessage