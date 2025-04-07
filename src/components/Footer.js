import React from 'react'
import { Facebook, Twitter, Youtube, Instagram } from '../assets/icons'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="company">
          <img src={logo} alt="logo" className="footer-logo" />
          <p>
            We are a leading provider of high-quality satellites, spacecraft,
            and technologies.
          </p>
        </div>

        <div className="services-footer">
          <h3>SERVICES</h3>
          <p>Development</p>
          <p>Technical Support</p>
          <p>Training and Courses</p>
          <p>Solar Systems</p>
          <p>UPS</p>
        </div>

        <div className="contact">
          <h3>CONTACT</h3>
          <p>We are a leading provider</p>

          <div className="footer-contact-icons">
            <a href="mailto:osama_os167@hotmail.com" className="contact-icon">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/201111770840"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="social">
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Youtube />
        </a>
        <a href="#">
          <Instagram />
        </a>
      </div>

      <p className="copy-right">© 2025 AMG-TECH. All rights reserved.</p>
    </footer>
  )
}

export default Footer
