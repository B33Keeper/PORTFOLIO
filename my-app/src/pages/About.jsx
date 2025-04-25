import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaDatabase, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      
      <div className="mission-statement">
        <p>
          ByteForge is a team of aspiring IT students united by a shared passion for technology, innovation,
          and problem-solving. Formed through our academic journey in Information Technology, we came
          together to collaborate on real-world projects, enhance our technical skills, and bring creative digital
          solutions to life.
        </p>

        <p>
          Our purpose is to grow not only as individuals but as a team, pushing boundaries and contributing
          to the tech landscape with every project we undertake.
        </p>
      </div>

      <div className="expertise-section">
        <p className="expertise-intro">
          Each member of ByteForge brings a unique set of skills to the table, allowing us to cover a
          wide range of IT domains. Our core expertise includes:
        </p>

        <div className="expertise-grid">
          <div className="expertise-card">
            <FaCode className="expertise-icon" />
            <h3>Web Application Development</h3>
          </div>

          <div className="expertise-card">
            <FaPaintBrush className="expertise-icon" />
            <h3>UI/UX Design</h3>
          </div>

          <div className="expertise-card">
            <FaDatabase className="expertise-icon" />
            <h3>Database Management</h3>
          </div>

          <div className="expertise-card">
            <FaProjectDiagram className="expertise-icon" />
            <h3>Software Engineering and Project Management</h3>
          </div>
        </div>
      </div>

      <div className="closing-statement">
        <p>
          Our focus lies in developing innovative tech solutions with real-world applications,
          continually learning, and adapting to emerging technologies. ByteForge is not just a team
          —we are a forge where ideas become innovation.
        </p>
      </div>

      <footer className="about-footer">
        © ByteForge 2023
      </footer>
    </div>
  );
};

export default About; 