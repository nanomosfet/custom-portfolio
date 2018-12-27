/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import EditableSection from '../editable-section'
import EditableItem from '../editable-item'

it('mounts', () => {
  const item = shallow(<EditableSection column={{
    items: [1, 2, 3],
    id: 1
  }} />)

  expect(item.find(EditableItem).length).toEqual(3)

})
