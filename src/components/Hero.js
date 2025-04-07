import image from '../assets/image1.png'
import { Send } from '../assets/icons'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="hero-content">
          <div className="content">
            <h1>NANO SATELLITE YARD</h1>
            <p>“A tiny box that enhances our vision of the Earth.”</p>
            <Link to="contact" smooth={true} duration={500}>
              <button>
                Contact Us <Send />
              </button>
            </Link>
          </div>
          <div className="img">
            <img src={image} alt="Hero img" />
          </div>
        </div>
        <div className="hero-cards">
          <div className="card">
            <h3>Project Development</h3>
            <p>
              We help you develop innovative solutions to address pressing
              challenges.
            </p>
          </div>
          <div className="card">
            <h3>Technical Support</h3>
            <p>
              We provide expertise in nanotechnology and assist you with your
              projects.
            </p>
          </div>
          <div className="card">
            <h3>Research & Development</h3>
            <p>
              We focus on developing new technologies and solutions for the
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
