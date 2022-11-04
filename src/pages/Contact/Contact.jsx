import React from 'react';
import { useState } from 'react';
// import { Link } from "react-router-dom";
import { HiCheck} from 'react-icons/hi';
import Footer from '../../Components/Footer/Footer';
import './contact.css';

const Contact = () => {
  const [checked, notChecked] = useState(false);
  const check = () => notChecked(!checked)
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-container-menu'>
          <div className='menu-header'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
          </div>
          <form className='menu-main'>
            <div className='menu-main-inputs'>
              <div className='input-name'>
                <span>
                  <label className='label' for="first_name">First name</label>
                  <input type="text" id="first_name" name="first_name" placeholder="Enter your first name" required/>
                </span>
                <span>
                  <label className='label' for="last_name">Last name</label>
                  <input type="text" id="last_name" name="last_name" placeholder="Enter your last name" required/>
                </span>
              </div>
              <div id='input-emails'>
                <label className='label' for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="yourname@email.com" required/>
              </div>
              <div id='textarea'>
                <label className='label' for="message">Message</label>
                <textarea style={{ height: '130px', resize: 'none' }} type="text" id="message" name="message"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  onFocus={(e) => e.target.placeholder = `Hey Bill, hope you are doing great. Let us collaborate on project axyz.`}
                  onBlur={(e) => e.target.placeholder = `Send me a message and I'll reply you as soon as possible...`} required />
              </div>
              <div id='check'>
                <div id={checked ? 'inputs' : 'input'} onClick={check}>
                  {checked ? (<HiCheck  className='icon'/>):("")}
                  <input type="checkbox" id="agreement" name="agreement" value='agree' />
                  
                </div>
                <label>You agree to providing your data to Bill who may contact you.</label>
              </div>
            </div>
            <button id='btn__submit' value='submit' >Send message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact