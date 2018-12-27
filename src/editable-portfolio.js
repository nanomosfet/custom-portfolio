import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Root from './components/root'
import './main.scss'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { requestContent } from './actions/async-actions'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.dispatch(requestContent())
  .then(() => ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root'))
  )
