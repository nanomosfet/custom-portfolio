import { connect } from 'react-redux'

import SectionItem from '../components/editable-section-item.js'

export const mapStateToProps = (state, ownProps) => {
  const item = state.items.byId[ownProps.itemId]

  return { item }
}
const Item = connect(mapStateToProps)(SectionItem)

export default Item
