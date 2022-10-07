import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import profile from '../images/profilePic.jpg';

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
            <FontAwesomeIcon icon={faGithub} className="bounce" />
            <FontAwesomeIcon icon={faInstagram} className="bounce" />
            <FontAwesomeIcon icon={faLinkedin} className="bounce" />
          </div>
        </div>
        <figure className="profilePic">
          <img src={profile} alt="profile picture" srcset="" />
        </figure>
      </div>
    </div>
  );
};
