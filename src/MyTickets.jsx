import React from 'react'
import { useGlobalContext } from './Controllerr'
import Cloudinary from './Cloudinary'

const MyTickets = () => {
    const {isTicketOpen} = useGlobalContext()
    return (
        isTicketOpen && (
            <div>
                <div>
                    <Cloudinary />
                </div>
                <h1>My Tickets page!!!!!!!!</h1>
            </div>
        )
    )
}

export default MyTickets
