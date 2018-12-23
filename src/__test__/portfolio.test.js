/* eslint no-magic-numbers: "off"*/

import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import Portfolio from '../containers/portfolio'
import EditableApp from '../components/editable-app'
import { Route } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

it('should mount', () => {
  const store = createStore(rootReducer)
  const component = mount(<Provider store={store}>
    <MemoryRouter initialEntries={['/edit/']} initialIndex={0}>
      <Portfolio />
    </MemoryRouter>

  </Provider>)

  const appComp = component.find(EditableApp)

  expect(appComp.find(Route).length).toEqual(2)

  appComp.find(Route).forEach((node) => {
    console.log(node.props())
    if (node.props().render) {
      console.log('dfd')
      console.log(node.render())
    }
  })
})
