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
        <FontAwesomeIcon icon={faGithub} className="bounce" />
        <FontAwesomeIcon icon={faInstagram} className="bounce" />
        <FontAwesomeIcon icon={faLinkedin} className="bounce" />
      </div>
      <h4>Designed and Developed by Tyler Blease &copy; 2022</h4>
    </div>
  );
};
