/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { EditNavDropdownLink } from '../edit-nav-dropdown-link'
import { Route } from 'react-router-dom'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(
    <EditNavDropdownLink
      dispatch={dispatch}
      columnId={1}
      rowId={1}
    />)

  expect(button.find(Route).length).toEqual(1)
})
