import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { useState, useEffect } from 'react';
import styles from "./anubis.module.css"
import TopElementsContainer from './topElementContainer';
import SmokeElementAnubis from './anubis_smoke';
import MoloElementAnubis from './anubis_molo';
import FlashElementAnubis from './anubis_flash';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [windowSmoke, setWindowSmoke] = useState (false)
  const [connectorSmoke, setConnectorSmoke] = useState (false)
  const [templeSmoke, setTempleSmoke] = useState (false)
  const [utility, setUtility] = useState("")
  

  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    if(className == "anubis_anubis_window_smoke__M4gs2 img-fluid smaller-image hover-effect"){
        setWindowSmoke(true)
    }else if (className =="anubis_anubis_connector_smoke__WSuAN img-fluid smaller-image hover-effect") {
        setConnectorSmoke(true)
    }else if (className =="anubis_anubis_temple_smoke__WjoK5 img-fluid smaller-image hover-effect") {
        setTempleSmoke(true)
    }else if (className =="anubis_anubis-B-left-smoke__bB1Wv img-fluid smaller-image hover-effect") {
        setName("anubis B left smoke")
    }else if (className =="anubis_anubis-B-temple-smoke__N59bc img-fluid smaller-image hover-effect") {
        setName("anubis B temple smoke")
    }else if (className =="anubis_anubis-B-ct-smoke__cZH_7 img-fluid smaller-image hover-effect") {
        setName("anubis B ct smoke")
    }else if (className =="anubis_anubis-B-right-smoke__pEabb img-fluid smaller-image hover-effect") {
        setName("anubis B right smoke")
    }else if (className =="anubis_anubis-A-heaven-smoke__3cm1W img-fluid smaller-image hover-effect") {
        setName("anubis A heaven smoke")
    }else if (className =="anubis_anubis-A-camera-smoke___i_Yc img-fluid smaller-image hover-effect") {
        setName("anubis A camera smoke")
    }
    
  };

  const handleMouseEnterMolo = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherMolo(false)
    setUtility("molo")
    if(className == "ancient_ancient-ninja-molo__PGYCu img-fluid smaller-image hover-effect"){
      
    }
    
    
  };

  const handleMouseEnterFlash = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherFlash(false)
    setUtility("flash")
    if(className == "ancient_ancient-a-flash__pZheC img-fluid smaller-image hover-effect"){
     
    }
    
  };

  const handlecross = (event) => {

    const element = event.target;
    const className = element.className;
    console.log(className);
    setWindowSmoke(false)
    setConnectorSmoke(false)
    setTempleSmoke(false)
    if(className == "anubis_T-cross__bBI6m img-fluid smaller-image hover-effect red_cross"){
      setName("anubis window from T smoke")
    }else if (className == "anubis_mid-cross__2N4dC img-fluid smaller-image hover-effect red_cross") {
        setName("anubis window from mid smoke")
    }else if (className == "anubis_mid-A-cross__8qGFx img-fluid smaller-image hover-effect red_cross") {
        setName("anubis connector from mid A smoke")
    }else if (className == "anubis_T-connector-cross__FJ4Qp img-fluid smaller-image hover-effect red_cross") {
        setName("anubis connector from T smoke")
    }else if (className == "anubis_mid-temple-cross___txsF img-fluid smaller-image hover-effect red_cross") {
        setName("anubis temple from mid smoke")
    }else if (className == "anubis_T-temple-cross__BAZqq img-fluid smaller-image hover-effect red_cross") {
        setName("anubis temple from T smoke")
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
        setWindowSmoke(false)
        setConnectorSmoke(false)
        setTempleSmoke(false)
      } else if (utility === "molo") {
        setSeeOtherSmoke(false);
        setSeeOtherMolo(true);
        setSeeOtherFlash(false);
      } else if (utility === "flash") {
        setSeeOtherSmoke(false);
        setSeeOtherMolo(false);
        setSeeOtherFlash(true);
      }
    }
  }, [showVideo, utility]);


  return (
    
    <div className={styles["black-bg"]}>
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/utility">Previous </Link></li>
      </ul>
      </div>

      <div className="container">
        <div className ='row'>
          <div className ="col">

            <TopElementsContainer
                setSeeOtherMolo={setSeeOtherMolo}
                setSeeOtherSmoke={setSeeOtherSmoke}
                setSeeOtherFlash={setSeeOtherFlash}
                styles={styles}
              />
          <div className="col d-flex justify-content-center align-items-center">
          <img src='/csImages/layout_anubis.webp' alt="Background"></img>
          
          <SmokeElementAnubis
            seeOtherSmoke={seeOtherSmoke}
            handleMouseEnter={handleMouseEnter}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            windowSmoke={windowSmoke}
            connectorSmoke={connectorSmoke}
            templeSmoke={templeSmoke}
          />


          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}