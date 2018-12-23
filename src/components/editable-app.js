import React from 'react'
import Nav from './nav'
import EditablePage from './editable-page'
import EditNavDropdownLink from '../containers/edit-nav-dropdown-link'
import AddPageButton from '../containers/add-page-button'
import SaveStateButton from '../containers/save-state-button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const RouteWithSubRoutes = ({ pageContent }) => (
  <Route
    path={pageContent.path}
    exact={true}
    render={() => (
      // pass the sub-routes down to keep nesting
      <EditablePage rows={pageContent.rows} pageId={pageContent.id}/>
    )}
  />
)

const ToggleButton = () => (
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
)

const EditableApp = ({ content }) => (
  <Router>
    <div className="container-fluid">
      <Nav>
        <Link to={content.pages[0].path} className="navbar-brand" >Brand</Link>
        <ToggleButton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {content.pages.map((pageContent, idx) => <EditNavDropdownLink isHome={pageContent.isHome} pageId={pageContent.id} idx={idx} key={idx} pathTo={pageContent.path} activeOnlyWhenExact={pageContent.path === '/edit/'} label={pageContent.label} />)}
            <AddPageButton />
            <SaveStateButton />
          </ul>
        </div>
      </Nav>
      {content.pages.map((pageContent, idx) => <RouteWithSubRoutes pageIndex={idx} key={idx} pageContent={pageContent} />)}
    </div>
  </Router>
)

export default EditableApp
