import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Root from './components/root'
import './main.scss'
import { createStore } from 'redux'

const portfolio = (state, action) => {
  return state
}

const store = createStore(portfolio)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
