/* eslint no-magic-numbers: "off"*/
import {
  addItemImage, fileSaved
} from '../../actions'

import reducer from './../files'

test('initialize', () => {
  expect(reducer(undefined, {})).toEqual({ images: {} })
})

test('ADD_ITEM_IMAGE', () => {
  const action = addItemImage(1, { some: 'object' })

  expect(reducer({}, action)).toEqual({
    images: {
      [action.itemId]: { some: 'object' }
    }
  })
})

test('FILE_SAVED', () => {
  const action = fileSaved(1)

  expect(reducer({
    images: {
      [action.itemId]: { some: 'object' }
    }
  }, action)).toEqual({
    images: {}
  })
})
