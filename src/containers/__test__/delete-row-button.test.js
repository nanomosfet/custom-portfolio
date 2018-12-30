/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { DeleteRowButton } from '../delete-row-button'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(<DeleteRowButton dispatch={dispatch} />)

  button.find('button').prop('onClick')()
  expect(dispatch).toHaveBeenCalled()
})
