import React from 'react'
import { shallow } from 'enzyme'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import Root from '../components/root'

it('should mount', () => {
  const store = createStore(rootReducer)

  shallow(<Root store={store} />)
})
