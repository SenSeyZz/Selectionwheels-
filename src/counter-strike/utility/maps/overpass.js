import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./overpass.module.css"
import TopElementsContainer from './topElementContainer';
import SmokeElementOverpass from './overpass_smoke';
import MoloElementOverpass from './overpass_molo';
import FlashElementOverpass from './overpass_flash';


export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [defaultB, setDefaultB] = useState (false)
  const [shortMolo, setShortMolo] = useState (false)
  const [utility, setUtility] = useState("")


  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    if(className == "overpass_overpass-B-site-smoke__IN2Qy img-fluid smaller-image hover-effect"){
      setName("B site smoke")
      console.log("short");
    }if(className == "overpass_overpass-B-ramp-smoke__cjFEJ img-fluid smaller-image hover-effect"){
      setName("B ramp smoke")
    }if (className == "overpass_overpass-heaven-B-smoke__5SGWL img-fluid smaller-image hover-effect") {
      setName("heaven smoke")
      console.log("long");
    }if(className == "overpass_overpass-trash-smoke__PAGGI img-fluid smaller-image hover-effect"){
      setName("trash smoke")
      console.log("connector");
    }if(className == "overpass_overpass-bank-smoke__CMJbh img-fluid smaller-image hover-effect"){
      setName("bank smoke")
      console.log("B CT");
    }if(className == "overpass_overpass-truck-smoke__JokVG img-fluid smaller-image hover-effect"){
      setName("truck smoke")
    }if(className == "overpass_overpass-toilet-smoke__UjjdQ img-fluid smaller-image hover-effect"){
      setName("toilet smoke")
    }if(className == "overpass_overpass-door-smoke__860pS img-fluid smaller-image hover-effect"){
      setName("door smoke")
    }if(className == "overpass_overpass-ABC-smoke__8q8Jz img-fluid smaller-image hover-effect"){
      setName("ABC smoke")
    }if(className == "overpass_overpass-monster-smoke__JHtuC img-fluid smaller-image hover-effect"){
      setName("monster smoke")
    }if(className == "overpass_overpass-Tstairs-smoke__h__fW img-fluid smaller-image hover-effect"){
      setName("Tstairs smoke")
    }
    
  };

  const handleMouseEnterMolo = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherMolo(false)
    setUtility("molo")
    if(className == "overpass_overpass-sortie-terro-molo__Z1sY8 img-fluid smaller-image hover-effect"){
      setName("molo sortie terro")
      console.log("short");
    }else if(className == "overpass_overpass-B-default-molo__o8UOq img-fluid smaller-image hover-effect"){
      setDefaultB(true)
    }else if(className == "overpass_overpass-A-default-molo__YM1Xc img-fluid smaller-image hover-effect"){
      setName("default from trash")
    }else if(className == "overpass_overpass-short-molo__LsHgE img-fluid smaller-image hover-effect"){
      setShortMolo(true)
    }else if(className == "overpass_overpass-sorti-short-molo__cCQaB img-fluid smaller-image hover-effect"){
      setName("sortie short")
    }else if(className == "overpass_overpass-toxic-molo__n0iJ3 img-fluid smaller-image hover-effect"){
      setName("toxic")
    }else if(className == "overpass_overpass-graffiti-molo__eBB8G img-fluid smaller-image hover-effect"){
      setName("graffiti")
    }
}

const handleMouseEnterFlash = (event) => {
  const element = event.target;
  const className = element.className;
  console.log(className);
  setShowVideo(true);
  setSeeOtherFlash(false)
  setUtility("flash")
  if(className == "overpass_overpass-water-flash__axeBB img-fluid smaller-image hover-effect"){
    setName("overpass-water-flash")
  }else if (className == "overpass_overpass-Bsite-flash__Sfu6s img-fluid smaller-image hover-effect") {
    setName("overpass-Bsite-flash")
  }else if (className == "overpass_overpass-Asite-flash__ffglI img-fluid smaller-image hover-effect") {
    setName("overpass-Asite-flash")
  }else if (className == "overpass_overpass-long-flash__hzIvt img-fluid smaller-image hover-effect") {
    setName("overpass-long-flash")
  }else if (className == "overpass_overpass-long2-flash__WlVRP img-fluid smaller-image hover-effect") {
    setName("overpass-long2-flash")
  }else if (className == "overpass_overpass-toilet-flash__DmbRa img-fluid smaller-image hover-effect") {
    setName("overpass-toilet-flash")
  }
  
};

const handlecross = (event) => {
    
  setDefaultB(false)
  setShortMolo(false)
  const element = event.target;
  const className = element.className;
  console.log(className);

  if(className == "overpass_coin-pute-cross__GPzaB img-fluid smaller-image hover-effect red_cross"){
    setName("default from coin pute")
  }else if (className =="overpass_toilet-cross__JByeV img-fluid smaller-image hover-effect red_cross") {
    setName("default from toilet")
  }else if (className =="overpass_short-A-bench__gnxxs img-fluid smaller-image hover-effect red_cross") {
    setName("short from A bench")
  }else if (className =="overpass_short-A-vent__33tBm img-fluid smaller-image hover-effect red_cross") {
    setName("short from A vent")
  }

}

useEffect(() => {

  const handleDocumentClick = (event) => {
    // Check if the click is outside the video box
    const clickedTagName = event.target.tagName;
    console.log(event);
    if(clickedTagName !== 'IMG' || (clickedTagName === 'IMG' && event.target.alt !== 'Responsive image')){
      
      setShowVideo(false);
      setName("");
  
    }
    
  };
  
  // Add a document click event listener
  document.addEventListener('click', handleDocumentClick);

  // Remove the event listener when the component unmounts
  return () => {
    document.removeEventListener('click', handleDocumentClick);
  };
}, []);

useEffect(() => {
  if (!showVideo) {
    // Set the corresponding state based on the utility
    if (utility === "smoke") {
      setSeeOtherSmoke(true);
      setSeeOtherMolo(false);
      setSeeOtherFlash(false);
    } else if (utility === "molo") {
      setSeeOtherSmoke(false);
      setSeeOtherMolo(true);
      setSeeOtherFlash(false);
      setDefaultB(false)
      setShortMolo(false)
    } else if (utility === "flash") {
      setSeeOtherSmoke(false);
      setSeeOtherMolo(false);
      setSeeOtherFlash(true);
    }
  }
}, [showVideo, utility]);

  return (
    
    <div className='black-bg'>
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/utility">Previous </Link></li>
      </ul>
      </div>

      <div class='container'>
        <div class = "row">
          <div class = "col">

          <TopElementsContainer
            setSeeOtherMolo={setSeeOtherMolo}
            setSeeOtherSmoke={setSeeOtherSmoke}
            setSeeOtherFlash={setSeeOtherFlash}
            styles={styles}
          />

          <div className='col d-flex justify-content-center align-items-center'>
          <img src='/csImages/overpass_layout.webp' className="" alt="Background"></img>
          
          <SmokeElementOverpass
            seeOtherSmoke={seeOtherSmoke}
            handleMouseEnter={handleMouseEnter}
            showVideo={showVideo}
            name={name}
          />

          {/* START OF MOLOTOVS */}

          <MoloElementOverpass
            seeOtherMolo={seeOtherMolo}
            handleMouseEnterMolo={handleMouseEnterMolo}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            defaultB={defaultB}
            shortMolo={shortMolo}
          />

          {/* START OF Flashes */}
          
          <FlashElementOverpass
            seeOtherFlash={seeOtherFlash}
            handleMouseEnterFlash={handleMouseEnterFlash}
            showVideo={showVideo}
            name={name}
          />
          

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}