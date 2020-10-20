/*@flow*/
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    
      <h1>Welcome to AlzCare</h1>
      
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          English
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Korean (한국어)
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Chinese (简体中文)
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => window.open("https://www.picktime.com/alzcare", "_blank")}
        >
          Make an Appointment
        </Button>
        
        
      </div>  
    

    </div>
  );
}

export default HeroSection;