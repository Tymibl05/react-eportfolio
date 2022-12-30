import React from 'react';

export const Nav = ({ setModal }) => {
  // const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      {/* <div
        className={`menu-icon ${isMenuOpen ? 'menuOpen' : ''}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <div className="pipe1">|</div>
        <div className="pipe2">|</div>
      </div> */}
      <h2>Tyler Blease</h2>
      <button onClick={() => setModal(true)}>Contact</button>
    </nav>
  );
};
