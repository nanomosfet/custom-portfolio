import React from 'react'
import styleMap from './style-map'

const SectionItem = ({ item, styleType }) => {
  const itemMap = {
    header: <h1 >{item.text}</h1>,
    pdfDownloadButton: <a className="lead lead font-weight-normal text-dark" href="#">{item.text}</a>,
    leadText: <p className="lead font-weight-normal">{item.text}</p>,
    image: <div className={ styleMap[styleType].image } style={{ height: '300px' }}></div>
  }

  return (<div>{itemMap[item.itemType]}</div>)
}

export default SectionItem
