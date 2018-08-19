import React from 'react';
import Section from './section'
import DeleteRowButton from './../containers/delete-row-button.js'

const EditableSectionRow = ({ columns, pageIndex, rowIndex }) => (
  <div className="row">
    {columns.map((column, idx) => (<Section key={idx} column={column} />))}
    <DeleteRowButton pageIndex={pageIndex} rowIndex={rowIndex} className="clearfix"/>
  </div>
)

export default EditableSectionRow
