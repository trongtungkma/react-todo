import React from 'react'
import { Menu, Input, Label } from 'semantic-ui-react'

const TodoMenu = () => (
    <Menu pointing>
        <Menu.Item name="home" active>
            Home
            <Label color="teal">0</Label>
        </Menu.Item>
        <Menu.Item name="archive">
            Archive
            <Label color="yellow">10</Label>
        </Menu.Item>
        <Menu.Item name="inactive">
            Inactive
            <Label color="red">20</Label>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>
                <Input icon="search" placeholder="Search task" />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default TodoMenu
