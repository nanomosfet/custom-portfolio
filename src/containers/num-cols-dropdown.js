import React from 'react'
import { connect } from 'react-redux'

import { setColumns } from './../actions'

const NumColsDropdown = ({ dispatch, pageIndex, rowIndex, curNumCols }) => {
  const onClickHandler = (event, numCols) => {
    event.preventDefault()
    dispatch(setColumns(pageIndex, rowIndex, numCols))
  }

  return (
    <div className="btn-group dropleft position-absolute mr-4 mt-3" style={{ right: '0' }}>
      <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Columns: {curNumCols}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={(event) => onClickHandler(event, 1)} href="#">1</a>
        <a className="dropdown-item" onClick={(event) => onClickHandler(event, 2)} href="#">2</a>
        <a className="dropdown-item" onClick={(event) => onClickHandler(event, 3)} href="#">3</a>
        <a className="dropdown-item" onClick={(event) => onClickHandler(event, 4)} href="#">4</a>
      </div>
    </div>
  )
}


export default connect()(NumColsDropdown)
