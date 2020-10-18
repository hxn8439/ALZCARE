import React, { useState } from 'react';
import '../../components/pages/Contact.css';
import {db} from '../../components/pages/firebase';


const Contact = () => {

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

  <div className='hero-container'> 
  <form className = "form" onSubmit={handleSubmit}>
    
    <h1>Contact form</h1>

    <label>name</label>
    <input placeholder ="name" value={name} onChange={(e) => setName(e.target.value)} />

    <label>email</label>
    <input placeholder ="email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <label>subject</label>
    <input placeholder ="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>

    <label>message</label>
    <textarea placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

    <button type="submit" style={{background : loader ? "#ccc" : "rgb(2, 2, 110)" }}>Submit</button>

    

  </form>
  </div>

 );
}

export default Contact;