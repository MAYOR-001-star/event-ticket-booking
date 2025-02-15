import React from 'react'
import { useGlobalContext } from './Controllerr'

const AboutProject = () => {
    const {isAboutOpen} = useGlobalContext()
    return (
        isAboutOpen && (
            <div>
                <h1>About Project page!!!!!!!</h1>
            </div>
        )
    )
}

export default AboutProject
