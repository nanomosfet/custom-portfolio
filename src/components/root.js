import React from 'React'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import initialContent from './initial-content'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App content={initialContent} />
    </Router>
  </Provider>
)

export default Root
