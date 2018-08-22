import React from 'react'
import styleMap from './style-map'
import EditableHeaderItem from './../containers/editable-header-item'
import EditableLeadItem from './../containers/editable-lead-item'

const EditableSectionItem = ({ item, styleType }) => {
  const itemMap = {
    header: <EditableHeaderItem item={item}/>,
    pdfDownloadButton: <a className="lead lead font-weight-normal text-dark" href="#">{item.text}</a>,
    leadText: <EditableLeadItem item={item}/>,
    image: <div className={ styleMap[styleType].image } style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '300px', backgroundImage: 'url("https://cdn.britannica.com/78/43678-004-8F18BDDF.jpg")' }}></div>
  }

  return itemMap[item.itemType]
}

export default EditableSectionItem
