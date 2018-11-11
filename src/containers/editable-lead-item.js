import React from 'react'
import { connect } from 'react-redux'
import { editItemText } from './../actions'
import Textarea from 'react-textarea-autosize'

const EditableLeadItem = ({ dispatch, item }) => {
  return (
    <div>
      <Textarea
        type="text"
        value={item.text}
        className="p text-center lead font-weight-normal my-1 py-1"
        style={
        {
          background: 'transparent',
          border: 'none',
          width: '100%',
          wrap: 'soft',
          resize: 'none',
          overflow: 'hidden',
          color: 'inherit'

        }
      }
      onChange={(event) => dispatch(editItemText(item.id, event.target.value))}
      >

      </Textarea>
    </div>
  )
}

export default connect()(EditableLeadItem)
