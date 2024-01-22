import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./mirage.module.css"
import TopElementsContainer from './topElementContainer';
import SmokeElementMirage from './mirage_smoke';
import MoloElementMirage from './mirage_molo';
import FlashElementMirage from './mirage_flash';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [underWoodMolo, setUnderWoodMolo] = useState (false)
  const [windowMolo, setWindowMolo] = useState (false)
  const [aFlash, setAFlash] = useState (false)
  const [utility, setUtility] = useState("")


  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    
    if(className == "mirage_window-smoke__GBkmp img-fluid smaller-image hover-effect"){
      setName("window smoke")
      console.log("window");
    }if (className == "mirage_mirage-short-smoke__MjlsZ img-fluid smaller-image hover-effect") {
      setName("short smoke")
      console.log("short");
    }if(className == "mirage_mirage-connector-smoke__0u4aR img-fluid smaller-image hover-effect"){
      setName("connector smoke")
      console.log("connector");
    }if(className == "mirage_mirage-A-ct-smoke__Ay2_V img-fluid smaller-image hover-effect"){
      setName("Ct A smoke")
      console.log("A CT");
    }if(className == "mirage_mirage-A-stairs-smoke__1jdVT img-fluid smaller-image hover-effect"){
      setName("stairs A smoke")
    }if(className == "mirage_mirage-A-jungle-smoke__7za_I img-fluid smaller-image hover-effect"){
      setName("jungle A smoke")
    }if (className == "mirage_mirage-B-market-smoke__YL6ia img-fluid smaller-image hover-effect") {
      setName("market B smoke")
      console.log("market B ");
    }if (className == "mirage_mirage-B-arch1-smoke__Yu2Ov img-fluid smaller-image hover-effect") {
      setName("arch 1 B smoke")
      console.log("arch 1 B ");
    }if (className == "mirage_mirage-B-arch2-smoke__6qZg5 img-fluid smaller-image hover-effect") {
      setName("arch 2 B smoke")
      console.log("arch 2 B ");
    }if (className == "mirage_mirage-palace-ladder-smoke__DKAw6 img-fluid smaller-image hover-effect") {
      setName("palace from ladder")
      console.log("palace from ladder");
    }if (className == "mirage_mirage-topMid-smoke__a_bsH img-fluid smaller-image hover-effect") {
      setName("top mid from T")
    }if (className == "mirage_mirage-topConnector-smoke__P8zRa img-fluid smaller-image hover-effect") {
      setName("top connector")
    }if (className == "mirage_mirage-B-short-smoke__FiFc0 img-fluid smaller-image hover-effect") {
      setName("short B smoke")
    }
    
  };

  const handleMouseEnterMolo = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherMolo(false)
    setUtility("molo")
    if(className == "mirage_mirage-underWood-molo__yZ83W img-fluid smaller-image hover-effect"){
      setUnderWoodMolo(true)
  }else if (className == "mirage_mirage-ramp-molo__k1B_H img-fluid smaller-image hover-effect") {
    setName("mirage-ramp-molo")
  }else if (className == "mirage_mirage-window-molo__DoIBI img-fluid smaller-image hover-effect") {
      setWindowMolo(true)
  }else if (className == "mirage_mirage-aps-molo__uPvbC img-fluid smaller-image hover-effect") {
    setName("mirage-aps-molo")
  }else if (className == "mirage_mirage-jungle-molo__6xY9U img-fluid smaller-image hover-effect") {
    setName("mirage-jungle-molo")
  }
}

  const handleMouseEnterFlash = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherFlash(false)
    setUtility("flash")
    if(className == "mirage_mirage-A-flash__lOyx6 img-fluid smaller-image hover-effect"){
      setAFlash(true)
    }else if (className == "mirage_mirage-B-flash__XoaYp img-fluid smaller-image hover-effect") {
      setName("mirage-B-site-flash")
    }else if (className == "mirage_mirage-B-apps-flash__QVTXP img-fluid smaller-image hover-effect") {
      setName("mirage-B-apps-flash")
    }else if (className == "mirage_mirage-window-flash__wnBbI img-fluid smaller-image hover-effect") {
      setName("mirage-window-flash")
    }
    
  };

  const handlecross = (event) => {
    
    setUnderWoodMolo(false)
    setWindowMolo(false)
    setAFlash(false)
    const element = event.target;
    const className = element.className;
    console.log(className);

    if(className == "mirage_palace-cross__XOGkq img-fluid smaller-image hover-effect red_cross"){
      setName("mirage-underFromPalace-molo")
    }else if (className =="mirage_ramp-cross__qrBvQ img-fluid smaller-image hover-effect red_cross") {
      setName("mirage-underFromRamp-molo")
    }else if (className =="mirage_left-mid-cross__CsFqn img-fluid smaller-image hover-effect red_cross") {
      setName("mirage-window-T-molo")
    }else if (className =="mirage_top-mid-cross__KrPPm img-fluid smaller-image hover-effect red_cross") {
      setName("mirage-window-top-mid-molo")
    }else if (className =="mirage_lamp-flash__bJCTH img-fluid smaller-image hover-effect red_cross") {
      setName("mirage-lamp-flash")
    }else if (className =="mirage_A-site-flash__ND60O img-fluid smaller-image hover-effect red_cross") {
      setName("mirage-A-site-flash")
    }else if (className =="mirage_Ct-ramp-flash__GgoUG img-fluid smaller-image hover-effect red_cross") {
      setName("mirage-Ct-ramp-flash")
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
        setUnderWoodMolo(false)
        setWindowMolo(false)
      } else if (utility === "flash") {
        setSeeOtherSmoke(false);
        setSeeOtherMolo(false);
        setSeeOtherFlash(true);
        setAFlash(false)
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
          <img src='/csImages/layout_mirage.webp' className="" alt="Background"></img>
          
          <SmokeElementMirage
            seeOtherSmoke={seeOtherSmoke}
            handleMouseEnter={handleMouseEnter}
            showVideo={showVideo}
            name={name}
          />
          
          {/* START OF MOLOTOVS */}

          <MoloElementMirage
            seeOtherMolo={seeOtherMolo}
            handleMouseEnterMolo={handleMouseEnterMolo}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            underWoodMolo={underWoodMolo}
            windowMolo={windowMolo}
          />


          {/* START OF Flashes */}
          <FlashElementMirage
            seeOtherFlash={seeOtherFlash}
            handleMouseEnterFlash={handleMouseEnterFlash}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            aFlash={aFlash}
          />



          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}