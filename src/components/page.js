import React from 'react'
import SectionRow from './section-row'
import AddRowButton from './../containers/add-row-button'

export default class Page extends React.Component {
  render () {
    const { pageContent, pageIndex } = this.props

    return (
      <div className="mt-6">
        {pageContent.rows.map((row, idx) => (<SectionRow key={idx} columns={row.cols} />))}
        <AddRowButton pageIndex={pageIndex}/>
      </div>
    )
  }
}
