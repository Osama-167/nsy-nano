import React, { useState } from "react";
import DrAhmad from "../assets/DrAhmad.jpg";
import KareemAhmed from "../assets/KareemAhmed.jpg";
import AhmedSanad from "../assets/AhmedSanad.jpg";
import RadyHesham from "../assets/RadyHesham.jpg";
import AlaaAshraf from "../assets/AlaaAshraf.jpg";  

const teamData = {
  CEO: [
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
  ],
  "Computer Engineering": [
    {
      name: "Ahmed Mohamed Sanad",
      title: "Electronics and Software Engineer | Mechatronics Teaching Assistant",
      image: AhmedSanad,
      description: `Ahmed Mohamed Sanad is a Mechatronics graduate with expertise in electronics, software engineering, 
      and satellite systems. At Nano Satellite Yard, he plays a key role in CubeSat development, applying his expertise 
      in renewable energy and PCB design to create innovative solutions.
      
      His technical experience includes designing an educational 8-bit computer and working on both on-grid 
      and off-grid solar power systems. Ahmed is committed to advancing technology through his contributions to the field.
      
      As a Teaching Assistant at ECCAT, he is passionate about mentoring future engineers, inspiring curiosity, 
      and fostering technical growth.`,
    },
    {
      name: "Alaa Ashraf",
      title: "Embedded Systems Instructor | Computer Science Instructor",
      image: AlaaAshraf,
      description: `- Worked as Embedded Systems Instructor at Misr International Computer and AI (MICA)
      - Worked as Embedded Systems Content creator at Protech
      - Worked as Computer Science Instructor at ISchool
      - Graduated from Engineering College, Electronics and Communication Department.`,
    },
  ],
  "Mechanical Engineering": [ 
    {
      name: "Rady Hesham Ahmed",
      title: "Mechanical Engineer | Instructor",
      image: RadyHesham,
      description: `Graduation project Overhead Crane Design
      • (Team leader, responsible for optimum part design and steel structure selection.)
      Grade: Excellent
      
      Freelance Instructor | since 2017
      Taught courses:
      - Engineering Drawing
      - Mechanical Drawing
      - Mechanical Design
      - SOLIDWORKS
      - Autocad`,
    },
  ],
  "Design & Development": [
    {
      name: "Kareem Ahmed",
      title: "Graphics Designer | Full-Stack Developer",
      image: KareemAhmed,
      description: `Kareem Ahmed is a Mechatronics Engineer specializing in mechanical systems and structural analysis. 
      At Nano Satellite Yard, he plays a key role in CubeSat development, blending technical expertise with problem-solving passion.
      
      With skills in graphic design, web development, and animation, Kareem adds a creative edge to his work. 
      His experience spans innovative engineering solutions, award-winning robotics leadership, and compelling digital designs.
      
      Driven by curiosity and growth, Kareem strives to make a lasting impact through innovation and collaboration, 
      uniting diverse disciplines to achieve meaningful progress.`,
    },
  ],
};

const MAX_LENGTH = 150; 

const CEO = () => {
  return (
    <div id="team" className="ceo-container">
      <h1 className="ceo-heading">Meet Our Leadership</h1>

      <div className="ceo-list">
        {teamData.CEO.map((person, index) => (
          <CEOMember key={index} person={person} />
        ))}
      </div>

      {Object.entries(teamData).map(([section, members]) =>
        section !== "CEO" && (
          <div key={section} className="team-section">
            <h2 className="section-title">{section}</h2>
            <div className="ceo-list">
              {members.map((person, index) => (
                <CEOMember key={index} person={person} />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

const CEOMember = ({ person }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="ceo-card">
      <img src={person.image} alt={person.name} className="ceo-image" />
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
