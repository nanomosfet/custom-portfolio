import React from 'react'
import { connect } from 'react-redux'

let pageNum = 0
const addPage = () => ({
  type: 'ADD_PAGE',
  pageName: pageNum++
})

const AddPageButton = ({ dispatch }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={() => (dispatch(addPage()))}>Add Page</a>
    </li>
  )
}


export default connect()(AddPageButton)
