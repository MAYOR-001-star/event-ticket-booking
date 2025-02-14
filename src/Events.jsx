import React from 'react'
import { useGlobalContext } from './Controllerr'

const Events = () => {
    const {isEventsOpen, openEventSection} = useGlobalContext()
    return (
        <div className={isEventsOpen? "block" : "hidden"}>
            <div>
                <h2>Select your ticket</h2>
                <button>Regular Access</button>
                <button>VIP Access</button>
                <button>VVIP Access</button>
            </div>
            <div>
                <label htmlFor="options">Number of Tickets</label>
                <select id="options">
                    <option value="">Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div>
                <button onClick={(e)=>e.preventDefault()}>cancel</button>
                <button onClick={openEventSection}>next</button>
            </div>
        </div>
    )
}

export default Events
