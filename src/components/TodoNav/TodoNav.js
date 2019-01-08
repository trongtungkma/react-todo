import React from 'react'
import PropTypes from 'prop-types'
import {
    Menu,
    Search,
    Label,
    Responsive,
} from 'semantic-ui-react'

import {
    MENU_HOME,
    MENU_ARCHIVE,
    MENU_INACTIVE,
    SEARCH_TASK_PLACEHOLDER,
} from '../../constants/content'

const TodoNav = ({ tasksNumber = 0 }) => (
    <Menu pointing>
        <Menu.Item name="home" active>
            {MENU_HOME}
            <Label color="teal">{tasksNumber}</Label>
        </Menu.Item>
        <Menu.Item name="archive">
            {MENU_ARCHIVE}
            <Label color="yellow">10</Label>
        </Menu.Item>
        <Menu.Item name="inactive">
            {MENU_INACTIVE}
            <Label color="red">20</Label>
        </Menu.Item>
        {/* TODO: Need a way to display search bar in mobile */}
        <Menu.Menu position="right">
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Menu.Item>
                    <Search icon="search" iconPosition="left" placeholder={SEARCH_TASK_PLACEHOLDER} />
                </Menu.Item>
            </Responsive>
        </Menu.Menu>
    </Menu>
)

TodoNav.propTypes = {
    tasksNumber: PropTypes.number.isRequired,
}


export default TodoNav
