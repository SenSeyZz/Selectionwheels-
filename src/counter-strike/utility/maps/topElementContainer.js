// TopElementsContainer.js
import React from 'react';
import { handleSwitchToSmoke, handleSwitchToMolo, handleSwitchToFlash } from './switchFunctions'; 

const TopElementsContainer = ({ setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash, styles }) => {
  return (
    <div className="top-elements-container">
      <img 
        src='/csImages/smoke.png' 
        className="top-smoke hover-effect-top-smoke"
        alt="Top Image"
        onClick={() => handleSwitchToSmoke(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash)}
      />
      <img 
        src='/csImages/incendiary.webp' 
        className="top-inciendiary hover-effect-top-molo"
        alt="Top Image"
        onClick={() => handleSwitchToMolo(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash)}
      />
      <img 
        src='/csImages/flash.webp' 
        className="top-flash hover-effect-top-molo"
        alt="Top Image"
        onClick={() => handleSwitchToFlash(setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash)}
      />
    </div>
  );
};

export default TopElementsContainer;
