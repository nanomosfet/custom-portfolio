import { connect } from 'react-redux'

import EditableSection from '../components/editable-section.js'


const mapStateToProps = (state, ownProps) => {
  const { rowId, columnId } = ownProps
  const column = state.cols.byId[columnId]

  return {
    column,
    rowId
  }
}
const Column = connect(mapStateToProps)(EditableSection)

export default Column

