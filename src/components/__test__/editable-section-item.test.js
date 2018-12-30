/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import EditableSectionItem from '../editable-section-item.js'
import EditableHeaderItem from '../../containers/editable-header-item.js'

it('mounts', () => {
  const item = shallow(<EditableSectionItem item={{
    itemType: 'header'
  }} />)

  expect(item.find(EditableHeaderItem).length).toEqual(1)

})
