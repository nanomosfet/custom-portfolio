import React from 'react'
import { connect } from 'react-redux'
import convertToNormal from './../helpers/convert-to-normal'
const getStufff = () => {
  return (dispatch, getState) => {
    return fetch('/api/save/', {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
      body: JSON.stringify(convertToNormal(getState()))
    }).then((res) => res.json()).
      then((res) => console.log(res))
  }
}
const SaveStateButton = ({ dispatch }) => {
  const onClick = () => {
    dispatch(getStufff())
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={onClick}>Save</a>
    </li>
)
}

export default connect()(SaveStateButton)
