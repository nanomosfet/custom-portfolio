import React from 'react'
import SectionColumns from './../containers/section-columns'
import AddRowButton from './../containers/add-row-button'

export default class EditablePage extends React.Component {
  render () {
    const { rows, pageId } = this.props

    return (
      <div className="mt-6">
        {rows.map((row) => (<SectionColumns key={row} row={row} page={pageId} />))}
        <AddRowButton pageId={pageId}/>
      </div>
    )
  }
}
