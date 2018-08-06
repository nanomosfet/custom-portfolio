import React from 'react';
import Section from './section'


const SectionRow = ({ styleOrder }) => (
  <div className="row">
    {styleOrder.map((style, idx) => (<Section key={idx} style={style} />))}
  </div>
)

export default SectionRow
