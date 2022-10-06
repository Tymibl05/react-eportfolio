import React, { useRef, useState } from 'react';
import { projects } from '../data';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const projs = projects();
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <div id="Projects">
      {isProjectModalOpen && (
        <ProjectModal setProjectModalOpen={setProjectModalOpen} />
      )}
      <div>
        <h1>Projects</h1>
        <div className="cards">
          {projs.map((proj) => (
            <ProjectCard
              key={proj.name}
              proj={proj}
              isProjectModalOpen={isProjectModalOpen}
              setProjectModalOpen={setProjectModalOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
