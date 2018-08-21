/* eslint no-magic-numbers: ["error", { "ignore": [1] }] */
import deepCopy from '../helpers/deep-copy'
let newState = {}
const defaultItemContent = {
      itemType: 'header',
      text: 'Header'
    }
const items = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action)
      newState = deepCopy(state)
      newState.pages[action.pageIndex].rows[action.rowIndex].cols[action.colIndex].items.push(deepCopy(defaultItemContent))
      console.log(newState)

      return newState
    default:
      return state
  }
}

export default items
