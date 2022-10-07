import React, { useState } from 'react';

export const Nav = ({ darkTheme, setDarkTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div
        className={`menu-icon ${isMenuOpen ? 'menuOpen' : ''}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <div className="pipe1">|</div>
        <div className="pipe2">|</div>
      </div>
      <button>Contact</button>
    </nav>
  );
};
