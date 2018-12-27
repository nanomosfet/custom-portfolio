/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { AddItemButton } from '../add-item-button.js'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(<AddItemButton dispatch={dispatch} />)

  button.find('button').prop('onClick')()
  expect(dispatch).toHaveBeenCalled()
})
