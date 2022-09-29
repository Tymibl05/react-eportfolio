import React, { useState } from 'react';

export const CardSlide = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={toggle ? 'slide' : ''} onClick={() => setToggle(!toggle)}>
      {children}
    </div>
  );
};
