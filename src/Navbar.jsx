import React from 'react'
import { useGlobalContext } from './Controllerr'

const Navbar = () => {
    const {openEvents, openAbout, openTicket} = useGlobalContext()
    return (
        <div>
            <button onClick={openEvents}>Events</button>
            <button onClick={openTicket}>Ticket</button>
            <button onClick={openAbout}>About</button>
        </div>
    )
}

export default Navbar
