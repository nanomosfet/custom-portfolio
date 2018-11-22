import React from 'react'
import styleMap from './style-map'

const SectionItem = ({ item, styleType }) => {
  const itemMap = {
    header: <h1>{item.text}</h1>,
    pdfDownloadButton: <a className="lead lead font-weight-normal text-dark" href="#">{item.text}</a>,
    leadText: <p className="lead">{item.text}</p>,
    image: <div className={ styleMap[styleType].image }
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '300px',
        backgroundImage: `url("${item.source}")`
      }}></div>
  }

  return itemMap[item.itemType]
}

export default SectionItem
