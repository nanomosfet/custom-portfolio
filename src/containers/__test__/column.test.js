/* eslint no-magic-numbers: "off"*/
import { mapStateToProps } from '../column.js'

jest.mock('react-redux', () => ({
  connect: jest.fn().mockReturnValue(jest.fn())
}))

it('mounts', () => {
  const result = mapStateToProps(
    {
      cols: {
        byId: {
          1: {
            stuff: 'stuff'
          }
        }
      }
    },
    {
      columnId: 1,
      rowId: 2
    })

  expect(result).toEqual({
    column: { stuff: 'stuff' },
    rowId: 2
  })
})
