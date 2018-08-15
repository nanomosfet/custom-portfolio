import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Root from './components/root'
import './main.scss'
import { createStore } from 'redux'
import initialContent from './components/initial-content'
import convertToEdit from './helpers/convert-to-edit'
const portfolio = (state = convertToEdit(initialContent), action) => {
  return state
}

const store = createStore(portfolio)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
