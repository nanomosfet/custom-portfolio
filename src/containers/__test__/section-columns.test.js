/* eslint no-magic-numbers: "off"*/
import { mapStateToProps } from '../section-columns'

jest.mock('react-redux', () => ({
  connect: jest.fn().mockReturnValue(jest.fn())
}))

it('mounts', () => {
  const result = mapStateToProps(
    {
      rows: {
        byId: {
          1: {
            cols: [1, 2, 3]
          }
        }
      }
    },
    {
      page: 1,
      row: 1
    })

  expect(result).toEqual({
    columns: [1, 2, 3],
    page: 1,
    row: 1
  })
})
