import { combineReducers } from 'redux'

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

const colsById = (state = {}, action) => {
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
  case 'RECEIVE_CONTENT':
    return {
      ...action.content.cols.byId
    }
  default:
    return state
  }
}

const cols = combineReducers({
  byId: colsById
})

export default cols
