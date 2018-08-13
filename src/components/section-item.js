import React from 'react'
import styleMap from './style-map'

const SectionItem = ({ item, styleType }) => {
  const itemMap = {
    header: <h1 >{item.text}</h1>,
    pdfDownloadButton: <a className="lead lead font-weight-normal text-dark" href="#">{item.text}</a>,
    leadText: <p className="lead font-weight-normal my-1 py-1" >{item.text}</p>,
    image: <div className={ styleMap[styleType].image } style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '300px', backgroundImage: 'url("https://cdn.britannica.com/78/43678-004-8F18BDDF.jpg")' }}></div>
  }

  return itemMap[item.itemType]
}

export default SectionItem
