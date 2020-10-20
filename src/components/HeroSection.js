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