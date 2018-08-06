import React from 'react'
import routes from './routes'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <div className="row">
        <div className="col-md">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mx-3 fixed-top">
            <a className="navbar-brand" href="#">Brand</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >About Me</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {routes.map((route, idx) => <RouteWithSubRoutes key={idx} {...route} />)}
    </div>
  </Router>
)

 export default App

