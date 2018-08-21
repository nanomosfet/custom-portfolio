import React from 'react'
import { connect } from 'react-redux'

const addItem = (pageIndex, rowIndex, colIndex) => ({
  type: 'ADD_ITEM',
  pageIndex: pageIndex,
  rowIndex: rowIndex,
  colIndex: colIndex
})

const AddItemButton = ({ dispatch, pageIndex, rowIndex, colIndex }) => {
  return (
    <div className="row">
      <div className="col">
        <button
          type="button"
          className="btn btn-success btn-sm my-2"
          onClick={() => (dispatch(addItem(pageIndex, rowIndex, colIndex)))}>
          Add Item
        </button>
      </div>
    </div>
  )
}


export default connect()(AddItemButton)
