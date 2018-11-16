import React from 'react'
import { connect } from 'react-redux'
import { addItemImage } from './../actions'
import './editable-image-item.css'
const EditableImageItem = ({ dispatch, item }) => {
  return (
    <div
      className="w-100 rounded-top mx-auto"
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '300px',
        backgroundImage: `url('${item.source}')`
      }}>
      <label className={item.isAdded ? 'p bg-success image-upload image-added' : 'p bg-success image-upload'} >Add image
        <input type="file" className="image-upload"
          onChange={(event) => dispatch(addItemImage(item.id, event.target.files[0]))}
        />
      </label>
      </div>
  )
}

export default connect()(EditableImageItem)
