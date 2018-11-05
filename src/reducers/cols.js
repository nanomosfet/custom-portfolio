/* eslint no-magic-numbers: ["error", { "ignore": [1] }] */
import deepCopy from '../helpers/deep-copy'

import { combineReducers } from 'redux'
import initialContent from './../components/initial-content'

let newState = {}
let curNumCols = 0;

let lastColId = 2
const generateColId = () => ++lastColId

const addRow = (state, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return {
        ...state,
        [action.colId]: {
          id: action.colId,
          styleType: 'lightMain',
          items: []
        }
      }
    default: return state
  }
}

const addItem = (state, action) => {
  return {
    ...state,
    [action.colId]: {
      ...state[action.colId],
      items: [...state[action.colId].items, action.itemId]
    }
  }
}

const deleteItem = (state, action) => {
  return {
    ...state,
    [action.colId]: {
      ...state[action.colId],
      items: state[action.colId].items.filter((itemId) => action.itemId !== itemId)
    }
  }
}

const colsById = (state = initialContent.cols.byId, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        [action.col]: {
          id: action.col,
          styleType: 'lightMain',
          items: []
        }
      }
    case 'ADD_ITEM': return addItem(state, action)
    case 'ADD_ROW': return addRow(state, action)
    case 'DELETE_ITEM': return deleteItem(state, action)
    default:
      return state
  }
}


const cols = combineReducers({
  byId: colsById
})

export default cols
