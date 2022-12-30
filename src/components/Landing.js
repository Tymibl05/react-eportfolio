import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import profile from '../images/animated-profile-pic.jpg';

export const Landing = () => {
  return (
    <div id="Landing">
      <div className="container">
        <div className="greeting">
          <div className="text">
            <h1>Tyler Blease</h1>
            <h4>
              <em>Full-Stack Web Developer</em>
            </h4>
            <p className="typewriter-anim">Design | Develop | Deploy</p>
          </div>
          <div className="socials">
            <a
              href="https://github.com/Tymibl05"
              target="_blank"
              rel="noreferrer"
            >
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
        </div>
        <figure className="profilePic">
          <img src={profile} alt="" />
        </figure>
      </div>
    </div>
  );
};
