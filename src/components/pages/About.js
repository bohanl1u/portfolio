import React from 'react';
import '../../App.css';
import './About.css'

export default function About(){
    return (
        <>
        <div className='about-container'>
        <video src='/videos/video-typing-2-1.mp4' autoPlay loop muted />
        <div className="textbox-1">
            <p>I am currently pursuing a B.S. in Computer Science and a Minor in 
                Economics at UC Davis. Interested in data analysis, cybersecurity, 
                and machine learning. Proficiency in Python, HTML/CSS/JavaScript, and C/C++.
                 Experience using SQL frameworks, React JS, Unity, and cloud computing services (AWS). 
            </p>
        </div>
        </div>
        <div className="Resume">
        <iframe src="https://drive.google.com/file/d/1RgmZV5JZXq2JW-O657YO-aMRCpsK0ndT/preview"></iframe>
        </div>
        </>
    )
    
}