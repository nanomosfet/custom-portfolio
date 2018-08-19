let newState = {}

const rows = (state, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      newState = { ...state }
      newState.pages[action.pageIndex].rows.push({
          cols: [
            {
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
          ]
        })

      return (newState)
    default:
      return state
  }
}

export default rows
