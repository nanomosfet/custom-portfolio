/* eslint no-magic-numbers: "off"*/
import React from 'react'
import { mount } from 'enzyme'
import { EditNavDropdownLink } from '../edit-nav-dropdown-link'
import { MemoryRouter } from 'react-router-dom'

afterEach(() => {
  jest.clearAllMocks()
})

it('mounts', () => {
  const dispatch = jest.fn()
  const button = mount(
    <MemoryRouter initialEntries={['/home']}>
      <EditNavDropdownLink
        dispatch={dispatch}
        columnId={1}
        rowId={1}
        label={'hello'}
        pathTo={'/home'}
        isHome={false}
      />
    </MemoryRouter>)

  expect(button.find('span').length).toEqual(1)
  button.find('span').prop('onClick')()
  expect(dispatch).toHaveBeenCalledTimes(1)

  button.find('input').prop('onChange')({
    target: {
      value: 'helllo'
    }
  })

  expect(dispatch).toHaveBeenCalledTimes(2)

  button.find('input').prop('onChange')({
    target: {
      value: 'helllo'
    }
  })
})

it('is home is true', () => {
  const dispatch = jest.fn()
  const button = mount(
    <MemoryRouter initialEntries={['/home']}>
      <EditNavDropdownLink
        dispatch={dispatch}
        columnId={1}
        rowId={1}
        label={'hello'}
        pathTo={'/home'}
        isHome={true}
      />
    </MemoryRouter>)

  expect(button.find('span').length).toEqual(1)
  button.find('span').prop('onClick')()
  expect(dispatch).toHaveBeenCalledTimes(1)

  button.find('input').prop('onChange')({
    target: {
      value: 'helllo'
    }
  })

  expect(dispatch).toHaveBeenCalledTimes(2)

  button.find('input').prop('onChange')({
    target: {
      value: 'helllo'
    }
  })
})
