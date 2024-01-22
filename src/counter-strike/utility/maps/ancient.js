import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { useState, useEffect } from 'react';
import styles from "./ancient.module.css"
import TopElementsContainer from './topElementContainer';
import SmokeElementAncient from './ancient_smoke';
import MoloElementAncient from './ancient_molo';
import FlashElementAncient from './ancient_flash';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [ctThrow, setCtThrow] = useState (false)
  const [ninja, setNinja] = useState(false)
  const [ASite, setASite] = useState(false)
  const [utility, setUtility] = useState("")
  

  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    if(className == "ancient_ancient-backsiteA-smoke__KDmjs img-fluid smaller-image hover-effect"){
      setName("ancient-backsiteA-smoke")
    }if (className == "ancient_ancient-ctFromDonut-smoke__RhFsC img-fluid smaller-image hover-effect") {
      setCtThrow(true)
    }if(className == "ancient_ancient-tunnel-smoke__WiZFX img-fluid smaller-image hover-effect"){
      setName("ancient-tunnel-smoke")
    }if(className == "ancient_ancient-bLong-smoke__TA5Sf img-fluid smaller-image hover-effect"){
      setName("ancient-bLong-smoke")
    }if(className == "ancient_ancient-bShort-smoke__q4yaW img-fluid smaller-image hover-effect"){
      setName("ancient-bShort-smoke")
      console.log("test");
    }if (className == "ancient_ancient-cave-smoke__FzDtc img-fluid smaller-image hover-effect") {
      setName("ancient-cave-smoke")
      console.log("test");
    }if (className == "ancient_ancient-cat-spawn-smoke__TWdgu img-fluid smaller-image hover-effect") {
      setName("ancient-cat-smoke")
      console.log("test");
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
      setNinja(true)
    }else if (className == "ancient_ancient-cat-molo__UAdGC img-fluid smaller-image hover-effect") {
      setName("cat molo")
    }else if (className == "ancient_ancient-elbow-molo__i7ak5 img-fluid smaller-image hover-effect") {
      setName("elbow molo")
    }else if (className == "ancient_ancient-chubby-molo__L0jHY img-fluid smaller-image hover-effect") {
      setName("chubby molo")
    }else if (className == "ancient_ancient-orange-molo__wQJji img-fluid smaller-image hover-effect") {
      setName("orange molo")
    }else if (className == "ancient_ancient-A-site-molo__yx2Sq img-fluid smaller-image hover-effect") {
      setASite(true)
    }else if (className == "ancient_ancient-short-molo__m_xBa img-fluid smaller-image hover-effect") {
      setName("short molo")
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
      setName("flash A")
      console.log("short");
    }
    
  };

  const handlecross = (event) => {

    setCtThrow(false)
    setNinja(false)
    setASite(false)
    const element = event.target;
    const className = element.className;
    console.log(className);

    if(className == "ancient_donut-cross__VE7l1 img-fluid smaller-image hover-effect red_cross"){
      setName("ancient-ctFromDonut-smoke")
    }else if (className =="ancient_mid-cross__hzqYA img-fluid smaller-image hover-effect red_cross") {
      setName("ancient-ctFromMid-smoke")
    }else if (className =="ancient_T-cross__EHmNH img-fluid smaller-image hover-effect red_cross") {
      setName("ninja from T molo")
    }else if (className =="ancient_cat-cross___2EmP img-fluid smaller-image hover-effect red_cross") {
      setName("ninja from cat molo")
    }else if (className =="ancient_A-Ct-cross__0Y4IY img-fluid smaller-image hover-effect red_cross") {
      setName("A site from ct molo")
    }else if (className =="ancient_A-T-cross__97FZg img-fluid smaller-image hover-effect red_cross") {
      setName("A site from T molo")
    }else if (className =="ancient_A-door-cross__eQCm4 img-fluid smaller-image hover-effect red_cross") {
      setName("A site from door molo")
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
        setCtThrow(false)
      } else if (utility === "molo") {
        setSeeOtherSmoke(false);
        setSeeOtherMolo(true);
        setSeeOtherFlash(false);
        setNinja(false)
        setASite(false)
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
          <img src='/csImages/layout_ancient.webp' alt="Background"></img>
          
          <SmokeElementAncient
            seeOtherSmoke={seeOtherSmoke}
            handleMouseEnter={handleMouseEnter}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            ctThrow={ctThrow}
          />

          {/* START OF MOLOTOVS */}

          <MoloElementAncient
            seeOtherMolo={seeOtherMolo}
            handleMouseEnterMolo={handleMouseEnterMolo}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            ninja={ninja}
            ASite={ASite}
          />

          {/* START OF Flashes */}
          
          <FlashElementAncient
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