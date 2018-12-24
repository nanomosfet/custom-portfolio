/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { EditableImageItem } from '../containers/editable-image-item.js'

it('mounts is added true', () => {
  const dispatch = jest.fn()
  const input = shallow(
    <EditableImageItem
      dispatch={dispatch}
      item={{
        id: 1,
        isAdded: true,
        source: 'source'
      }}
    />)

  input.find('input').prop('onChange')({
    target: {
      files: ['file']
    }
  })
  expect(dispatch).toHaveBeenCalled()
})

it('mounts is added true', () => {
  shallow(
    <EditableImageItem
      dispatch={jest.fn()}
      item={{
        id: 1,
        isAdded: false,
        source: 'source'
      }}
    />)
})
