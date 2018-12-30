/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { AddPageButton } from '../add-page-button.js'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(<AddPageButton dispatch={dispatch} />)

  button.find('a').prop('onClick')()
  expect(dispatch).toHaveBeenCalled()
})
