import React from 'react'
import { connect } from 'react-redux'
import { addRow } from './../actions'

const AddRowButton = ({ dispatch, pageId }) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-success btn-lg btn-block my-2"
          onClick={() => (dispatch(addRow(pageId)))}>
          Add Row
        </button>
      </div>
    </div>
  )
}


export default connect()(AddRowButton)
