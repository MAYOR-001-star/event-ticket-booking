import React from 'react'
import { useGlobalContext } from './Controllerr'

const AboutProject = () => {
    const {isAboutOpen} = useGlobalContext()
    return (
        <div className={isAboutOpen? "block" : "hidden"}>
            <h1>About Project page!!!!!!!</h1>
        </div>
    )
}

export default AboutProject
