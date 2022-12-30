import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div id="Footer">
      <div className="socials">
        <a href="https://github.com/Tymibl05" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="bounce" />
        </a>
        <a
          href="https://www.instagram.com/tblease05/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="bounce" />
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-blease/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="bounce" />
        </a>
      </div>
      <h4>Designed and Developed by Tyler Blease &copy; 2022</h4>
    </div>
  );
};
