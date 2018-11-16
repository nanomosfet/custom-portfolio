import React from 'react'
import styleMap from './style-map'
import EditableHeaderItem from './../containers/editable-header-item'
import EditableLeadItem from './../containers/editable-lead-item'
import EditableImageItem from './../containers/editable-image-item'
const EditableSectionItem = ({ item, styleType }) => {
  const itemMap = {
    header: <EditableHeaderItem item={item}/>,
    pdfDownloadButton: <a className="lead lead font-weight-normal text-dark" href="#">{item.text}</a>,
    leadText: <EditableLeadItem item={item}/>,
    image: <EditableImageItem item={item} />
  }

  return itemMap[item.itemType]
}

export default EditableSectionItem
