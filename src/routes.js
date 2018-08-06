import React from 'react'
import Home from './home'
import Headline from './headline'

const About = () => <Headline />

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

export default routes
