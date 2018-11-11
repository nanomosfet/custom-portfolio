import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { editPage, deletePage } from './../actions'

const EditNavDropdownLink = ({ pageId, pathTo, activeOnlyWhenExact, label, dispatch, isHome }) => (
  <Route
    path={pathTo}
    exact={activeOnlyWhenExact}
    children={({ match, history }) => (
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <Link to={pathTo} draggable="false">
          <input
            type="text"
            className="nav-link"
            value={label}
            onChange={
              (event) => {
                if (!isHome) {
                  history.push(`/edit/${event.target.value.replace(/\W/g, '').toLowerCase()}`)
                }
                dispatch(editPage(event.target.value, pageId, isHome))
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
            dispatch(deletePage(pageId, isHome))
          }}>&times;</span>
      </li>

    )}
  />
)

export default connect()(EditNavDropdownLink)
