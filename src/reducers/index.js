import { combineReducers } from 'redux'
import rows from './rows'
import pages from './pages'
import cols from './cols'
import items from './items'

export default combineReducers({
  pages: pages,
  rows: rows,
  cols: cols,
  items: items
})
