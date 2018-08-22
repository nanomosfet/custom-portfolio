/**
 * Helper function to "un normalize state"
 * @function
 * @param {string} nState - normailzedbState.
 * @description Returns nested state
 * @return {object} - nested state
 */
export default function (nState) {
  const res = {}

  res.pages = nState.pages.allPages.map((pageId) => ({
    ...nState.pages.byId[pageId],
    rows: nState.pages.byId[pageId].rows.map((rowId) => {
      return {
        ...nState.rows.byId[rowId],
        cols: nState.rows.byId[rowId].cols.map((colId) => {
          return {
            ...nState.cols.byId[colId],
            items: nState.cols.byId[colId].items.map((itemId) => {
              return {
                ...nState.items.byId[itemId]
              }
            })
          }
        })
      }
    })
  }))

  return res
}
