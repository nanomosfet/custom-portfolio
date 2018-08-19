import React from 'react'
import { connect } from 'react-redux'

const addRow = (pageIndex) => ({
  type: 'ADD_ROW',
  pageIndex: pageIndex
})

const AddRowButton = ({ dispatch, pageIndex }) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-success btn-lg btn-block my-2"
          onClick={() => (dispatch(addRow(pageIndex)))}>
          Add Page
        </button>
      </div>
    </div>
  )
}


export default connect()(AddRowButton)
