import React from 'react';
import './email.css';



const Email = ({handleConnect}) => {
 
    
  return (
    <div className='email-container'>
        <div className='email-message-container'>
            <h3>Thanks for Connecting!</h3>
            <p>If you want to chat online and talk all things tech /nerdy stuff- you can find me on my social media or send a message here!</p>
        </div>
        <div className='email-form-container'>
            <form className='email-form' action="https://formsubmit.co/joshuanc1@jchuwy.com" method="POST">
                <label htmlFor="yourName">Name</label>
                <input placeholder='name' type="text" name="name" required="true"/>
                <label htmlFor="email">Email</label>
                <input placeholder='email' type="email" name="email" required="true"/>
                <label htmlFor="message">Message</label>
                <textarea placeholder='message' name="message" id="" cols="50" rows="15" required="true"></textarea>
                <button type="submit" className='email-form-btn'>SEND MESSAGE</button>
            </form>
        </div>

        <button className= "close-btn" onClick={handleConnect}>X</button>
    </div>
  )
}

export default Email