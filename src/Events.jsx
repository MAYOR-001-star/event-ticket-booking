import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './Controllerr';

const Events = () => {
    const { isEventsOpen, openEventSection } = useGlobalContext();
    const [bgChecker, setBgChecker] = useState("");

    const checker = (event) => {
        const clickedText = event.currentTarget.querySelector(".package").textContent;

        if (clickedText !== bgChecker) {
            setBgChecker(clickedText);
        }
    };

    useEffect(() => {
        setBgChecker("Regular Access");
    }, []);

    return (
        isEventsOpen && (
            <div className='h-full border-[#197686] border-1' 
                style={{color: 'white', margin: '4rem auto 0', borderRadius: '2rem', maxWidth: '35.7rem'}}>
                
                <div>
                    <div className='flex justify-between items-center' style={{padding: '2.5rem 2.5rem 0.5rem 2.5rem'}}>
                        <h1 className='font-normal' style={{fontWeight: '400'}}>Ticket Selection</h1>
                        <p className='font-roboto' style={{fontFamily: 'Roboto', fontSize: '0.85rem'}}>Step 1/3</p>
                    </div>
                    <div className="progress-container" style={{maxWidth: '30rem', margin: '0.5rem auto'}}>
                        <div className="progress-bar" id="progressBar"></div>
                    </div>
                </div>

                <div className='border-[#197686] border-1 center-text' style={{borderRadius: '2rem', margin: '2rem 3.5rem', padding: '2rem'}}>
                    <div className='border-[#197686] border-1' style={{borderRadius: '1rem', marginBottom: '1rem', padding: '2rem'}}>
                        <h2 style={{fontFamily: 'Road Rage, serif', fontSize: '62px', marginBottom: '1rem'}}>Techember Fest ”25</h2>
                        <p style={{fontFamily: 'Roboto', fontSize: '0.9rem'}}>Join us for an unforgettable experience at</p>
                        <p style={{fontFamily: 'Roboto', margin: '0.35rem 0', fontSize: '0.9rem'}}>[Event Name]! Secure your spot now.</p>
                        <p style={{fontFamily: 'Roboto', fontSize: '0.9rem'}}>📍 [Event Location] <span>| |</span> March 15, 2025 | 7:00 PM</p>
                    </div>

                    <div className="progress-container" style={{maxWidth: '37rem', margin: '2rem auto 0 auto'}}></div>

                    <div>
                        <h2 className='text-left' style={{fontFamily: 'Roboto', fontSize: '0.9rem', margin: '2rem 0 1rem 0', fontWeight: '400'}}>Select your ticket:</h2>
                        <div className='btns'>
                            {["Regular Access", "VIP Access", "VVIP Access"].map((type, index) => (
                                <div key={index} 
                                    style={{
                                        textAlign: 'left',
                                        border: '2.5px groove #197686',
                                        borderRadius: '0.8rem',
                                        padding: '0.6rem',
                                        width: '5.5rem',
                                        cursor: 'pointer',
                                        backgroundColor: bgChecker === type ? "#12464E" : "transparent"
                                    }}
                                    onClick={checker}
                                    // className={type === "Regular Access" ? "first-package" : ""}
                                >
                                    <p style={{fontWeight: '800', fontFamily: 'Roboto', fontSize: '20px'}}>
                                        {type === "Regular Access" ? "Free" : "$150"}
                                    </p>
                                    <p className='package' style={{textTransform: 'uppercase', fontFamily: 'Roboto', margin: '0.7rem 0', fontSize: '10px'}}>
                                        {type}
                                    </p>
                                    <p style={{fontSize: '10px'}}>20/52</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{margin: '2rem 0'}}>
                        <label htmlFor="options" style={{textAlign: 'left', fontFamily: 'Roboto'}} className='flex'>Number of Tickets</label><br/>
                        <select id="options" className='w-full' style={{cursor: 'pointer', outline: 'none', background: 'transparent', color: 'white', fontFamily: 'Roboto', padding: '1rem', borderRadius: '0.8rem', border: '2.5px groove #197686'}}>
                            <option value="" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>Select...</option>
                            <option value="1" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>1</option>
                            <option value="2" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>2</option>
                            <option value="3" style={{fontFamily: 'Roboto', color: 'white', background: '#02191D'}}>3</option>
                        </select>
                    </div>

                    <div className='flex justify-around items-center' style={{marginBottom: '1rem'}}>
                        <button onClick={(e) => e.preventDefault()} className='btn-sub' 
                            style={{ border: '2.5px groove #197686', borderRadius: '0.8rem', fontFamily: 'JejuMyeongjo'}}>
                            Cancel
                        </button>
                        <button onClick={openEventSection} className='btn-sub' 
                            style={{border: '2.5px groove #197686', borderRadius: '0.8rem', fontFamily: 'JejuMyeongjo', background: '#24A0B5', color: 'white'}}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Events;
