import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { savePortfolio } from './../actions/async-actions'
import fetchMock from 'fetch-mock'

jest.mock('./../helpers/convert-to-normal', () => jest.fn((arg) => arg))

const mockStore = configureMockStore([thunk])

describe('async-actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  test('savePortfolio', () => {
    fetchMock.post('*', [
      {
        id: 1,
        path: 'hello'
      }, {
        id: 2,
        path: 'goodBye'
      }
    ])

    const expectedActions = [
      {
        type: 'UPDATE_ITEM_SOURCE',
        itemId: 1,
        source: 'hello'
      },
      {
        type: 'FILE_SAVED',
        itemId: 1
      },
      {
        type: 'UPDATE_ITEM_SOURCE',
        itemId: 2,
        source: 'goodBye'
      },
      {
        type: 'FILE_SAVED',
        itemId: 2
      }
    ]
    const store = mockStore({
      files: {
        images: {
          something: 'tim'
        }
      }
    })

    return store.dispatch(savePortfolio()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
