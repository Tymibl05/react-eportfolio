import './styles/App.scss';
import { useState } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ContactModal } from './components/ContactModal';

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div id="App">
      <div className="container">
        <Nav setModal={setModal} />
        <HomePage setModal={setModal} />
        <Footer />
        {modal && <ContactModal setModal={setModal} />}
      </div>
    </div>
  );
}

export default App;
