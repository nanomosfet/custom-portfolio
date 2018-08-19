import React from 'react'
import { connect } from 'react-redux'

const deleteRow = (pageIndex, rowIndex) => ({
  type: 'DELETE_ROW',
  pageIndex: pageIndex,
  rowIndex: rowIndex
})

const DeleteRowButton = ({ dispatch, pageIndex, rowIndex }) => {
  return (
        <button
          type="button"
          className="close text-danger position-absolute m-4"
          onClick={() => (dispatch(deleteRow(pageIndex, rowIndex)))}>
          <span aria-hidden="true">&times;</span>
        </button>)
}


export default connect()(DeleteRowButton)
