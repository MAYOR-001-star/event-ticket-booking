import React from 'react'
import Events from './Events'
import MyTickets from './MyTickets'
import AboutProject from './AboutProject'
import Navbar from './Navbar'
import EventSection from './EventSection'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Events />
      <EventSection />
      <MyTickets />
      <AboutProject />
    </div>
  )
}

export default App



