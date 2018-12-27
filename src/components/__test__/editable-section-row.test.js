/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import EditableSectionRow from '../editable-section-row'
import Column from '../../containers/column'

it('mounts', () => {
  const item = shallow(<EditableSectionRow columns={[1, 2, 3]} />)

  expect(item.find(Column).length).toEqual(3)

})
