import { connect } from 'react-redux'

import EditableApp from '../components/editable-app.js'


const mapStateToProps = (state) => {
  return {
    content: { pages: state.pages.allPages.map((pageId) => (state.pages.byId[pageId])) }
  }
}

const Portfolio = connect(mapStateToProps)(EditableApp)

export default Portfolio

