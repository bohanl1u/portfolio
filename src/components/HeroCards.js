import React from 'react';
import './HeroCards.css';
import CardItem from './CardItem';

function HeroCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image-resume.jpg'
              text='Check out my resume here:'
              label='Resume'
              path='/about'
            />
            <CardItem
              src='images/image-contact.jpg'
              text='Contact information and links:'
              label='Contact'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image-projects.jpg'
              text='View my projects:'
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Check out the source code for this website:'
              label='React JS'
              path='/source code'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroCards;