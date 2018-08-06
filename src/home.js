import React from 'react'
import Headline from './headline'
import SectionRow from './section-row'

const Home = () => (
  <div>
    <Headline />
    <SectionRow styleOrder={['light', 'dark']}/>
    <SectionRow styleOrder={['dark', 'light']}/>
  </div>
)

export default Home
