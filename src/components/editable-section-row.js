import React from 'react';
import Section from './section'
import DeleteRowButton from './../containers/delete-row-button.js'
import NumColsDropdown from './../containers/num-cols-dropdown.js'

const EditableSectionRow = ({ columns, pageIndex, rowIndex }) => (
  <div className="row row-eq-height">
    {columns.map((column, idx) => (<Section key={idx} column={column} />))}
    <DeleteRowButton pageIndex={pageIndex} rowIndex={rowIndex} />
    <NumColsDropdown pageIndex={pageIndex} rowIndex={rowIndex} curNumCols={columns.length}/>
  </div>
)

export default EditableSectionRow
