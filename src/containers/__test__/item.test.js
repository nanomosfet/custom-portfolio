/* eslint no-magic-numbers: "off"*/
import { mapStateToProps } from '../item'

jest.mock('react-redux', () => ({
  connect: jest.fn().mockReturnValue(jest.fn())
}))

it('mounts', () => {
  const result = mapStateToProps(
    {
      items: {
        byId: {
          1: {
            id: 1
          }
        }
      }
    },
    {
      itemId: 1
    })

  expect(result).toEqual({
    item: { id: 1 }
  })
})
