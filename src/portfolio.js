import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import './main.scss'
import App from './components/app'

import initialContent from './components/initial-content'
import unNormalize from './helpers/unNormalize'

ReactDOM.render(<App content={unNormalize(initialContent)}/>, document.getElementById('root'))
