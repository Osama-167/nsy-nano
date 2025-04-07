import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <h1>About Us</h1>
          <div className="about-content">
            <img src={about} alt="img" />
            <div className="content">
              <p>
                Nano Satellite Yard (NSY) is a forward-thinking startup,
                established in January 2024 as a limited liability company.
              </p>
              <p>
                We specialize in CubeSat technology, offering comprehensive
                technical support alongside the design and manufacturing of
                critical components such as Electrical Power Systems (EPS)
                boards.
              </p>
              <p>
                Beyond space technology, we also innovate in solar energy
                solutions, Uninterruptible Power Supply (UPS) systems, and
                deliver expert-led courses in electronics and mechanical design.
              </p>
              <p>
                Our mission is to empower innovators and engineers by providing
                sustainable solutions and technical expertise that excel in both
                space exploration and practical, everyday applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
