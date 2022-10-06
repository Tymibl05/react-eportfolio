import React from 'react';
import laptop from '../images/unsplashLaptop.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { useProjects } from '../contexts/ProjectContext';

export const ProjectModal = ({ setProjectModalOpen }) => {
  const { modalProject } = useProjects();
  return (
    <div id="ProjectModal">
      {modalProject && (
        <div className="container">
          <div className="close" onClick={() => setProjectModalOpen(false)}>
            X
          </div>
          <div className="images">
            <img src={laptop} alt="" />
          </div>
          <div className="info">
            <h2>{modalProject.name}</h2>
            <p>{modalProject.descriptions.long}</p>
            <ul>
              {modalProject.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="icons">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLaptop} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
