import convertToNormal from '../convert-to-normal'

test('convertToEdit', () => {
  expect(convertToNormal({
    pages: {
      byId: {
        1: {
          path: '/edit/'
        },
        2: {
          path: '/edit/lala'
        }
      }
    }
  })).toEqual({
    pages: {
      byId: {
        1: {
          path: '/'
        },
        2: {
          path: '/lala'
        }
      }
    }
  })
})
