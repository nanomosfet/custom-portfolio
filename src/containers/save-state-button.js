import React from 'react'
import { connect } from 'react-redux'
const getStuff = () => {
  return (dispatch, getState) => {
    fetch('/api/save/', {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
      body: JSON.stringify(getState())
    }).then((res) => res.json()).
      then((res) => console.log(res))
  }
}
const SaveStateButton = ({ dispatch }) => {
  const onClick = () => {
    dispatch(getStuff())
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={onClick}>Save</a>
    </li>
)
}

export default connect()(SaveStateButton)
