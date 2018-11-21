import React from 'react'
import { connect } from 'react-redux'
import { savePortfolio } from './../actions/async-actions'

const SaveStateButton = ({ dispatch }) => {
  const onClick = () => {
    dispatch(savePortfolio())
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={onClick}>Save</a>
    </li>
  )
}

export default connect()(SaveStateButton)
