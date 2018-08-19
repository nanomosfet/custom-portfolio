/* eslint no-magic-numbers: ["error", { "ignore": [1] }] */

let newState = {}
let curNumCols = 0;
const defaultColContent = {
  styleType: 'lightMain',
  items: [
    {
      itemType: 'header',
      text: 'Header'
    },
    {
      itemType: 'leadText',
      text: 'leadText'
    },
    {
      itemType: 'pdfDownloadButton',
      source: 'somePath',
      text: 'Resume'
    }
  ]
}
const cols = (state, action) => {
  switch (action.type) {
    case 'SET_COLUMNS':
      curNumCols = state.pages[action.pageIndex].rows[action.rowIndex].cols.length
      newState = { ...state }
      console.log(action.numCols > curNumCols)
      if (action.numCols > curNumCols) {
        for (let idx = curNumCols; idx < action.numCols; idx++) {
          newState.pages[action.pageIndex].rows[action.rowIndex].cols.push(defaultColContent)
        }
      } else {
        newState.pages[action.pageIndex].rows[action.rowIndex].cols.splice(action.numCols)
      }

      return newState
    default:
      return state
  }
}

export default cols
