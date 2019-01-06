import React from 'react'
import PropTypes from 'prop-types'
import {
    Menu,
    Input,
    Label,
} from 'semantic-ui-react'

import {
    MENU_HOME,
    MENU_ARCHIVE,
    MENU_INACTIVE,
    SEARCH_TASK_PLACEHOLDER,
} from '../../constants/content'

const TodoMenu = ({ tasks = [] }) => (
    <Menu pointing>
        <Menu.Item name="home" active>
            {MENU_HOME}
            <Label color="teal">{tasks.length}</Label>
        </Menu.Item>
        <Menu.Item name="archive">
            {MENU_ARCHIVE}
            <Label color="yellow">10</Label>
        </Menu.Item>
        <Menu.Item name="inactive">
            {MENU_INACTIVE}
            <Label color="red">20</Label>
        </Menu.Item>
        <Menu.Menu position="right">
            <Menu.Item>
                <Input icon="search" placeholder={SEARCH_TASK_PLACEHOLDER} />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)

TodoMenu.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}


export default TodoMenu
