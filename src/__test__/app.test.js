import React from 'react'
import { mount } from 'enzyme'
import App from '../components/app.js'
import Page from '../components/page.js'
import unNormalize from '../helpers/unNormalize'
import initalState from '../../server/initial-state.json'

it('mounts', () => {
  const page = mount(<App content={unNormalize(initalState)} />)

  expect(page.find(Page).length).toEqual(1)
})
