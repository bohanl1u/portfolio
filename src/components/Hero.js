import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/video3.mp4' autoPlay loop muted />
      <div class="description-text">
        <p>Hi, my name is Bohan Liu. I am currently pursuing a B.S. in Computer Science at UC Davis 
          (2022), scroll down to learn more:</p>
      </div>
      <img src='/images/image-2.jpg' className="profile-picture" alt="Error"/>
      <div className='hero-btns'>
        <Link to='/About'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About <i class="far fa-address-card"></i>
        </Button>
        </Link>
        <Link to='/projects'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View Projects <i class="fas fa-laptop-code"></i>
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;