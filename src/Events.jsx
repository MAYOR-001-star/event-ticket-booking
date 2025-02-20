import React from 'react'
import { useGlobalContext } from './Controllerr'

const Events = () => {
    const {isEventsOpen, openEventSection} = useGlobalContext()
    return (
        isEventsOpen && (
            <div className='h-[100vh] border-[#197686] border-1' 
                style={{color: 'white', margin: '4rem auto 0px', borderRadius: '2rem', maxWidth: '48rem'}}>
                <div>
                    <div className='flex justify-between items-center' style={{padding: '2.5rem 2.5rem 0.5rem 2.5rem'}}>
                        <h1 className='font-normal' style={{fontWeight: '400'}}>Ticket Selection</h1>
                        <p className='font-roboto' style={{fontFamily: 'Roboto', fontSize: '0.85rem'}}>Step 1/3</p>
                    </div>
                    <div className="progress-container" style={{maxWidth: '31rem', margin: '0.5rem auto'}}>
                        <div className="progress-bar" id="progressBar"></div>
                    </div>
                </div>
                <div className='border-[#197686] border-1 h-full center-text' style={{borderRadius: '2rem', margin: '2rem 3.5rem', padding: '2rem', background: '#0E464F'}}>
                    <div className='border-[#197686] border-1' style={{borderRadius: '1rem', marginBottom: '1rem', padding: '2rem'}}>
                        <h2 style={{fontFamily: 'Road Rage, serif', fontSize: '62px', marginBottom: '1rem'}}>Techember Fest ”25</h2>
                        <p style={{fontFamily: 'Roboto', fontSize: '0.9rem'}}>Join us for an unforgettable experience at</p>
                        <p style={{fontFamily: 'Roboto', margin: '0.35rem 0', fontSize: '0.9rem'}}>[Event Name]! Secure your spot now.</p>
                        <p style={{fontFamily: 'Roboto', fontSize: '0.9rem'}}>📍 [Event Location] <span>| |</span> March 15, 2025 | 7:00 PM</p>
                    </div>
                    <div className="progress-container" style={{maxWidth: '25rem', margin: '0 auto'}}></div>
                    <div>
                        <h2 className='text-left' style={{fontFamily: 'Roboto', fontSize: '0.9rem', margin: '2rem 0 1rem 0', fontWeight: '400'}}>Select your ticket:</h2>
                        <div className='btns'>
                            <div style={{textAlign: 'left', border: '2.5px groove #197686', borderRadius: '0.8rem', padding: '0.6rem', width: '9.2rem'}}>
                                <p style={{fontWeight: '800', fontFamily: 'Roboto', fontSize: '24px'}}>Free</p>
                                <p style={{textTransform: 'uppercase', fontFamily: 'Roboto', margin: '0.7rem 0', fontSize: '16px'}}>Regular Access</p>
                                <p style={{fontSize: '14px'}}>20/52</p>
                            </div>
                            <div style={{textAlign: 'left', border: '2.5px groove #197686', borderRadius: '0.8rem', padding: '0.6rem', width: '9.2rem'}}>
                                <p style={{fontWeight: '800', fontFamily: 'Roboto', fontSize: '24px'}}>$150</p>
                                <p style={{textTransform: 'uppercase', fontFamily: 'Roboto', margin: '0.7rem 0', fontSize: '16px'}}>VIP Access</p>
                                <p style={{fontSize: '14px'}}>20/52</p>
                            </div>
                            <div style={{textAlign: 'left', border: '2.5px groove #197686', borderRadius: '0.8rem', padding: '0.6rem', width: '9.2rem'}}>
                                <p style={{fontWeight: '800', fontFamily: 'Roboto', fontSize: '24px'}}>$150</p>
                                <p style={{textTransform: 'uppercase', fontFamily: 'Roboto', margin: '0.7rem 0', fontSize: '16px'}}>VVIP Access</p>
                                <p style={{fontSize: '14px'}}>20/52</p>
                            </div> 
                        </div>
                    </div>
                    <div style={{margin: '2rem 0'}}>
                        <label htmlFor="options" style={{textAlign: 'left', fontFamily: 'Roboto'}} className='flex'>Number of Tickets</label><br/>
                        <select id="options" className='w-full' style={{outline: 'none', background: 'transparent', color: 'white', fontFamily: 'Roboto', padding: '1rem', borderRadius: '0.8rem', border: '2.5px groove #197686'}}>
                            <option value="" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>Select...</option>
                            <option value="1" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>1</option>
                            <option value="2" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>2</option>
                            <option value="3" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>3</option>
                        </select>
                    </div>
                    <div className='flex justify-around items-center'>
                        <button onClick={(e)=>e.preventDefault()} style={{}}>cancel</button>
                        <button onClick={openEventSection} style={{}}>next</button>
                    </div>
                </div>
            </div>
        )
    )
}

export default Events
