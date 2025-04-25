import React from 'react';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      title: "BudzReserve",
      description: "An Online Reservation and Queueing System with Digital Receipt, is a Web Application which focuses on providing a faster, more reliable, and efficient way for users to reserve courts and manage queueing.",
      image: "/projects/budzreserve.png",
      technologies: ["JavaScript", "PHP", "CSS", "HTML5"]
    },
    {
      title: "Teeny Delish Website",
      description: "A modern and responsive website for a café specializing in pastries and drinks. Built using HTML, CSS, and React.js, it features an interactive menu and a smooth order selection system, allowing users to easily browse and choose their favorite items.",
      image: "/projects/teenydelish.png",
      technologies: ["React.js", "HTML5", "CSS", "JavaScript"]
    },
    {
      title: "RBS POS",
      description: "A comprehensive Point of Sale (POS) system built with Java and SQL, designed for modern retail businesses. Features include inventory management, real-time sales tracking, employee management, and detailed reporting capabilities. The system offers a user-friendly interface while maintaining robust database operations for reliable transaction processing.",
      image: "/projects/rbs-pos.png",
      technologies: ["Java", "SQL", "JavaFX", "JDBC"]
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
            <div className="project-content">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="technologies">
                  <span>Technologies used:</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 