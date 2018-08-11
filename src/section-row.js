import React from 'react';
import Section from './section'


const SectionRow = ({ columns }) => (
  <div className="row">
    {columns.map((column, idx) => (<Section key={idx} column={column} />))}
  </div>
)

export default SectionRow
