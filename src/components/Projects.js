import React, { useState } from 'react';
import { projects } from '../data';

export const Projects = () => {
  const projs = projects();
  const [project, setProject] = useState(projs[0]);
  const [mainImg, setMainImg] = useState(projs[0].images[0]);

  const selectProject = (proj) => {
    setProject(proj);
    setMainImg(proj.images[0]);
  };

  return (
    <div id="Projects">
      <div>
        <h1>Projects</h1>
        <div>
          <div className="names">
            {projs.map((proj) => (
              <button
                key={proj.name}
                className={proj.name === project.name ? 'active' : ''}
                onClick={() => selectProject(proj)}
              >
                {proj.name}
              </button>
            ))}
          </div>
          <div className="project">
            <div className="images">
              {project.images.map((img, i) => (
                <figure key={img}>
                  <img
                    src={img}
                    className={img === mainImg ? 'active' : ''}
                    onClick={(e) => setMainImg(e.target.src)}
                    alt="project"
                  ></img>
                </figure>
              ))}
            </div>
            <div className="info">
              <div className="title">
                <h2>{project.name} -</h2>
                <h3>{project.descriptions.short}</h3>
              </div>
              <p>{project.descriptions.long}</p>
              <figure>
                <img src={mainImg} alt="project" />
              </figure>
            </div>
          </div>
          {project.links && (
            <div className="links">
              <h2>Check it out!</h2>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                <button>View Code</button>
              </a>
              <a href={project.links.live} target="_blank" rel="noreferrer">
                <button>View Live</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
