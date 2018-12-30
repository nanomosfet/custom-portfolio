/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { AddRowButton } from '../add-row-button.js'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(<AddRowButton dispatch={dispatch} />)

  button.find('button').prop('onClick')()
  expect(dispatch).toHaveBeenCalled()
})
