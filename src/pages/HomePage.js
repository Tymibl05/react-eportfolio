import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { Landing } from '../components/Landing';
import { Projects } from '../components/Projects';

export const HomePage = ({ setModal }) => {
  return (
    <div id="HomePage">
      <div>
        <Landing />
        <AboutMe />
        <Projects />
        <Contact setModal={setModal} />
      </div>
    </div>
  );
};
