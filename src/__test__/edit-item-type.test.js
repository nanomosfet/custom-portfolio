/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import { EditItemType } from '../containers/edit-item-type.js'

it('mounts', () => {
  const dispatch = jest.fn()
  const button = shallow(<EditItemType dispatch={dispatch} itemId={1} colId={2} />)

  button.find('a').forEach((link, idx) => {
    link.prop('onClick')()
    expect(dispatch).toHaveBeenCalledTimes(idx + 1)
  })

})
