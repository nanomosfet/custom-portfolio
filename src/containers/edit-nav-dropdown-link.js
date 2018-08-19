import React from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
const editPage = (newVal, index, isHome) => ({
  type: 'EDIT_PAGE',
  value: newVal,
  key: index,
  isHome: isHome
})

const deletePage = (index, isHome) => ({
  type: 'DELETE_PAGE',
  key: index,
  isHome: isHome
})


const EditNavDropdownLink = ({ idx, pathTo, activeOnlyWhenExact, label, dispatch, isHome }) => (
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
                if (!isHome) {
                  history.push(`/edit/${event.target.value.replace(/\W/g, '').toLowerCase()}`)  
                }
                dispatch(editPage(event.target.value, idx, isHome))
              }
            }
            size={label.length}
            style={{
              background: 'transparent',
              border: 'none',
              textAlign: 'center',
              display: 'inline-block'
            }} />

        </Link>
        <span
          className="nav-link text-danger close"
          style={{ display: 'inline-block' }}
          onClick={() => {
            dispatch(deletePage(idx, isHome))
          }}>&times;</span>
      </li>

    )}
  />
)

export default connect()(EditNavDropdownLink)
