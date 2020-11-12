import React from 'react';
import '../../App.css';
import './About.css'

export default function About(){
    return (
        <div className='about-container'>
        <video src='/videos/video-typing-2-1.mp4' autoPlay loop muted />
        <div className="textbox-1">
            <p>About me: I plan to graduate with a B.S. in Computer Science and a Minor in Economics. 
                Some of my skills include proficiency in Python, HTML/CSS/JavaScript, and C/C++ with some experience in C#.
                Comfortable using Git, React JS, SQL database frameworks, and cloud computing services (AWS). 
            </p>
        </div>
        </div>
    )
    
}