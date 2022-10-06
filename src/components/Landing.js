import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

export const Landing = () => {
  return (
    <div id="Landing">
      <div className="greeting">
        <div className="text">
          <h2>Hi! I'm</h2>
          <h1>Tyler Blease</h1>
          <p>Design | Develop | Deploy</p>
        </div>
        <div className="socials">
          <FontAwesomeIcon icon={faGithub} className="bounce" />
          <FontAwesomeIcon icon={faInstagram} className="bounce" />
          <FontAwesomeIcon icon={faLinkedin} className="bounce" />
          <FontAwesomeIcon icon={faFilePdf} className="bounce" />
        </div>
      </div>
      <div className="orbit">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.JS</li>
          <li>Sass</li>
          <li>Git</li>
          <li>npm</li>
          <li>ES5/ES6</li>
          <li>JSON</li>
          <li>And More</li>
        </ul>
      </div>
    </div>
  );
};
