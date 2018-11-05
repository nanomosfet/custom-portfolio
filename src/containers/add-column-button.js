import React from 'react'
import { connect } from 'react-redux'
import { addColumn } from './../actions'

const AddColumnButton = ({ dispatch, rowId }) => (
  <button
    type="button"
    className="close text-success position-absolute  mr-4 mt-3"
    style={{ right: '0' }}
    onClick={() => (dispatch(addColumn(rowId)))}>
    <span aria-hidden="true">+</span>
  </button>
)

export default connect()(AddColumnButton)
