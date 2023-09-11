import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <div className='outterContact  leftAdjectment' id='contact'>
      <div className="outterform">
        <div className="innerform">
          <form action="https://formsubmit.co/sridar9771@gmail.com" method="POST" >
            <h1 style={{marginBottom:'2rem'}}>Get In Touch</h1>
            <input type="Name" name='Name' required placeholder='FullName' />
        <input type="Email" name='Email' required placeholder='Email'/>
        <input type="number"  name='number' required placeholder='Mobile'/>
        <textarea name="message" placeholder='Convey the message..' id="" cols="30" rows="10"></textarea>
            <button className='messageButton' type='submit' >Send Message</button>
            </form>
        </div>
        <div className="right-bg">
          <div className="contact-img"> </div>
        </div>
      </div>
     </div>
  )
}

export default Contact