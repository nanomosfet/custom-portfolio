import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Root from './components/root'
import './main.scss'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import convertToEdit from './helpers/convert-to-edit'
const receivePosts = (content) => ({
  type: 'RECEIVE_CONTENT',
  content
})
const getStuff = () => {
  return (dispatch) => {
    return fetch('/api/latest/')
      .then((res) => res.json())
      .then((res) => dispatch(receivePosts(convertToEdit(res))))
  }
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.dispatch(getStuff())
  .then(() => ReactDOM.render(<Root store={store}/>, document.getElementById('root')))
