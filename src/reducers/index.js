import reduceReducers from 'reduce-reducers';
import initialContent from './../components/initial-content'
import convertToEdit from './../helpers/convert-to-edit'
import rows from './rows'
import pages from './pages'

export default reduceReducers(pages, rows, convertToEdit(initialContent))
