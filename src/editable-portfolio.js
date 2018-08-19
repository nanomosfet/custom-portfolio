import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import Root from './components/root'
import './main.scss'
import { createStore } from 'redux'
import initialContent from './components/initial-content'
import convertToEdit from './helpers/convert-to-edit'
let newState = {};
const portfolio = (state = convertToEdit(initialContent), action) => {
  
  switch (action.type) {
    case 'ADD_PAGE':
      return {
        pages: [
          ...state.pages,
          {
            path: `/edit/${action.pageName}`,
            label: action.pageName.toString(),
            rows: []
          }
        ]
      }
    case 'EDIT_PAGE':
      return (
       {
        pages: [
          ...state.pages.map((page, idx) => {
            return (idx === action.key)
              ? {
                ...page,
                label: action.value,
                path: (action.isHome)
                  ? page.path
                  : `/edit/${action.value.replace(/\W/g, '').toLowerCase()}`
              }
              : page
          })
        ]
      })
    case 'DELETE_PAGE':
      return ({
          pages: [
            ...state.pages.filter((page, idx) => (idx !== action.key || action.isHome))
          ]
      })
    case 'ADD_ROW':
      newState = { ...state }
      newState.pages[action.pageIndex].rows.push({
          cols: [
            {
              styleType: 'lightMain',
              items: [
                {
                  itemType: 'header',
                  text: 'Header'
                },
                {
                  itemType: 'leadText',
                  text: 'leadText'
                },
                {
                  itemType: 'pdfDownloadButton',
                  source: 'somePath',
                  text: 'Resume'
                }
              ]
            }
          ]
        })
      return (newState)
    default:
      return state
  }
}

const store = createStore(portfolio)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
