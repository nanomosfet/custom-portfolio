import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import './main.scss'
import App from './components/app'

import initialContent from './components/initial-content'

ReactDOM.render(<App content={initialContent}/>, document.getElementById('root'))
