import React from 'react';

export const AboutMe = () => {
  return (
    <div id="AboutMe">
      <h1>Who Am I?</h1>
      <div className="cards">
        <div className="about-card ">
          <img className="filler" src="" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur <span>adipisicing</span>{' '}
            elit. Dolorum deleniti magnam suscipit illum eligendi nobis magni
            accusamus quasi, repellat veniam eveniet doloremque dicta,
            voluptatum sint autem animi praesentium harum soluta.
          </p>
        </div>
        <div className="about-card right">
          <img className="filler right" src="" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            deleniti magnam suscipit illum eligendi nobis magni accusamus quasi,
            repellat veniam eveniet <span>doloremque</span> dicta, voluptatum
            sint autem animi praesentium harum soluta.
          </p>
        </div>
        <div className="about-card ">
          <img className="filler" src="" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            deleniti magnam suscipit illum <span>eligendi</span> nobis magni
            accusamus quasi, repellat veniam eveniet doloremque dicta,
            voluptatum sint autem animi praesentium harum soluta.
          </p>
        </div>
      </div>
    </div>
  );
};
