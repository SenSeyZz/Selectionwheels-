
// utilityFunctions.js
export const handleSwitchToMolo = (setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash,) => {
    setSeeOtherMolo(true);
    setSeeOtherSmoke(false);
    setSeeOtherFlash(false);
   
  };
  
  export const handleSwitchToSmoke = (setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash, ) => {
    setSeeOtherMolo(false);
    setSeeOtherSmoke(true);
    setSeeOtherFlash(false);
    
  };
  
  export const handleSwitchToFlash = (setSeeOtherMolo, setSeeOtherSmoke, setSeeOtherFlash, ) => {
    setSeeOtherMolo(false);
    setSeeOtherSmoke(false);
    setSeeOtherFlash(true);
    
  };

  