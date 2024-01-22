import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect, useRef  } from 'react';
import styles from "./inferno.module.css"
import TopElementsContainer from './topElementContainer';
import SmokeElementInferno from './inferno_smoke.js';
import MoloElementInferno from './inferno_molo.js';
import FlashElementInferno from './inferno_flash.js';



export default function App() {

  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [newBoxMolo, setNewBoxMolo] = useState (false)
  const [darkMolo, setDarkMolo] = useState (false)
  const [utility, setUtility] = useState("")


  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    if(className == "inferno_inferno-short-smoke__nv8yD img-fluid smaller-image hover-effect"){
      setName("short smoke")
      console.log("short");
    }if (className == "inferno_inferno-long-smoke__WcPmF img-fluid smaller-image hover-effect") {
      setName("long smoke")
      console.log("long");
    }if(className == "inferno_inferno-plaine-smoke__jDeeL img-fluid smaller-image hover-effect"){
      setName("plaine smoke")
      console.log("connector");
    }if(className == "inferno_inferno-B-ct-smoke__jNkMO img-fluid smaller-image hover-effect"){
      setName("Ct B smoke")
      console.log("B CT");
    }if(className == "inferno_inferno-B-coffins-smoke__rF1ub img-fluid smaller-image hover-effect"){
      setName("coffins B smoke")
    }if(className == "inferno_inferno-arch-smoke__JBRB1 img-fluid smaller-image hover-effect"){
      setName("arch smoke")
    }if(className == "inferno_inferno-library-smoke__FOsuS img-fluid smaller-image hover-effect"){
      setName("library smoke")
    }if(className == "inferno_inferno-default-A-smoke__kVoa3 img-fluid smaller-image hover-effect"){
      setName("default A smoke")
    }if(className == "inferno_inferno-T-stairs-smoke__CStNC img-fluid smaller-image hover-effect"){
      setName("T stairs smoke")
    }
    
  };

  const handleMouseEnterMolo = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherMolo(false)
    setUtility("molo")
    if(className == "inferno_inferno-banana-terro-molo__sm2Xd img-fluid smaller-image hover-effect"){
      setName("molo banane from T")
    }else if (className == "inferno_inferno-newBox-molo__dzcJ9 img-fluid smaller-image hover-effect") {
      setNewBoxMolo(true)
    }else if (className == "inferno_inferno-dark-molo__d39qk img-fluid smaller-image hover-effect") {
      setDarkMolo(true)
    }else if (className == "inferno_inferno-pit-molo__0kY0C img-fluid smaller-image hover-effect") {
      setName("pit")
    }else if (className == "inferno_inferno-C1-molo__teL1Q img-fluid smaller-image hover-effect") {
      setName("C1")
    }else if (className == "inferno_inferno-banane-molo__dF65W img-fluid smaller-image hover-effect") {
      setName("banane")
    }else if (className == "inferno_inferno-default-molo__7C5Ap img-fluid smaller-image hover-effect") {
      setName("default")
    }else if (className == "inferno_inferno-backsiteA-molo__w8Q0l img-fluid smaller-image hover-effect") {
      setName("backsiteA")
    }
    
  };

  const handleMouseEnterFlash = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherFlash(false)
    setUtility("flash")
    if(className == "inferno_inferno-banane-coffins-flash__DaJBD img-fluid smaller-image hover-effect"){
      setName("flash banane from coffins")
      console.log("short");
    }else if (className == "inferno_inferno-banane-T-flash__mGsxY img-fluid smaller-image hover-effect") {
      setName("flash banane from T")
    }else if (className == "inferno_inferno-2nd-mid-flash__say4h img-fluid smaller-image hover-effect") {
      setName("flash 2nd mid")
    }else if (className == "inferno_inferno-apps-flash__sarXb img-fluid smaller-image hover-effect") {
      setName("flash apps")
    }else if (className == "inferno_inferno-A-site-flash__dZeIS img-fluid smaller-image hover-effect") {
      setName("flash site A")
    }
    
    
    
  };

  const handlecross = (event) => {
    
    setNewBoxMolo(false)
    setDarkMolo(false)
    const element = event.target;
    const className = element.className;
    console.log(className);

    if(className == "inferno_newBox-terro-cross__q1TcG img-fluid smaller-image hover-effect red_cross"){
      setName("molo new box terro")
    }else if (className == "inferno_newBox-Ct-cross__k0e1v img-fluid smaller-image hover-effect red_cross") {
      setName("new box Ct")
    }else if (className == "inferno_newBox-garden-cross__xo7eI img-fluid smaller-image hover-effect red_cross") {
      setName("new box garden")
    }else if (className == "inferno_dark-sandbag-cross__czJIu img-fluid smaller-image hover-effect red_cross") {
      setName("dark sandbag")
    }else if (className == "inferno_dark-Ct-cross__tYSEf img-fluid smaller-image hover-effect red_cross") {
      setName("dark ct")
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
        setNewBoxMolo(false)
        setDarkMolo(false)
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
          <img src='/csImages/inferno_layout.png' className="" alt="Background"></img>

          <SmokeElementInferno
              seeOtherSmoke={seeOtherSmoke}
              handleMouseEnter={handleMouseEnter}
              showVideo={showVideo}
              name={name}
            />

           <MoloElementInferno
              seeOtherMolo={seeOtherMolo}
              handleMouseEnterMolo={handleMouseEnterMolo}
              showVideo={showVideo}
              name={name}
              handlecross={handlecross}
              newBoxMolo={newBoxMolo}
              darkMolo={darkMolo}
              />
        
            <FlashElementInferno
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