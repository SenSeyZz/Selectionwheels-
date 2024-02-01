import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./nuke.module.css"; 
import TopElementsContainer from './topElementContainer';
import SmokeElementNuke from './nuke_smoke';
import MoloElementNuke from './nuke_molo';
import FlashElementNuke from './nuke_flash';

export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [aFlash, setAFlash] = useState (false)
  const [utility, setUtility] = useState("")



  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    if(className == "nuke_nuke-outside1-smoke__XujpH img-fluid smaller-image hover-effect"){
      setName("outside1 smoke")
      console.log("short");
    }if (className == "nuke_nuke-outside2-smoke__stplH img-fluid smaller-image hover-effect") {
      setName("outside2 smoke")
      console.log("long");
    }if(className == "nuke_nuke-outside3-smoke__zmLj4 img-fluid smaller-image hover-effect"){
      setName("outside3 smoke")
      console.log("connector");
    }if(className == "nuke_nuke-heaven-smoke__J2g7s img-fluid smaller-image hover-effect"){
      setName("heaven smoke")
      console.log("B CT");
    }if(className == "nuke_nuke-hut-smoke__qhZzq img-fluid smaller-image hover-effect"){
      setName("hut smoke")
    }if(className == "nuke_nuke-lurk-door-smoke__xl_no img-fluid smaller-image hover-effect"){
      setName("door smoke")
    }if(className == "nuke_nuke-setup-smoke__dbSLN img-fluid smaller-image hover-effect"){
      setName("setup smoke")
    }
    
  };

  const handleMouseEnterMolo = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherMolo(false)
    setUtility("molo")
    if(className == "nuke_nuke-hut-roof-molo__OTrZd img-fluid smaller-image hover-effect"){
      setName("molo hut from roof")
      console.log("short");
    }else if (className == "nuke_nuke-A-roof-molo__jbqiq img-fluid smaller-image hover-effect") {
      setName("molo A site from roof")
    }else if (className == "nuke_nuke-secret-molo__X3ZKW img-fluid smaller-image hover-effect") {
      setName("molo secret")
    }else if (className == "nuke_nuke-dark-molo__DvZyL img-fluid smaller-image hover-effect") {
      setName("molo dark")
    }
    
    
  };

  const handleMouseEnterFlash = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherFlash(false)
    setUtility("flash")
    if(className == "nuke_nuke-ramp-flash__vQd4O img-fluid smaller-image hover-effect"){
      setName("ramp flash")
    }else if (className == "nuke_nuke-lobby-flash__5aNBv img-fluid smaller-image hover-effect") {
      setName("lobby flash")
    }else if (className == "nuke_nuke-main-flash__yEP8S img-fluid smaller-image hover-effect") {
      setName("main flash")
    }else if (className == "nuke_nuke-A-flash__Vb779 img-fluid smaller-image hover-effect") {
      setAFlash(true)
    }
    
  };

  const handlecross = (event) => {

    setName(false)
    setAFlash(false)
  
    const element = event.target;
    const className = element.className;
    console.log(className);

    if(className == "nuke_A-roof-flash__dSzaX img-fluid smaller-image hover-effect red_cross"){
      setName("A from roof")
    }else if(className == "nuke_A-outside-flash__kfvQy img-fluid smaller-image hover-effect red_cross"){
      setName("A from outside")
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
          <img src='/csImages/nuke_layout.svg'  alt="Background"></img>
          
          <SmokeElementNuke
            seeOtherSmoke={seeOtherSmoke}
            handleMouseEnter={handleMouseEnter}
            showVideo={showVideo}
            name={name}
          />

          {/* START OF MOLOTOVS */}

          <MoloElementNuke
            seeOtherMolo={seeOtherMolo}
            handleMouseEnterMolo={handleMouseEnterMolo}
            showVideo={showVideo}
            name={name}
          />

          {/* START OF Flashes */}
          
          <FlashElementNuke
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