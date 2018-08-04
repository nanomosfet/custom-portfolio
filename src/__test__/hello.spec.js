import React from 'react'
import Hello from '../hello.js'
import renderer from 'react-test-renderer'

test('renders successfully', () => {
  const tree = renderer
    .create(<Hello />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
