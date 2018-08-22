import React from 'react'
import { connect } from 'react-redux'

import { editItemType, deleteItem } from './../actions'

const EditItemType = ({ dispatch, itemId, colId }) => {
  const onClickHandler = (newType) => {
    event.preventDefault()
    dispatch(editItemType(itemId, newType))
  }

  return (
    <div className="btn-group dropleft position-absolute mr-4 mt-1" style={{ right: '0' }}>
      <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={() => onClickHandler('header')} href="#">Header</a>
        <a className="dropdown-item" onClick={() => onClickHandler('leadText')} href="#">Lead</a>
        <a className="dropdown-item" onClick={() => onClickHandler('pdfDownloadButton')} href="#">PDF</a>
        <a className="dropdown-item" onClick={() => dispatch(deleteItem(itemId, colId))} href="#">Delete</a>
      </div>
    </div>
  )
}


export default connect()(EditItemType)
