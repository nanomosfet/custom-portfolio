let rowId = 2
let pageNum = 2
let colNum = 2
let itemIdCount = 10

const generateRowId = () => ++rowId
const generatePageId = () => ++pageNum
const generateColId = () => ++colNum
const generateItemId = () => ++itemIdCount

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
