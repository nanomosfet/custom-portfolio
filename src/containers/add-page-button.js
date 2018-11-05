import React from 'react'
import { connect } from 'react-redux'
import { addPage } from './../actions'

const AddPageButton = ({ dispatch }) => (
  <li className="nav-item">
    <a className="nav-link" href="#" onClick={() => (dispatch(addPage()))}>Add Page</a>
  </li>
)

export default connect()(AddPageButton)
