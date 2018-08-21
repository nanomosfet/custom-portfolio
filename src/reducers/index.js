import reduceReducers from 'reduce-reducers';
import initialContent from './../components/initial-content'
import convertToEdit from './../helpers/convert-to-edit'
import rows from './rows'
import pages from './pages'
import cols from './cols'
import items from './items'

export default reduceReducers(pages, rows, cols, items, convertToEdit(initialContent))
