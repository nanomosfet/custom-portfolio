import { combineReducers } from 'redux'

const defaultItemContent = {
  itemType: 'header',
  text: 'Header'
}

const itemsById = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      [action.itemId]: {
        ...defaultItemContent,
        id: action.itemId
      }
    }
  case 'ADD_IMAGE_ITEM':
    return {
      ...state,
      [action.itemId]: {
        ...state[action.itemId],
        source: window.URL.createObjectURL(action.image),
        isAdded: true
      }
    }
  case 'EDIT_ITEM_TEXT':
    return {
      ...state,
      [action.itemId]: {
        ...state[action.itemId],
        text: action.newText
      }
    }
  case 'EDIT_ITEM_TYPE':
    return {
      ...state,
      [action.itemId]: {
        ...state[action.itemId],
        itemType: action.newType
      }
    }
  case 'RECEIVE_CONTENT':
    return {
      ...action.content.items.byId
    }
  case 'UPDATE_ITEM_SOURCE':
    return {
      ...state,
      [action.itemId]: {
        ...state[action.itemId],
        source: `/uploads/${action.source}`
      }
    }
  default: return state
  }
}

const items = combineReducers({
  byId: itemsById
})

export default items
