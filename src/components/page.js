import React from 'react'
import SectionRow from './section-row'

export default class Page extends React.Component {
  render () {
    const { pageContent } = this.props

    return (
      <div className="mt-6">
        {pageContent.rows.map((row, idx) => (<SectionRow key={idx} columns={row.cols} />))}
      </div>
    )
  }
}
