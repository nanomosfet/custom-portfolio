/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { shallow } from 'enzyme'
import EditablePage from '../components/editable-page.js'
import SectionColumns from '../containers/section-columns.js'

it('mounts', () => {
  const page = shallow(<EditablePage rows={[1, 2]} pageId={2} />)

  expect(page.find(SectionColumns).length).toEqual(2)
})
