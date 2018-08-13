import React from 'react'
import { Route, Link } from 'react-router-dom';

const NavDropdownLink = ({ pathTo, activeOnlyWhenExact, label }) => (
  <Route
    path={pathTo}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <Link to={pathTo} className="nav-link" >{label} {(match) ? <span className="sr-only">(current)</span> : null}</Link>
      </li>
    )}
  />
)

export default NavDropdownLink
