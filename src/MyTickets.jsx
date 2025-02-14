import React from 'react'
import { useGlobalContext } from './Controllerr'

const MyTickets = () => {
    const {isTicketOpen} = useGlobalContext()
    return (
        <div className={isTicketOpen? "block" : "hidden"}>
            <h1>My Tickets page!!!!!!!!</h1>
        </div>
    )
    }

export default MyTickets
