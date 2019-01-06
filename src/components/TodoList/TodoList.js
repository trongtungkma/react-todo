import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Button } from 'semantic-ui-react'

import { TodoItem } from '../TodoItem'

const TodoList = ({ tasks }) => (
  <>
      <Segment>
          {
              tasks.map(({ key, text }) => <TodoItem key={key} text={text} />)
          }
          <Button
              content="Complete"
          />
      </Segment>
  </>
)

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TodoList
