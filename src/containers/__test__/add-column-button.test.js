/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { AddColumnButton } from '../add-column-button.js'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(<AddColumnButton dispatch={dispatch} />)

  button.find('button').prop('onClick')()
  expect(dispatch).toHaveBeenCalled()
})
