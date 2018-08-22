import React from 'react'
import Item from './../containers/item'
import EditItemType from './../containers/edit-item-type'

const EditableItem = ({ itemId, colId }) => {
  return (
    <div>
      <EditItemType itemId={itemId} colId={colId} />
      <Item itemId={itemId} />
    </div>
  )
}

export default EditableItem
