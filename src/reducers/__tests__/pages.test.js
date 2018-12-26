/* eslint no-magic-numbers: "off"*/
import {
  addPage, editPage, addRow,
  deleteRow, deletePage
} from '../../actions'

import reducer from './../pages'

test('initialize', () => {
  expect(reducer(undefined, {})).toEqual({
    byId: {
      1: {
        path: '/edit/',
        label: 'Home',
        id: 1,
        rows: []
      }
    },
    allPages: [1]
  })
})

test('addPage', () => {
  const action = addPage()

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'Home',
        rows: [1]
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      [action.pageId]: {
        id: action.pageId,
        label: 'New Page',
        rows: [],
        path: `/edit/${action.pageId}`
      },
      1234: {
        id: 1234,
        label: 'Home',
        rows: [1]
      }
    },
    allPages: [1234, action.pageId]
  })
})

test('editPage is home', () => {
  const action = editPage('something', 1234, true)

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'Home',
        rows: [1],
        path: '/edit/'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/'
      }
    },
    allPages: [1234]
  })
})

test('editPage not home', () => {
  const action = editPage('nothing', 1234, false)

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1234: {
        id: 1234,
        label: 'nothing',
        rows: [1],
        path: '/edit/nothing'
      }
    },
    allPages: [1234]
  })
})

test('addRow', () => {
  const action = addRow(1234)

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1, action.rowId],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  })
})

test('delete row', () => {
  const action = deleteRow(1234, 1)

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  })
})

test('delete page not home', () => {
  const action = deletePage(1234, false)

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: []
  })
})

test('delete page home', () => {
  const action = deletePage(1234, true)

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  })
})

test('delete page home', () => {
  const action = {
    type: 'RECEIVE_CONTENT',
    content: {
      pages: {
        byId: {
          1: {
            id: 1
          }
        },
        allPages: [1]
      }
    }
  }

  expect(reducer({
    byId: {
      1234: {
        id: 1234,
        label: 'something',
        rows: [1],
        path: '/edit/something'
      }
    },
    allPages: [1234]
  }, action)).toEqual({
    byId: {
      1: {
        id: 1
      }
    },
    allPages: [1]
  })
})
