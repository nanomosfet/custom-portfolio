import { combineReducers } from 'redux'
import initialContent from './../components/initial-content'
import convertToEdit from './../helpers/convert-to-edit'
const addRow = (state, action) => {
  return {
    ...state,
    [action.pageId]: {
      ...state[action.pageId],
      rows: state[action.pageId].rows.concat(action.rowId)
    }
  }
}

const deleteRow = (state, action) => {
  return {
    ...state,
    [action.page]: {
      ...state[action.page],
      rows: state[action.page].rows.filter((rowId) => rowId !== action.row)
    }
  }
}
const pagesById = (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_PAGE':
      return {
        ...state,
        [action.pageId]: {
          path: `/edit/${action.pageId}`,
          label: `New Page`,
          id: action.pageId,
          rows: []
        }
      }
    case 'EDIT_PAGE':
      return {
        ...state,
        [action.pageId]: {
          ...state[action.pageId],
          label: action.value,
          path: (action.isHome)
            ? state[action.pageId].path
            : `/edit/${action.value.replace(/\W/g, '').toLowerCase()}`
        }
      }
    case 'ADD_ROW': return addRow(state, action)
    case 'DELETE_ROW': return deleteRow(state, action)
    case 'RECEIVE_CONTENT':
      return {
        ...action.content.pages.byId
      }
    default:
      return state
    }
}

const allPages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return state.concat(action.pageId)
    case 'DELETE_PAGE':
      return state.filter((pageId) => (pageId !== action.pageId || action.isHome))
    case 'RECEIVE_CONTENT':
      return [
        ...action.content.pages.allPages
      ]
    default:
      return state
  }
}

export default combineReducers({
  byId: pagesById,
  allPages: allPages
})
