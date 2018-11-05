import React from 'react'
import { connect } from 'react-redux'
import { deleteRow } from './../actions'


const DeleteRowButton = ({ dispatch, page, row }) => {
  return (
        <button
          type="button"
          className="close text-danger position-absolute  ml-4 mt-2"
          onClick={() => (dispatch(deleteRow(page, row)))}>
          <span aria-hidden="true">&times;</span>
        </button>)
}


export default connect()(DeleteRowButton)
