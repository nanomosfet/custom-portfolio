import React from 'react'
import Nav from './nav'
import Page from './page'
import NavDropdownLink from './nav-dropdown-link'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

const App = ({ content }) => (
  <Router>
    <div className="container-fluid">
      <Nav>
        <Link to="/" className="navbar-brand" >Brand</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {content.pages.map((pageContent, idx) => <NavDropdownLink key={idx} pathTo={pageContent.path} activeOnlyWhenExact={pageContent.path === '/'} label={pageContent.label} />)}
          </ul>
        </div>
      </Nav>
      {content.pages.map((pageContent, idx) => <RouteWithSubRoutes key={idx} pageContent={pageContent} />)}
    </div>
  </Router>
)

 export default App
