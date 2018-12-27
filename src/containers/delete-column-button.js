import React from 'react'
import { connect } from 'react-redux'
import { deleteColumn } from '../actions'

const DeleteColumnButton = ({ dispatch, columnId, rowId }) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-success btn-sm my-2"
          onClick={() => (dispatch(deleteColumn(columnId, rowId)))}>
          Delete Column
        </button>
      </div>
    </div>
  )
}

export default connect()(DeleteColumnButton)
