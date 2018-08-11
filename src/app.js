import React from 'react'
import routes from './routes'
import Nav from './nav'
import NavDropdownLink from './nav-dropdown-link'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.path === '/'}
    render={(props) => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const App = () => (
  <Router>
    <div className="container-fluid">
      <Nav>
        <Link to="/" className="navbar-brand" >Brand</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {routes.map((route, idx) => <NavDropdownLink key={idx} pathTo={route.path} activeOnlyWhenExact={route.path === '/'} label={route.label} />)}
          </ul>
        </div>
      </Nav>
      {routes.map((route, idx) => <RouteWithSubRoutes key={idx} {...route} />)}
    </div>
  </Router>
)

 export default App
