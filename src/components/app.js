import React from 'react'
import Nav from './nav'
import Page from './page'
import NavDropdownLink from './nav-dropdown-link'
import { Route, Link } from 'react-router-dom';

const RouteWithSubRoutes = ({ pageContent }) => (
  <Route
    path={pageContent.path}
    exact={pageContent.path === '/'}
    render={() => (
      // pass the sub-routes down to keep nesting
      <Page pageContent={pageContent} />
    )}
  />
);

const ToggleButton = () => (
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
)

const App = ({ content }) => (
    <div className="container-fluid">
      <Nav>
        <Link to="/" className="navbar-brand" >Brand</Link>
        <ToggleButton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {content.pages.map((pageContent, idx) => <NavDropdownLink key={idx} pathTo={pageContent.path} activeOnlyWhenExact={pageContent.path === '/'} label={pageContent.label} />)}
          </ul>
        </div>
      </Nav>
      {content.pages.map((pageContent, idx) => <RouteWithSubRoutes key={idx} pageContent={pageContent} />)}
    </div>
)

 export default App
