import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { Landing } from '../components/Landing';
import { Projects } from '../components/Projects';

export const HomePage = () => {
  return (
    <div id="HomePage">
      <div>
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
