import React from 'react'
import EditableSectionRow from './editable-section-row'
import AddRowButton from './../containers/add-row-button'

export default class EditablePage extends React.Component {
  render () {
    const { pageContent, pageIndex } = this.props

    return (
      <div className="mt-6">
        {pageContent.rows.map((row, idx) => (<EditableSectionRow pageIndex={pageIndex} rowIndex={idx} key={idx} columns={row.cols} />))}
        <AddRowButton pageIndex={pageIndex}/>
      </div>
    )
  }
}
