import React from 'react'
import AboutImage from '../red-clipboard.png'

export const About = () => {

    const containerStyle = {
        backgroundColor: '#e4ddec',   // soft purple
        padding: '2rem',
        borderRadius: '1.2rem',
        boxShadow: '0 0.375rem 6px rgba(0, 0, 0, 0.1)',  // subtle shadow
        maxWidth: '68rem',
        margin: '50px auto',  // centers the box if parent is flex or grid container
        textAlign: 'center'
    }

    const headingStyle = {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '1.5rem',
        marginBottom: '2.25rem',
        color: '#333'  // slightly darkened text color
    }

    const bodyTextStyle = {
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: '#555',  // slightly lightened text color
        marginRight: '3.125rem',
        marginLeft: '3.125rem'
    }

    const imageStyle = {
        width: '9.375rem',  
        height: '9.375rem',
        borderRadius: '50%',  // makes the image a circle
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'  // shadow for a lifted effect
        
    }

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>
                Effortless Daily Mastery: Unleash Productivity with Our Dynamic Online
                To-Do List Tracker!
            </h1>
            <img src={AboutImage} alt="About" style={imageStyle} />
            <p style={bodyTextStyle}>
                Experience the power of seamless organization and accomplish your
                goals like never before with our cutting-edge Online To-Do List
                Tracker! Say goodbye to scattered tasks and hello to focused
                achievement. Add and delete your daily tasks with a single click, all
                on our user-friendly website designed to amplify your productivity.
                Transform your routine into a well-orchestrated symphony of
                accomplishments. Start today and make every moment impactful!
            </p>
        </div>
    )
}
