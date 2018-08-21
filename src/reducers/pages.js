const pages = (state, action) => {
  switch (action.type) {
    case 'ADD_PAGE':
      return {
        pages: [
          ...state.pages,
          {
            path: `/edit/${action.pageName}`,
            label: action.pageName.toString(),
            rows: []
          }
        ]
      }
    case 'EDIT_PAGE':
      return (
       {
        pages: [
          ...state.pages.map((page, idx) => {
            return (idx === action.key)
              ? {
                ...page,
                label: action.value,
                path: (action.isHome)
                  ? page.path
                  : `/edit/${action.value.replace(/\W/g, '').toLowerCase()}`
              }
              : page
          })
        ]
      })
    case 'DELETE_PAGE':
      return ({
          pages: [
            ...state.pages.filter((page, idx) => (idx !== action.key || action.isHome))
          ]
      })
    default:
      return state
    }
}

export default pages
