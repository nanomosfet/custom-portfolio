import items from './../reducers/items'

global.URL = {
  createObjectURL: jest.fn().mockReturnValue('someObjectUrl')
}

test('initialization', () => {
  expect(items(undefined,
    {}
  )).toEqual({
    byId: {}
  })
})

test('ADD_ITEM', () => {
  expect(items(
    {
      byId: {}
    },
    {
      type: 'ADD_ITEM',
      itemId: 1
    }
  )).toEqual({
    byId: {
      1: {
        id: 1,
        itemType: 'header',
        text: 'Header'
      }
    }
  })
})
test('ADD_IMAGE_ITEM', () => {
  expect(items(
    {
      byId: {
        1: {
          id: 1,
          itemType: 'header',
          text: 'text'
        }
      }
    },
    {
      type: 'ADD_IMAGE_ITEM',
      itemId: 1,
      image: {}
    }
  )).toEqual({
    byId: {
      1: {
        id: 1,
          itemType: 'header',
          text: 'text',
          source: 'someObjectUrl'
      }
    }
  })
})
test('RECEIVE_CONTENT', () => {
  expect(items(
    {
      byId: {}
    },
    {
      type: 'RECEIVE_CONTENT',
      content: {
        items: {
          byId: {
            1: {
              id: 1,
              itemType: 'header',
              text: 'text'
            }
          }
        }
      }
    }
  )).toEqual({
    byId: {
      1: {
        id: 1,
        itemType: 'header',
        text: 'text'
      }
    }
  })
})
test('EDIT_ITEM_TEXT', () => {
  expect(items(
    {
      byId: {
        1: {
          id: 1,
          itemType: 'header',
          text: 'oldVal'
        }
      }
    },
    {
      type: 'EDIT_ITEM_TEXT',
      itemId: 1,
      newText: 'newText'
    }
  )).toEqual({
    byId: {
      1: {
        id: 1,
        itemType: 'header',
        text: 'newText'
      }
    }
  })
})
test('EDIT_ITEM_TYPE', () => {
  expect(items(
    {
      byId: {
        1: {
          id: 1,
          itemType: 'header',
          text: 'text'
        }
      }
    },
    {
      type: 'EDIT_ITEM_TYPE',
      itemId: 1,
      newType: 'lead'
    }
  )).toEqual({
    byId: {
      1: {
        id: 1,
        itemType: 'lead',
        text: 'text'
      }
    }
  })
})
test('UPDATE_ITEM_SOURCE', () => {
  expect(items(
    {
      byId: {
        1: {
          id: 1,
          itemType: 'header',
          text: 'text',
          source: 'oldSource'
        }
      }
    },
    {
      type: 'UPDATE_ITEM_SOURCE',
      itemId: 1,
      source: 'newSource'
    }
  )).toEqual({
    byId: {
      1: {
        id: 1,
        itemType: 'header',
        text: 'text',
        source: '/uploads/newSource'
      }
    }
  })
})

