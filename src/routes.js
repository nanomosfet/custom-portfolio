import React from 'react'
import Home from './home'
import Headline from './headline'

const About = () => <Headline />

const routes = [
  {
    path: '/',
    component: Home,
    label: 'Home'
  },
  {
    path: '/about',
    component: About,
    label: 'About'
  },
  {
    path: '/contact',
    component: About,
    label: 'Contact'
  }
]

export default routes
