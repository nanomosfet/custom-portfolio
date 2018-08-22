import { combineReducers } from 'redux'
import initialContent from './../components/initial-content'

const defaultItemContent = {
  itemType: 'header',
  text: 'Header'
}

const itemsById = (state = initialContent.items.byId, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.itemId]: {
          ...defaultItemContent,
          id: action.itemId
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
    default:
      return state
  }
}

const items = combineReducers({
  byId: itemsById
})

export default items
