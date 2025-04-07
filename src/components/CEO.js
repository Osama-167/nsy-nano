import React, { useState } from "react";
import DrAhmad from "../assets/DrAhmad.jpg";
import KareemAhmed from "../assets/KareemAhmed.jpg";
import AhmedSanad from "../assets/AhmedSanad.jpg";
import RadyHesham from "../assets/RadyHesham.jpg";
import AlaaAshraf from "../assets/AlaaAshraf.jpg";  

const ceoData = [
  {
    name: "Dr. Ahmad Anwar",
    title: "CEO & Founder",
    image: DrAhmad,
    description: `Born in Alexandria in 1970, Dr. Ahmad Anwar is a distinguished mechanical engineer 
    with a specialization in space technology. He earned his Ph.D. from the Military Technical College, 
    focusing on the effects of space environments on satellite materials. 
    With over 25 years of experience, he has published 22 research papers on this critical subject.
    
    He worked with the Space Technology Transfer Program alongside the Russian Federation, 
    served as Assistant Director for Space Laboratories, and led the CubeSat 6U project. 
    Currently, he is an Associate Professor at Pharos University and the CEO and Founder of Nano Satellite Yard, 
    driving innovation in satellite technology.`,
  },
  {
    name: "Alaa Ashraf",
    title: "Embedded Systems Instructor",
    image: AlaaAshraf,
    description: `Alaa Ashraf is a dedicated Embedded Systems Instructor with expertise in software and hardware integration. 
    She brings passion and deep technical knowledge to her work in the field of technology, 
    guiding students to develop a strong foundation in embedded systems and IoT solutions.`,
  },
  {
    name: "Ahmed Mohamed Sanad",
    title: "Electronics and Software Engineer | Mechatronics Teaching Assistant",
    image: AhmedSanad,
    description: `Ahmed Mohamed Sanad is a Mechatronics graduate with expertise in electronics, software engineering, 
    and satellite systems. At Nano Satellite Yard, he plays a key role in CubeSat development, applying his expertise 
    in renewable energy and PCB design to create innovative solutions.`,
  },
  {
    name: "Kareem Ahmed",
    title: "Graphics Designer | Full-Stack Developer",
    image: KareemAhmed,
    description: `Kareem Ahmed is a Mechatronics Engineer specializing in mechanical systems and structural analysis. 
    At Nano Satellite Yard, he plays a key role in CubeSat development, blending technical expertise with problem-solving passion.`,
  },
  {
    name: "Rady Hesham Ahmed",
    title: "Bachelor of Mechanical Engineering | Alexandria University | 2021",
    image: RadyHesham,
    description: `Graduation project Overhead Crane Design
    • (Team leader, responsible for optimum part design and steel structure selection.)
    Grade: Excellent`,
  },
  
];

const MAX_LENGTH = 150;

const CEO = () => {
  return (
    <div id="team" className="ceo-container">
      <h1 className="ceo-heading">Meet Our Leadership</h1>
      <div className="ceo-list">
        {ceoData.map((person, index) => (
          <CEOMember key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

const CEOMember = ({ person }) => {
  const [showMore, setShowMore] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleImageClick = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  return (
    <div className="ceo-card">
      <img
        src={person.image}
        alt={person.name}
        className={`ceo-image ${isImageEnlarged ? 'enlarged' : ''}`}
        onClick={handleImageClick}
      />
      <h2 className="ceo-name">{person.name}</h2>
      <h3 className="ceo-title">{person.title}</h3>
      <p className="ceo-description">
        {showMore ? person.description : `${person.description.substring(0, MAX_LENGTH)}...`}
      </p>
      <button className="more-button" onClick={handleToggle}>
        {showMore ? "Less" : "More"}
      </button>
    </div>
  );
};

export default CEO;
