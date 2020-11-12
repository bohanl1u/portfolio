import React from 'react';
import './ContactCards.css';
import CardItem from './CardItem';

function ContactCards() {
  return (
    <div className='container'>
      <video src='/videos/video-typing-2-phone-only.mp4' autoPlay loop muted />
        {/* <div className='cards__wrapper'> */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-linkedin.jpg'
              text='View my profile:'
              label='LinkedIn'
              path='/linkedin'
            />
            <CardItem
              src='images/img-black.jpg'
              text='Here is a link to my public repos:'
              label='Github'
              path='/github'
            />
            <CardItem
              src='images/img-mail.jpg'
              text='jimmybliu@gmail.com'
              label='Email'
              path='/email'
            />
          </ul>
          
        </div>
      // </div>
 
    
  );
}

export default ContactCards;