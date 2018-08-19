import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Root from './components/root'
import './main.scss'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
