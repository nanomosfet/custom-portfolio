import React from 'react';
import SectionItem from './section-item'
import styleMap from './style-map'


const Section = ({ column }) => (
    <div className="col-md">
      <div className={ styleMap[column.styleType].box }>
        {column.items.map((item, idx) => <SectionItem key={idx} styleType={column.styleType} item={item} />)}
      </div>
    </div>
)

export default Section
