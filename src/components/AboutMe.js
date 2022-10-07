import React from 'react';

export const AboutMe = () => {
  return (
    <div id="AboutMe">
      <h1>Who am I?</h1>
      <div className="container">
        <div className="text">
          <p>
            I'm Tyler Blease and I'm a full-stack web developer. I first began
            my coding journey at University of Houston where I pursued my B.S.
            In Computer Science. Since then I've dabbled in computer networking,
            virtualization, and data analytics.
          </p>
          <p>
            Throughout my journey, I've found that I enjoy creating the webpages
            and applications that users get to interact with every day. I've
            begun to focus on Frontend Development to build upon the skills
            needed to deploy exceptional, responsive digital experiences.
          </p>
        </div>
        <div className="skills">
          <h2>Relevant Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>Sass</li>
            <li>Git</li>
            <li>NPM</li>
            <li>APIs</li>
          </ul>
        </div>
        <div className="carousel"></div>
      </div>
    </div>
  );
};
