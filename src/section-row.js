import React from 'react';
import Section from './section'


const SectionRow = ({ styleOrder }) => (
  <div className="row">
    {styleOrder.map((styleType, idx) => (<Section key={idx} styleType={styleType} />))}
  </div>
)

export default SectionRow
