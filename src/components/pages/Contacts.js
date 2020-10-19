import React, { useState } from 'react';
import '../../components/pages/Contacts.css';
import {db} from '../../components/pages/firebase.js';


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

  <div className='hero-container1'> 
  <form className = "form" onSubmit={handleSubmit}>
    
    <h1>Contact form</h1>

 
    <input placeholder ="Name" value={name} onChange={(e) => setName(e.target.value)} />

   
    <input placeholder ="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

   
    <input placeholder ="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>

    
    <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

    <button type="Submit" style={{background : loader ? "#ccc" : "rgb(2, 2, 110)" }}>Submit</button>

    

  </form>
  </div>

 );
}

export default Contacts;