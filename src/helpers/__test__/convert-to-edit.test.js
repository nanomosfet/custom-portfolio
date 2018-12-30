import convertToEdit from '../convert-to-edit'

test('convertToEdit', () => {
  expect(convertToEdit({
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
  })).toEqual({
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
  })
})
