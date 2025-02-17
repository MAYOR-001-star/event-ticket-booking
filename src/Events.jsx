import React from 'react'
import { useGlobalContext } from './Controllerr'

const Events = () => {
    const {isEventsOpen, openEventSection} = useGlobalContext()
    return (
        isEventsOpen && (
            <div className='h-[100vh] border-[#197686] border-1' 
                style={{color: 'white', margin: '4rem auto 0px', borderRadius: '2rem', maxWidth: '30rem'}}>
                <div>
                    <div className='flex justify-between items-center' style={{padding: '2.5rem 2.5rem 0.5rem 2.5rem'}}>
                        <h1 className='font-normal' style={{fontWeight: '400'}}>Ticket Selection</h1>
                        <p className='font-roboto' style={{fontFamily: 'Roboto', fontSize: '0.85rem'}}>Step 1/3</p>
                    </div>
                    <div className="progress-container" style={{maxWidth: '25rem', margin: '0 auto'}}>
                        <div className="progress-bar" id="progressBar"></div>
                    </div>
                </div>
                <div className='border-[#197686] border-1 h-full center-text' style={{borderRadius: '2rem', margin: '2rem', padding: '1rem'}}>
                    <div className='border-[#197686] border-1' style={{borderRadius: '1rem', margin: '1rem', padding: '1rem'}}>
                        <h2 style={{fontFamily: 'Road Rage, serif'}}>Techember Fest ”25</h2>
                        <p style={{fontFamily: 'Roboto'}}>Join us for an unforgettable experience at <br/>[Event Name]! Secure your spot now.</p>
                        <p style={{fontFamily: 'Roboto'}}>📍 [Event Location] <span>| |</span> March 15, 2025 | 7:00 PM</p>
                    </div>
                    <div className="progress-container" style={{maxWidth: '20rem', margin: '0 auto'}}></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* <div>
                    <h2 className='text-red-500'>Select your ticket</h2>
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
                </div> */}
            </div>
        )
    )
}

export default Events
