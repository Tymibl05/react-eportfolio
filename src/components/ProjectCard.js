import React, { useRef } from 'react';
import laptop from '../images/unsplashLaptop.avif';
import { useProjects } from '../contexts/ProjectContext';

export const ProjectCard = ({
  proj,
  isProjectModalOpen,
  setProjectModalOpen,
}) => {
  const { setModal } = useProjects();
  const projectRef = useRef();
  const handleModal = () => {
    setModal(projectRef.current.id);
    setProjectModalOpen(!isProjectModalOpen);
  };
  return (
    <div id="ProjectCard">
      <figure>
        <img src={laptop} alt="" />
      </figure>

      <div className="info">
        <h2>{proj.name}</h2>
        <ul>
          {proj.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <button id={proj.name} ref={projectRef} onClick={handleModal}>
          Learn More
        </button>
      </div>
    </div>
  );
};
