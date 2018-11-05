import deepCopy from './deep-copy'
const convertToEdit = (initialState) => {
  const ret = deepCopy(initialState)
  let oldPath = '';

  Object.keys(ret.pages.byId).forEach((pageId) => {
    oldPath = ret.pages.byId[pageId].path
    ret.pages.byId[pageId].path = `/edit${oldPath}`
  })

  return ret;
}


export default convertToEdit
