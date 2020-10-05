import React from 'react';
import '../../App.css';



function Contact() {


  return (

    <div className='hero-container'>  
  <form>
    <h1>Contact Us!</h1>
  <label>
    Your Name:
    <input type="text" name="name" />
  </label>
  </form>

  <form>
  <label>
    Email Address:
    <input type="text" name="address" />
  </label>
  </form>

  <form>
  <label>
    
    <textarea placeholder="Email body:" rows="15"></textarea>
  </label>
  </form>

  <form>
  <input type="submit" value="Submit" />  
  </form>
  
  
  </div>
  );


}

export default Contact;