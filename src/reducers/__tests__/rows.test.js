/* eslint no-magic-numbers: "off"*/
import {
  addColumn, receiveContent, deleteRow,
  addRow, deleteColumn
} from '../../actions'

import reducer from './../rows'

test('initialize', () => {
  expect(reducer(undefined, {})).toEqual({ byId: {} })
})

test('addRow', () => {
  const action = addRow(1)

  expect(reducer({}, action)).toEqual({
    byId: {
      [action.rowId]: {
        id: action.rowId,
        cols: [action.colId]
      }
    }
  })
})

test('ADD_COLUMN', () => {
  const action = addColumn(1)

  expect(reducer({
    byId: {
      [action.row]: {
        cols: []
      }
    }
  }, action)).toEqual({
    byId: {
      [action.row]: {
        cols: [action.col]
      }
    }
  })
})

test('DELETE_ROW', () => {
  const action = deleteRow(1, 1)

  expect(reducer({
    byId: {
      [action.row]: {
        cols: [1, 2]
      },
      1234: {
        cols: [1, 2]
      }
    }
  }, action)).toEqual({
    byId: {
      1234: {
        cols: [1, 2]
      }
    }
  })
})

test('DELETE_COLUMN', () => {
  const action = deleteColumn(2, 1)

  expect(reducer({
    byId: {
      [action.rowId]: {
        cols: [1, 2]
      }
    }
  }, action)).toEqual({
    byId: {
      [action.rowId]: {
        cols: [1]
      }
    }
  })
})

test('DELETE_COLUMN last', () => {
  const action = deleteColumn(1, 1)

  expect(reducer({
    byId: {
      [action.rowId]: {
        cols: [1]
      }
    }
  }, action)).toEqual({
    byId: {
      [action.rowId]: {
        cols: [1]
      }
    }
  })
})

test('RECEIVE_CONTENT', () => {
  const action = receiveContent({
    rows: {
      byId: {
        1: {
          id: 1,
          cols: [3, 4]
        }
      }
    }
  })

  expect(reducer({
    byId: {
      1: {
        id: 1,
        cols: [1, 2]
      }
    }
  }, action)).toEqual({
    byId: {
      1: {
        id: 1,
        cols: [3, 4]
      }
    }
  })
})
