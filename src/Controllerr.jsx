import React, { createContext, useContext, useState } from 'react'

const control = createContext()

export const AppProvider = ({children}) => {
    const [isTicketOpen, setIsTicketOpen] = useState(false)
    const [isEventSectionOpen, setIsEventSectionOpen] = useState(false)
    const [isEventsOpen, setIsEventsOpen] = useState(true)
    const [isAboutOpen, setIsAboutOpen] = useState(false)

    const openTicket = () =>{
        setIsTicketOpen(true)
        setIsEventsOpen(false)
        setIsAboutOpen(false)
        setIsEventSectionOpen(false)
    }


    const openEventSection = () =>{
        setIsEventSectionOpen(true)
        setIsTicketOpen(false)
        setIsEventsOpen(false)
        setIsAboutOpen(false)
    }

    const openEvents = () =>{
        setIsTicketOpen(false)
        setIsEventsOpen(true)
        setIsAboutOpen(false)
        setIsEventSectionOpen(false)
    }


    const openAbout = () =>{
        setIsTicketOpen(false)
        setIsEventsOpen(false)
        setIsAboutOpen(true)
        setIsEventSectionOpen(false)
    }


    return <control.Provider value={{
        openTicket,
        openEvents,
        openAbout,
        openEventSection,
        isAboutOpen,
        isEventsOpen,
        isTicketOpen,
        isEventSectionOpen
    }}>{children}</control.Provider>
}

export const useGlobalContext = () =>{
    return useContext(control)
}

export default control
