import React from 'react'
import { useGlobalContext } from './Controllerr'
import Cloudinary from './Cloudinary'

const MyTickets = () => {
    const {isTicketOpen} = useGlobalContext()
    return (
        isTicketOpen && (
            <div className='h-full border-[#197686] border-1' 
                style={{color: 'white', margin: '4rem auto 0', borderRadius: '2rem', maxWidth: '35.7rem'}}>
                
                <div>
                    <div className='flex justify-between items-center' style={{padding: '2.5rem 2.5rem 0.5rem 2.5rem'}}>
                        <h1 className='font-normal' style={{fontWeight: '400'}}>Ready</h1>
                        <p className='font-roboto' style={{fontFamily: 'Roboto', fontSize: '0.85rem'}}>Step 3/3</p>
                    </div>
                    <div className="progress-container" style={{maxWidth: '30rem', margin: '0.5rem auto'}}>
                        <div className="progress-bar2" id="progressBar"></div>
                    </div>
                </div>

                <div style={{marginTop: '2rem', textAlign: 'center'}}>
                    <h1 style={{marginBottom: '0.25rem', fontFamily: 'Roboto', fontWeight: '500'}}>Your Ticket is Booked!</h1>
                    <p style={{fontFamily: 'Roboto', fontWeight: '200'}}>Check your email for a copy or you can <span style={{fontWeight: '700', fontFamily: 'Roboto'}}>download</span></p>
                </div>
                <div className='center-text box' style={{margin: '2rem 3.5rem 0', padding: '2rem'}}>
                    <div className='border-[#197686] border-1' style={{borderRadius: '1rem', marginBottom: '1rem', padding: '2rem'}}>
                        <div>
                            <h2 style={{fontFamily: 'Road Rage, serif', fontSize: '40px'}}>Techember Fest ”25</h2>
                            <p style={{fontFamily: 'Roboto', margin: '0.35rem 0', fontSize: '0.9rem'}}>📍 04 Rumens road, Ikoyi, Lagos</p>
                            <p style={{fontFamily: 'Roboto', fontSize: '0.9rem'}}>📅 March 15, 2025 | 7:00 PM</p>
                        </div>
                        <div>
                            <Cloudinary />
                        </div>
                        <div className="grid grid-cols-2 gap-2 border-t border-[#197686] pt-4 container">
                            <div className="border-b border-r border-[#197686] p-2">
                                <h3 className="text-sm text-gray-400">Enter your name</h3>
                                <h2 className="font-bold">Avi Chukwu</h2>
                            </div>
                            <div className="border-b border-[#197686] p-2">
                                <h3 className="text-sm text-gray-400">Enter your email *</h3>
                                <p className="font-semibold">User@email.com</p>
                            </div>
                            <div className="border-b border-r border-[#197686] p-2">
                                <h3 className="text-sm text-gray-400">Ticket Type:</h3>
                                <h4 className="font-semibold">VIP</h4>
                            </div>
                            <div className="border-b border-[#197686] p-2">
                                <h3 className="text-sm text-gray-400">Ticket for:</h3>
                                <h4 className="font-semibold">1</h4>
                            </div>
                            <div className="col-span-2 p-2">
                                <h3 className="text-sm text-gray-400">Special request?</h3>
                                <p className="text-sm">Nil? Or the user’s sad story they write in here gets this whole space, Max of three rows</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='center-text box1' style={{margin: '0 3.5rem 2rem', padding: '2rem'}}>
                        hello
                    </div>
                <div className='flex justify-around items-center' style={{marginBottom: '1rem'}}>
                    <button className='btn-sub' 
                        style={{ border: '2.5px groove #197686', borderRadius: '0.8rem', fontFamily: 'JejuMyeongjo', background: 'transparent', color: '#197686'}}>
                        Book Another Ticket
                    </button>
                    <button className='btn-sub' 
                        style={{border: '2.5px groove #197686', borderRadius: '0.8rem', fontFamily: 'JejuMyeongjo', background: '#24A0B5', color: 'white'}}>
                        Download Ticket
                    </button>
                </div>
            </div>
        )
    );
};

export default MyTickets;
