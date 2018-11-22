import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import './main.scss'
import App from './components/app'

import unNormalize from './helpers/unNormalize'

fetch('/api/latest').then((res) => res.json())
  .then((content) => {
    ReactDOM.render(<App content={unNormalize(content)}/>, document.getElementById('root'))
  })
