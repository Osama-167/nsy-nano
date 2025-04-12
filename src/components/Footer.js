import React from 'react'
import { Facebook, Twitter, Youtube, Instagram } from '../assets/icons'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

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
          <Link
            to="development"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>Development</p>
          </Link>
          <Link
            to="support"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>Technical Support</p>
          </Link>
          <Link
            to="training"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>Training and Courses</p>
          </Link>
          <Link
            to="solar-energy"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>Solar energy</p>
          </Link>
          <Link
            to="ups"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>UPS system</p>
          </Link>
          <Link
            to="cubesat"
            smooth={true}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <p>CubeSat Structure</p>
          </Link>
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
  );
}

export default Footer;
