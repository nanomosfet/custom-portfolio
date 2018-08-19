import React from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
const editPage = (newVal, index) => ({
  type: 'EDIT_PAGE',
  value: newVal,
  key: index
})


const EditNavDropdownLink = ({ idx, pathTo, activeOnlyWhenExact, label, dispatch }) => (
  <Route
    path={pathTo}
    exact={activeOnlyWhenExact}
    children={({ match, history }) => (
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <Link to={pathTo} >
          <input
            type="text"
            className="nav-link"
            value={label}
            onChange={
              (event) => {
                history.push(`/edit/${event.target.value.replace(/\W/g, '').toLowerCase()}`)
                dispatch(editPage(event.target.value, idx))
              }
            }
            size={label.length}
            style={{
              background: 'transparent',
              border: 'none',
              textAlign: 'center'
            }} />
        </Link>
      </li>
    )}
  />
)

export default connect()(EditNavDropdownLink)
