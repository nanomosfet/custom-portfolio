import convertToNormal from './../../helpers/convert-to-normal'
import convertToEdit from '../../helpers/convert-to-edit'
import { receiveContent, updateItemSource, fileSaved } from '../../actions'

const saveFiles = (files) => {
  return (dispatch) => {
    const form = new FormData()
    const ids = []

    Object.keys(files).forEach((imageId) => {
      const image = files[imageId]

      ids.push(imageId)
      form.append('files', image)
    })
    form.append('ids', JSON.stringify(ids))

    return fetch('/api/save/files', {
      method: 'POST',
      body: form
    }).then((res) => res.json())
      .then((res) => {
        res.forEach((file) => {
          dispatch(updateItemSource(file.id, file.path))
          dispatch(fileSaved(file.id))
        })
      })
  }
}

const saveState = () => {
  return (dispatch, getState) => {
    return fetch('/api/save/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(convertToNormal(getState()))
    }).then((res) => res.json())
  }
}

export const savePortfolio = () => {
  return (dispatch, getState) => {
    return dispatch(saveFiles(getState().files.images)).then(() => {
      dispatch(saveState())
    })

  }
}

export const requestContent = () => {
  return (dispatch) => {
    return fetch('/api/latest/')
      .then((res) => res.json())
      .then((res) => dispatch(receiveContent(convertToEdit(res))))
  }
}
