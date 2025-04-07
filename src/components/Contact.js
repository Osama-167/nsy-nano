import React from 'react'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-paragraph">Contact us via email or whatsApp.</p>

      <div className="contact-icons">
        <a href="mailto:osama_os167@hotmail.com" className="contact-icon">
          <FaEnvelope size={35} />
        </a>

        <a
          href="https://wa.me/201111770840"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaWhatsapp size={35} />
        </a>
      </div>
    </div>
  )
}

export default Contact
