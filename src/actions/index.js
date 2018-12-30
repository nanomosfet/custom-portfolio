const randomId = () => {
  const numValues = 4
  const stringLength = 36
  const randomValues = new Uint32Array(numValues)

  window.crypto.getRandomValues(randomValues)
  let res = ''

  randomValues.forEach((value) => {
    res += value.toString(stringLength)
  })

  return res
}
const generateRowId = () => randomId()
const generatePageId = () => randomId()
const generateColId = () => randomId()
const generateItemId = () => randomId()

export const addPage = () => ({
  type: 'ADD_PAGE',
  pageId: generatePageId()
})
export const addItem = (colId) => ({
  type: 'ADD_ITEM',
  colId,
  itemId: generateItemId()
})

export const editPage = (newVal, pageId, isHome) => ({
  type: 'EDIT_PAGE',
  value: newVal,
  pageId: pageId,
  isHome: isHome
})

export const deletePage = (pageId, isHome) => ({
  type: 'DELETE_PAGE',
  pageId: pageId,
  isHome: isHome
})

export const addRow = (pageId) => ({
  type: 'ADD_ROW',
  pageId: pageId,
  rowId: generateRowId(),
  colId: generateColId()
})

export const deleteRow = (page, row) => ({
  type: 'DELETE_ROW',
  page,
  row
})

export const addColumn = (row) => ({
  type: 'ADD_COLUMN',
  row: row,
  col: generateColId()
})

export const editItemText = (itemId, newText) => ({
  type: 'EDIT_ITEM_TEXT',
  itemId,
  newText
})

export const editItemType = (itemId, newType) => ({
  type: 'EDIT_ITEM_TYPE',
  itemId,
  newType
})

export const deleteItem = (itemId, colId) => ({
  type: 'DELETE_ITEM',
  itemId,
  colId
})

export const addItemImage = (itemId, image) => ({
  type: 'ADD_IMAGE_ITEM',
  itemId,
  image
})

export const receiveContent = (content) => ({
  type: 'RECEIVE_CONTENT',
  content
})

export const updateItemSource = (itemId, newSource) => {
  return {
    type: 'UPDATE_ITEM_SOURCE',
    itemId: itemId,
    source: newSource
  }
}

export const fileSaved = (itemId) => {
  return {
    type: 'FILE_SAVED',
    itemId: itemId
  }
}

export const deleteColumn = (colId, rowId) => ({
  type: 'DELETE_COLUMN',
  colId,
  rowId
})
