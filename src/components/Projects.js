import React, { useEffect, useState } from 'react';
import { projects } from '../data';
import admin1 from '../images/admin1.png';
import amazin1 from '../images/amazin1.png';
import amazin2 from '../images/amazin2.png';
import amazin3 from '../images/amazin3.png';
import amazin4 from '../images/amazin4.png';
import amazin5 from '../images/amazin5.png';
import eco1 from '../images/eco1.png';
import eco2 from '../images/eco2.png';
import eco3 from '../images/eco3.png';
import eco4 from '../images/eco4.png';
import todo1 from '../images/todo1.png';
import todo2 from '../images/todo2.png';
import todo3 from '../images/todo3.png';
import tunes1 from '../images/tunes1.png';
import tunes2 from '../images/tunes2.png';
import tunes3 from '../images/tunes3.png';

export const Projects = () => {
  const projs = projects();
  const [project, setProject] = useState(projs[0]);
  const [mainImg, setMainImg] = useState(amazin1);
  const [projImages, setProjImages] = useState([]);

  const images = [
    amazin1,
    amazin2,
    amazin3,
    amazin4,
    amazin5,
    admin1,
    eco1,
    eco2,
    eco3,
    eco4,
    todo1,
    todo2,
    todo3,
    tunes1,
    tunes2,
    tunes3,
  ];

  useEffect(() => {
    const filter = images.filter((image) => image.includes(project.image_root));
    setProjImages(filter);
  }, [project, images]);

  const selectProject = (proj) => {
    setProject(proj);
    const filter = images.filter((image) => image.includes(proj.image_root));
    setMainImg(filter[0]);
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
              {projImages.map((img) => (
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
