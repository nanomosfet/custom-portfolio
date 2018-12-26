/* eslint no-magic-numbers: "off"*/
import {
  addColumn, addItem,
  addRow, deleteItem
} from '../../actions'

import reducer from './../cols'

test('initialize', () => {
  expect(reducer(undefined, {})).toEqual({ byId: {} })
})

test('addRow', () => {
  const action = addRow(1)

  expect(reducer({}, action)).toEqual({
    byId: {
      [action.colId]: {
        id: action.colId,
        styleType: 'lightMain',
        items: []
      }
    }
  })
})

test('ADD_COLUMN', () => {
  const action = addColumn(1)

  expect(reducer({}, action)).toEqual({
    byId: {
      [action.col]: {
        id: action.col,
        styleType: 'lightMain',
        items: []
      }
    }
  })
})

test('DELETE_ITEM', () => {
  const action = deleteItem(1, 1)

  expect(reducer({
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [1, 2]
      }
    }
  }, action)).toEqual({
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [2]
      }
    }
  })
})

test('ADD_ITEM', () => {
  const action = addItem(1)

  expect(reducer({
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [1, 2]
      }
    }
  }, action)).toEqual({
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [1, 2, action.itemId]
      }
    }
  })
})

test('RECEIVE_CONTENT', () => {
  const action = {
    type: 'RECEIVE_CONTENT',
    content: {
      cols: {
        byId: {
          1: {
            id: 1
          }
        }
      }
    }
  }

  expect(reducer({
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [1, 2]
      }
    }
  }, action)).toEqual({
    byId: {
      1: {
        id: 1
      }
    }
  })
})
