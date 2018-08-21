import React from 'react';
import SectionItem from './section-item'
import styleMap from './style-map'
import AddItemButton from './../containers/add-item-button'


const EditableSection = ({ column, pageIndex, rowIndex, colIndex }) => (
    <div className="col-md m-1">
      <div className={ styleMap[column.styleType].box }>
        {column.items.map((item, idx) => <SectionItem key={idx} styleType={column.styleType} item={item} />)}
        <AddItemButton pageIndex={pageIndex} rowIndex={rowIndex} colIndex={colIndex} />
      </div>
    </div>
)

export default EditableSection
