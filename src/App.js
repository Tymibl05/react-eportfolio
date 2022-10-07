import './styles/App.scss';
import { useState } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div id="App">
      <div className="container">
        <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
