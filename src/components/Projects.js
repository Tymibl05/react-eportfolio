import React, { useRef } from 'react';
import { projects } from '../data';
import { CardSlide } from './CardSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
  const projs = projects();
  return (
    <div id="Projects">
      <h1>My Work</h1>
      {projs.map((project) => {
        return (
          <CardSlide>
            <div id="card">
              <img className={`filler`} src="" alt="" />

              <div className="front">
                <h2>{project.name}</h2>
                <div className="badges">
                  {project.badges.map((badge) => (
                    <figure></figure>
                  ))}
                </div>
              </div>
              <div className="back">
                <p>{project.descriptions.long}</p>
                <div>
                  {project.links.github && (
                    <a href="">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {project.links.live && (
                    <a href="">
                      <FontAwesomeIcon icon={faLaptop} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </CardSlide>
        );
      })}
    </div>
  );
};
