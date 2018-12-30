/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import EditableItem from '../editable-item'
import Item from '../../containers/item'

it('mounts', () => {
  const page = shallow(<EditableItem rows={[1, 2]} pageId={2} />)

  expect(page.find(Item).length).toEqual(1)
})
