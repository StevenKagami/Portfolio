import React from 'react'
import './contact.css'
import {MdOutlineEmail} from'react-icons/md'
import {BsInstagram} from'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com' 
import { useRef } from 'react'
 
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pbwo9sr', 'template_gm1o5np', form.current, 'x-6gqJSC5q6URWOeV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>stevenjorgensen10@yahoo.com</h6>
            <a href="mailto:stevenjorgensen10@yahoo.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>stevenjorgensenn</h5>
            <a href="https://www.instagram.com/stevenjorgensenn/" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+62-821-2529-2069</h5>
            <a href="https://wa.me/+6282125292069?text=urlencodedtext" target="_blank">Send a message</a>
        </article>
        </div>
        {/*   END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact