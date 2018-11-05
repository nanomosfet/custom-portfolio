import React from 'react'
import { connect } from 'react-redux'
import { addItem } from './../actions'

const AddItemButton = ({ dispatch, columnId }) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-success btn-sm my-2"
          onClick={() => (dispatch(addItem(columnId)))}>
          Add Item
        </button>
      </div>
    </div>
  )
}

export default connect()(AddItemButton)
