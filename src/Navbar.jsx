import React from 'react'
import { useGlobalContext } from './Controllerr'
import logo from './assets/images/company-logo.svg'
import arrowLogo from './assets/images/arrow-right.svg'

const Navbar = () => {
    const {openEvents, openAbout, openTicket} = useGlobalContext()
    return (
        <div>
            <div className='border-[#197686] border-2 adjust w-[75rem] flex justify-between items-center mx-auto mt-4'>
                <div>
                    <img src={logo} alt='company-logo'/>
                </div>
                <div className='flex justify-between items-center spacer'>
                    <button onClick={openEvents} className='border-0 bg-transparent text-[18px] text-[#fff]'>Events</button>
                    <button onClick={openTicket} className='border-0 bg-transparent text-[18px] text-[#fff]'>My Tickets</button>
                    <button onClick={openAbout} className='border-0 bg-transparent text-[18px] text-[#fff]'>About Projects</button>
                </div>
                <div className='flex justify-between items-center spacer-1 bg-red-500 rounded'>
                    <button className='text-[#0A0C11] border-0 bg-transparent text-[18px]'>My Tickets</button>
                    <img src={arrowLogo} alt='tickets-right-arrow'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
