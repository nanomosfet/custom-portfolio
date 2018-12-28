/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { EditableHeaderItem } from '../editable-header-item'
import Textarea from 'react-textarea-autosize'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(
    <EditableHeaderItem
      dispatch={dispatch}
      item={{
        text: 'something',
        id: 2
      }}
    />)

  expect(button.find(Textarea).length).toEqual(1)

  button.find(Textarea).prop('onChange')({
    target: {
      value: 1
    }
  })
  expect(dispatch).toHaveBeenCalled()
})
