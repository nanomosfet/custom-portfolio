import React from 'react'
import Headline from './headline'
import SectionRow from './section-row'

const Home = () => (
  <div>
    <Headline />
    <SectionRow styleOrder={['light', 'dark', 'light']}/>
    <SectionRow styleOrder={['dark', 'light', 'dark']}/>
  </div>
)

export default Home
