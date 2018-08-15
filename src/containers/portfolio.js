import { connect } from 'react-redux'

import App from '../components/app.js'


const mapStateToProps = (state) => ({ content: state })
const Portfolio = connect(mapStateToProps)(App)

export default Portfolio

