import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import { TfiAlignJustify, TfiClose } from 'react-icons/tfi'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeClass, setActiveClass] = useState('home')

  const onClickHandler = (name) => {
    setActiveClass(name)
    setShowMenu(false)
  }
  // const handleShowMenu = () => setShowMenu(!showMenu)
  return (
    <div className="navbar-container">
      <div>
        <nav className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <div className="desktopMenu">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('home')}
              className={
                activeClass === 'home'
                  ? 'desktopMenuListItem active'
                  : 'desktopMenuListItem'
              }
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-120}
              onClick={() => onClickHandler('about')}
              className={
                activeClass === 'about'
                  ? 'desktopMenuListItem active'
                  : 'desktopMenuListItem'
              }
            >
              About Us
            </Link>

            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('services')}
              className={
                activeClass === 'services'
                  ? 'desktopMenuListItem active'
                  : 'desktopMenuListItem'
              }
            >
              Services{' '}
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('team')}
              className={
                activeClass === 'team'
                  ? 'desktopMenuListItem active'
                  : 'desktopMenuListItem'
              }
            >
              Team{' '}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('contact')}
              className={
                activeClass === 'contact'
                  ? 'desktopMenuListItem active'
                  : 'desktopMenuListItem'
              }
            >
              Contact{' '}
            </Link>
          </div>
          <div className="mobMenu" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <TfiClose /> : <TfiAlignJustify />}
          </div>
          <div
            className="navMenu"
            style={{ display: showMenu ? 'flex' : 'none' }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('home')}
              className={
                activeClass === 'home' ? 'listItem active' : 'listItem'
              }
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => onClickHandler('about')}
              className={
                activeClass === 'about' ? 'listItem active' : 'listItem'
              }
            >
              About Us
            </Link>

            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('services')}
              className={
                activeClass === 'services' ? 'listItem active' : 'listItem'
              }
            >
              Services
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('team')}
              className={
                activeClass === 'team' ? 'listItem active' : 'listItem'
              }
            >
              Team
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => onClickHandler('contact')}
              className={
                activeClass === 'contact' ? 'listItem active' : 'listItem'
              }
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
    // <nav>
    //   <div className="container">
    //     <div className="navbar">
    //       <img src={logo} alt="NSY Logo" className="logo-img" />
    //       <ul>
    //         <li>
    //
    //         </li>
    //         <li>
    //
    //         </li>
    //         <li>
    //
    //         </li>
    //         <li>
    //           <Link to="contact" smooth={true} duration={500}>
    //             Contact Us
    //           </Link>
    //         </li>
    //       </ul>
    //       <div className="mobMenu"
    // onClick={() => setShowMenu(!showMenu)}>
    //         {showMenu ? <TfiClose /> : <TfiAlignJustify />}
    //       </div>
    //       <div className={showMenu ? 'menu' : 'hide'}>
    //         <Link
    //           to="about"
    //           smooth={true}
    //           duration={500}
    //           offset={-100}
    //           onClick={handleShowMenu}
    //           className="listItem"
    //         >
    //           About Us
    //         </Link>

    //         <Link
    //           to="services"
    //           smooth={true}
    //           duration={500}
    //           onClick={handleShowMenu}
    //           className="listItem"
    //         >
    //           Services
    //         </Link>

    //         <Link
    //           to="team"
    //           smooth={true}
    //           duration={500}
    //           onClick={handleShowMenu}
    //           className="listItem"
    //         >
    //           team
    //         </Link>

    //         <Link
    //           to="contact"
    //           smooth={true}
    //           duration={500}
    //           offset={50}
    //           onClick={handleShowMenu}
    //           className="listItem"
    //         >
    //           Contact Us
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
