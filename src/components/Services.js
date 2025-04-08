import React, { useState } from 'react'
import service from '../assets/service.png'
import develop from '../assets/office.png'
import solar from '../assets/solarSystem.webp'
import components from '../assets/components.jpg'
import support from '../assets/Support.jpg'
import support2 from '../assets/Support2.jpg'
import ups from '../assets/ups.webp'
import eps from '../assets/eps.webp'
import training from '../assets/training.webp'

const Services = () => {
  const MAX_LENGTH = 150;

  const ServiceItem = ({ id, title, img, fullText, moreContent }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
      setIsExpanded(!isExpanded);
    };

    const shouldTruncate = fullText.length > MAX_LENGTH;
    const visibleText = isExpanded || !shouldTruncate ? fullText : fullText.slice(0, MAX_LENGTH) + '...';

    return (
      <div className="service">
        <img src={img} alt="img" />
        <h3>{title}</h3>
        <p>{visibleText}</p>
        {isExpanded && <p>{moreContent}</p>}
        {shouldTruncate && (
          <button className="more-button" onClick={toggleContent}>
            {isExpanded ? 'Less' : 'More'}
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="services">
      <div className="container">
        <div className="services">
          <h1>Our Services</h1>
          <p className="caption">Check out our amazing services.</p>
          <div className="services-container">
            <ServiceItem
              id="service-1"
              title="Development and Manufacturing of EPS and Structures"
              img={eps}
              fullText="At Nano Satellite Yard, we specialize in the development and production of CubeSat structures, Electrical Power Supply (EPS) systems, and related components. Our offerings include structures crafted from premium materials such as aluminum alloys (Al-7075 and Al-6061) and carbon fiber composite materials, ensuring strength, durability, and adaptability for diverse applications. In addition to manufacturing, we provide expert-led training on these critical subsystems, empowering engineers and innovators to design, build, and implement cutting-edge CubeSat technology."
              moreContent="This additional content appears when you click on 'More' to expand."
            />
            <ServiceItem
              id="service-2"
              title="Provision of Essential Components"
              img={components}
              fullText="We provide a comprehensive range of essential components, ensuring reliability and quality to meet the needs of CubeSat development and related applications."
              moreContent="More information about this service here. This section will expand when you click."
            />
            <ServiceItem
              id="service-3"
              title="Support for Model and Design Implementation"
              img={support}
              fullText="We offer expert assistance in executing client models and designs, including guidance and support throughout the fabrication process to ensure successful implementation."
              moreContent="Detailed assistance for model implementation can be expanded here."
            />
            <ServiceItem
              id="service-4"
              title="Technical Support"
              img={support2}
              fullText="We offer expert assistance in executing client models and designs, including guidance and support throughout the fabrication process to ensure successful implementation."
              moreContent="Additional technical support details that will expand when clicked."
            />
            <ServiceItem
              id="service-5"
              title="Training and Courses"
              img={training}
              fullText="We deliver specialized training and courses focused on design, manufacturing, and testing methodologies. These programs are conducted in state-of-the-art laboratories to equip participants with practical skills and knowledge."
              moreContent="Additional training content that expands when you click 'More.'"
            />
            <ServiceItem
              id="service-6"
              title="Solar Systems"
              img={solar}
              fullText="We specialize in providing sustainable energy solutions through advanced solar systems. Our offerings include both on-grid and off-grid solutions, designed to reduce reliance on external energy sources while enhancing energy security. With minimal maintenance requirements and a lifespan of up to 25 years, our solar systems ensure reliable, continuous energy production. By producing electricity with little to no operational costs, we help clients achieve significant long-term energy savings."
              moreContent="Expanded information about solar systems and how they provide energy."
            />
            <ServiceItem
              id="service-7"
              title="UPS systems"
              img={ups}
              fullText="Our UPS systems are designed to protect sensitive electronic devices from power defects and disruptions. For Critical Services: In hospitals and data centers, UPS systems ensure that essential operations remain online during power outages, safeguarding critical services. For Industrial and Business Use: UPS systems provide a reliable power supply, keeping operations running smoothly and preventing costly disruptions."
              moreContent="Details about how UPS systems benefit businesses and industries."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
