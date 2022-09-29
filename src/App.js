import './styles/App.scss';
import { useState } from 'react';
import { Nav } from './components/Nav';
import { Landing } from './components/Landing';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div id="App">
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
