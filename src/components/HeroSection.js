/*@flow*/
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// Herosection function serves as a static layout designed of a homepage. From the homepage, it uses a hero containter to render a background and formatting design of the website. - Hamilton Nguyen 10/19/2020
// Within the herosection function, there are four class buttons that designate each language for users to clicked on. - Hamilton Nguyen 10/19/2020
function HeroSection() {
  return (
    <div className='hero-container'>
    
      <h1>Dementia Community for Asian Caregivers</h1>
      
      <div className='hero-btns'>

        <Button
          onClick={() => window.open("http://localhost:3002", "_blank")}
          className='btns'
          buttonStyle='btn--dark'
          buttonSize='btn--large'
        >
          Korean (한국어)
        </Button>

        <Button
          onClick={() => window.open("http://localhost:3003", "_blank")}
          className='btns'
          buttonStyle='btn--dark'
          buttonSize='btn--large'
        >
          Chinese (简体中文)
        </Button>
        
      </div>

    </div>
  );
}

export default HeroSection;