import React from 'react'
import { connect } from 'react-redux'
import { editItemText } from './../actions'
import Textarea from 'react-textarea-autosize'

const EditableHeaderItem = ({ dispatch, item }) => {
  return (
    <div>
      <Textarea
        type="text"
        value={item.text}
        className="h1 text-center"
        style={
          {
            background: 'transparent',
            border: 'none',
            width: '100%',
            resize: 'none',
            overflow: 'hidden'
          }
        }
        onChange={(event) => dispatch(editItemText(item.id, event.target.value))}
      />
    </div>
  )
}

export default connect()(EditableHeaderItem)
