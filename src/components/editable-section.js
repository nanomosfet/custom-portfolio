import React from 'react'
import EditableItem from './editable-item'
import styleMap from './style-map'
import AddItemButton from './../containers/add-item-button'
import DeleteColumnButton from './../containers/delete-column-button.js'

const EditableSection = ({ column, rowId }) => (
  <div className="col-md m-1">
    <div className={ styleMap[column.styleType].box }>
      {column.items.map((itemId, idx) => <EditableItem key={idx} itemId={itemId} colId={column.id}/>)}
      <AddItemButton columnId={column.id}/>
      <DeleteColumnButton rowId={rowId} columnId={column.id}/>
    </div>
  </div>
)

export default EditableSection
