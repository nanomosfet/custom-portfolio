import { connect } from 'react-redux'
import deepCopy from './../helpers/deep-copy'

import EditableSectionRow from '../components/editable-section-row.js'

export const mapStateToProps = (state, ownProps) => {
  const { page, row } = ownProps
  const columns = deepCopy(state.rows.byId[ownProps.row].cols)

  return {
    columns,
    page,
    row
  }
}
const SectionColumns = connect(mapStateToProps)(EditableSectionRow)

export default SectionColumns
