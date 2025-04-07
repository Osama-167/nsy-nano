import React, { useState } from 'react'
import service from '../assets/service.png'
import develop from '../assets/office.png'
import solar from '../assets/solarSystem.jpg'
import components from '../assets/components.jpg'
import support from '../assets/Support.jpg'
import support2 from '../assets/Support2.jpg'
import ups from '../assets/ups.webp'
import eps from '../assets/eps.webp'
import training from '../assets/training.webp'

const Services = () => {
  const MAX_LENGTH = 150; 

  const handleShowMore = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle("show-more");
    }
  };

  return (
    <section id="services">
      <div className="container">
        <div className="services">
          <h1>Our Services</h1>
          <p className="caption">Check out our amazing services.</p>
          <div className="services-container">
            <div className="service">
              <img src={eps} alt="img" />
              <h3>Development and Manufacturing of EPS and Structures</h3>
              <p>
                At Nano Satellite Yard, we specialize in the development and
                production of CubeSat structures, Electrical Power Supply (EPS)
                systems, and related components. Our offerings include
                structures crafted from premium materials such as aluminum
                alloys (Al-7075 and Al-6061) and carbon fiber composite
                materials, ensuring strength, durability, and adaptability for
                diverse applications. In addition to manufacturing, we provide
                expert-led training on these critical subsystems, empowering
                engineers and innovators to design, build, and implement
                cutting-edge CubeSat technology.
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-1')}>
                More
              </button>
              <div className="more-content" id="service-1">
                <p>
                  This additional content appears when you click on "More" to expand.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={components} alt="img" />
              <h3>Provision of Essential Components</h3>
              <p>
                We provide a comprehensive range of essential components,
                ensuring reliability and quality to meet the needs of CubeSat
                development and related applications.
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-2')}>
                More
              </button>
              <div className="more-content" id="service-2">
                <p>
                  More information about this service here. This section will expand when you click.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={support} alt="img" />
              <h3>Support for Model and Design Implementation</h3>
              <p>
                We offer expert assistance in executing client models and
                designs, including guidance and support throughout the
                fabrication process to ensure successful implementation.
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-3')}>
                More
              </button>
              <div className="more-content" id="service-3">
                <p>
                  Detailed assistance for model implementation can be expanded here.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={support2} alt="img" />
              <h3>Technical Support</h3>
              <p>
                We offer expert assistance in executing client models and
                designs, including guidance and support throughout the
                fabrication process to ensure successful implementation.
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-4')}>
                More
              </button>
              <div className="more-content" id="service-4">
                <p>
                  Additional technical support details that will expand when clicked.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={training} alt="img" />
              <h3>Training and Courses</h3>
              <p>
                We deliver specialized training and courses focused on design,
                manufacturing, and testing methodologies. These programs are
                conducted in state-of-the-art laboratories to equip participants
                with practical skills and knowledge.
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-5')}>
                More
              </button>
              <div className="more-content" id="service-5">
                <p>
                  Additional training content that expands when you click "More."
                </p>
              </div>
            </div>
            <div className="service">
              <img src={solar} alt="img" />
              <h3>Solar Systems</h3>
              <p>
                We specialize in providing sustainable energy solutions through
                advanced solar systems. Our offerings include both on-grid and
                off-grid solutions, designed to reduce reliance on external
                energy sources while enhancing energy security. With minimal
                maintenance requirements and a lifespan of up to 25 years, our
                solar systems ensure reliable, continuous energy production. By
                producing electricity with little to no operational costs, we
                help clients achieve significant long-term energy savings.
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-6')}>
                More
              </button>
              <div className="more-content" id="service-6">
                <p>
                  Expanded information about solar systems and how they provide energy.
                </p>
              </div>
            </div>
            <div className="service">
              <img src={ups} alt="img" />
              <h3>UPS systems</h3>
              <p>
                Our UPS systems are designed to protect sensitive electronic
                devices from power defects and disruptions.
              </p>
              <p>
                <ul>
                  <li>
                    For Critical Services: In hospitals and data centers, UPS
                    systems ensure that essential operations remain online
                    during power outages, safeguarding critical services.
                  </li>
                  <li>
                    For Industrial and Business Use: UPS systems provide a
                    reliable power supply, keeping operations running smoothly
                    and preventing costly disruptions.
                  </li>
                </ul>
              </p>
              <button className="more-button" onClick={() => handleShowMore('service-7')}>
                More
              </button>
              <div className="more-content" id="service-7">
                <p>
                  Details about how UPS systems benefit businesses and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
