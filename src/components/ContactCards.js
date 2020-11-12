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
              text='Link: linkedin....'
              label='LinkedIn'
              path='/bitly.'
            />
            <CardItem
              src='images/img-black.jpg'
              text='Link: github.io'
              label='Github'
              path='/bitly.'
            />
            <CardItem
              src='images/img-mail.jpg'
              text='Email: jimmybliu@gmail.com\n
                    Phone: 408-642-9916'
              label='Email & Phone Number'
              path='/bitly.email'
            />
          </ul>
          
        </div>
      // </div>
 
    
  );
}

export default ContactCards;