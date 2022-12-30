import React from 'react';

export const Contact = ({ setModal }) => {
  return (
    <div id="Contact">
      <div className="container">
        <h1>Get In Touch</h1>
        <p>
          Feel free to reach out with any oportunities or even just for a quick
          chat!
        </p>
        <button onClick={() => setModal(true)}>Let's Connect!</button>
      </div>
    </div>
  );
};
