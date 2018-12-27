/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { DeleteColumnButton } from '../delete-column-button'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(
    <DeleteColumnButton
      dispatch={dispatch}
      columnId={1}
      rowId={1}
    />)

  button.find('button').prop('onClick')()
  expect(dispatch).toHaveBeenCalled()
})
