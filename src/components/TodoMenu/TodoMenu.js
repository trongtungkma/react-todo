import React from 'react'
import {Menu, Input} from 'semantic-ui-react'

const TodoMenu = () =>  (
    <Menu pointing>
        <Menu.Item name='home' active={true} />
        <Menu.Item
            name='Active'
        />
        <Menu.Item
            name='Archive'
        />
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search task' />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default TodoMenu