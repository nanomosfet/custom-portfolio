import React from 'react'
import Column from './../containers/column'
import DeleteRowButton from './../containers/delete-row-button.js'
import AddColumnButton from './../containers/add-column-button.js'

const EditableSectionRow = ({ columns, page, row }) => (
  <div className="row row-eq-height">
    {columns.map((columnId) => (<Column key={columnId} columnId={columnId} rowId={row} />))}
    <DeleteRowButton page={page} row={row} />
    <AddColumnButton rowId={row} />
  </div>
)

export default EditableSectionRow
