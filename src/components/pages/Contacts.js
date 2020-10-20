import React, { useState } from 'react';
import '../../components/pages/Contacts.css';
import {db} from '../../components/pages/firebase.js';
import { Button } from '../Button';
import '../HeroSection.css';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// const contact create the contents of the user's meta data imput and its sent to the firebase cloud firestore. - Hamilton Nguyen 10/19/2020
const Contacts = () => {

  const [name, setName] = useState("");  
  const [email, setEmail] = useState(""); 
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState(""); 

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoader(true);

    db.collection('contacts').add({
      name:name,
      email: email,
      subject: subject,
      message : message,
    })
    .then(() => {
      alert("Message has been submitted!");
      setLoader(false);
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setName('')
    setEmail('')
    setSubject('')
    setMessage('')

  };

 return (

  //Static environment which a reactjs form are placed on the page with css file format. Refer Below - Hamilton Nguyen 10/19/2020
  <div className='hero-container'>
     
  <form className = "form" onSubmit={handleSubmit}>
  <>
      
    </>
    
    <h1>Contact form</h1>
   

 
    <input placeholder ="Name" value={name} onChange={(e) => setName(e.target.value)} />

   
    <input placeholder ="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

   
    <input placeholder ="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>

    
    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

    <Button type="Submit" className='btns'buttonStyle='btn--dark' buttonSize='btn--large'>Submit</Button>

      

  </form>
  </div>
  

 );
}

export default Contacts;