import React from 'react'
import { Banner, HeroBanner, HotBlock, SendAMessage } from '../components'

const Homepage = () => {
  return (
    <>
      <HeroBanner />
      <div className="h-[5vh] bg-transparent"></div>
      <HotBlock />
      <div className="h-[5vh] bg-transparent"></div>
      <Banner />
      <SendAMessage />
    </>
  )
}

export default Homepage