const convertToEdit = (initialState) => {
  const ret = { ...initialState }

  ret.pages.forEach((page) => {
    page.path = `/edit${page.path}`
  })

  return ret;
}

export default convertToEdit
