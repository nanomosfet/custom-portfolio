import { connect } from 'react-redux'

import EditableApp from '../components/editable-app.js'


const mapStateToProps = (state) => ({ content: state })
const Portfolio = connect(mapStateToProps)(EditableApp)

export default Portfolio

