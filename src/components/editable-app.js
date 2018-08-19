import React from 'react'
import Nav from './nav'
import Page from './page'
import EditNavDropdownLink from '../containers/edit-nav-dropdown-link'
import AddPageButton from '../containers/add-page-button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RouteWithSubRoutes = ({ pageContent, pageIndex }) => (
  <Route
    path={pageContent.path}
    exact={true}
    render={() => (
      // pass the sub-routes down to keep nesting
      <Page pageContent={pageContent} pageIndex={pageIndex}/>
    )}
  />
);

const ToggleButton = () => (
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
)

const EditableApp = ({ content }) => (
  <Router>
    <div className="container-fluid">
      <Nav>
        <Link to={content.pages[content.pages.length - 1].path} className="navbar-brand" >Brand</Link>
        <ToggleButton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {content.pages.map((pageContent, idx) => <EditNavDropdownLink isHome={pageContent.isHome}idx={idx} key={idx} pathTo={pageContent.path} activeOnlyWhenExact={pageContent.path === '/'} label={pageContent.label} />)}
            <AddPageButton />
          </ul>
        </div>
      </Nav>
      {content.pages.map((pageContent, idx) => <RouteWithSubRoutes pageIndex={idx} key={idx} pageContent={pageContent} />)}
    </div>
  </Router>
)

 export default EditableApp
