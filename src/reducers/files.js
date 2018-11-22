import { combineReducers } from 'redux'

const removeFromState = (id, state) => {
  const res = { ...state }

  window.Reflect.deleteProperty(res, id)

  return res
}

const images = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_IMAGE_ITEM':
    return {
      ...state,
      [action.itemId]: action.image
    }
  case 'FILE_SAVED':
    return removeFromState(action.itemId, state)
  default:
    return state
  }
}

export default combineReducers({
  images
})
