import React from 'react';
import './ProjectCards.css';
import CardItem from './CardItem';

function ProjectCards() {
  return (
    <div className='cards'>
     
      <div className='cards__container-1'>
      
        <div className='cards__wrapper'>
            <h1>Check out some of my projects:</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/img-rogueline.jpg'
              text='A 2D rogue-like video game built with Unity for submission to the GMTK Game Jam 2019'
              label='Rogueline'
              path='/rogueline'
            />
            <CardItem
              src='images/img-asl.jpg'
              text='Sign laalguage processing to communicate with Amazon Alexa, won best hardware at SacHacks 2018'
              label='AlexaSL'
              path='/alexasl'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-battleship.jpg'
              text='Implemenation of popular board game Battleship using C++ and MVC framework'
              label='Battleship'
              path='/battleship'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Github link to the files for this portfolio website built with ReactJS'
              label='Personal Website'
              path='/website'
            />
            <CardItem
              src='images/img-spotify.jpg'
              text='Web-app that gives a genre breakdown using Spotify API to get user data'
              label='Coming Soon!'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default ProjectCards;