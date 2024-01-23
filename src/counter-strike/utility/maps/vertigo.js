import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./vertigo.module.css"
import TopElementsContainer from './topElementContainer';
import SmokeElementVertigo from './vertigo_smoke';
import MoloElementVertigo from './vertigo_molo';
import FlashElementVertigo from './vertigo_flash';


export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [rampMolo, setRampMolo] = useState(false)
  const [yellowFlash, setYellowFlash] = useState(false)
  const [aFlash, setAFlash] = useState(false)
  const [bFlash, setBFlash] = useState(false)
  const [utility, setUtility] = useState("")


  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    setUtility("smoke")
    if(className == "vertigo_vertigo-mid-smoke__ialYN img-fluid smaller-image hover-effect"){
      setName("mid smoke")
      console.log("short");
    }else if (className == "vertigo_vertigo-left-mid-smoke__xbrDm img-fluid smaller-image hover-effect") {
      setName("left mid smoke")
    }else if(className == "vertigo_vertigo-right-mid-smoke__gDJpY img-fluid smaller-image hover-effect"){
      setName("right mid smoke")
    }else if(className == "img-fluid smaller-image inferno-B-ct-smoke hover-effect"){
      setName("Ct B smoke")
      console.log("B CT");
    }else if(className == "img-fluid smaller-image inferno-B-coffins-smoke hover-effect"){
      setName("coffins B smoke")
    }else if(className == "vertigo_vertigo-yellow-smoke___cw_V img-fluid smaller-image hover-effect"){
      setName("yellow smoke")
    }else if(className == "vertigo_vertigo-Tramp-smoke__j4KAa img-fluid smaller-image hover-effect"){
      setName("T ramp smoke")
    }else if(className == "vertigo_vertigo-A-smoke1__1fHyY img-fluid smaller-image hover-effect"){
      setName("A left smoke")
    }else if(className == "vertigo_vertigo-A-smoke2__ptVH6 img-fluid smaller-image hover-effect"){
      setName("A right smoke")
    }else if(className == "vertigo_vertigo-elevator-A-smoke__z7AkP img-fluid smaller-image hover-effect"){
      setName("elevator A smoke")
    }else if(className == "vertigo_vertigo-right-B-smoke__083Gv img-fluid smaller-image hover-effect"){
      setName("right B smoke")
    }else if(className == "vertigo_vertigo-left-B-smoke__QiT1d img-fluid smaller-image hover-effect"){
      setName("left B smoke")
    }else if(className == "vertigo_vertigo-ramp-terro-smoke__cbdJJ img-fluid smaller-image hover-effect"){
      setName("ramp terro smoke")
    }
    
  };

  const handleMouseEnterMolo = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherMolo(false)
    setUtility("molo")
    if(className == "vertigo_vertigo-heaven-molo__u_scH img-fluid smaller-image hover-effect"){
      setName("molo heaven")
      console.log("short");
    }else if (className == "vertigo_vertigo-ramp-molo__nDpue img-fluid smaller-image hover-effect") {
      setRampMolo(true)
    }else if (className == "vertigo_vertigo-short-molo__4rDQU img-fluid smaller-image hover-effect") {
      setName("molo short")
    }else if (className == "vertigo_vertigo-elevator-molo__v6uZa img-fluid smaller-image hover-effect") {
      setName("elevator molo")
    }else if (className == "vertigo_vertigo-mid-molo__2j4lB img-fluid smaller-image hover-effect") {
      setName("mid molo")
    }else if (className == "vertigo_vertigo-B-site-molo__Bq_WE img-fluid smaller-image hover-effect") {
      setName("B site molo")
    }else if (className == "vertigo_vertigo-heaven-mid-molo__8TlU8 img-fluid smaller-image hover-effect") {
      setName("heaven mid molo")
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
    }else if (className == "vertigo_vertigo-yellow-flash__Al9sf img-fluid smaller-image hover-effect") {
      setYellowFlash(true)
    }else if (className == "vertigo_vertigo-A-flash__EKCri img-fluid smaller-image hover-effect") {
      setAFlash(true)
    }else if (className == "vertigo_vertigo-b-stairs-flash__K4VGA img-fluid smaller-image hover-effect") {
      setName("b stairs")
    }else if (className == "vertigo_vertigo-b-flash__kex9U img-fluid smaller-image hover-effect") {
      setBFlash(true)
    }
    
  };

  const handlecross = (event) => {
    setRampMolo(false)
    setName(false)
    setYellowFlash(false)
    setAFlash(false)
    setBFlash(false)
    const element = event.target;
    const className = element.className;
    console.log(className);

    if(className == "vertigo_molo-ramp-short-cross___16Oy img-fluid smaller-image hover-effect red_cross"){
      setName("molo ramp from short")
    }else if (className == "vertigo_molo-ramp-site-cross__h0xv8 img-fluid smaller-image hover-effect red_cross") {
      setName("molo ramp from site")
    }else if (className == "vertigo_A-yellow-flash__nydYf img-fluid smaller-image hover-effect red_cross") {
      setName("yellow from A")
    }else if (className == "vertigo_short-yellow-flash__7Wpxe img-fluid smaller-image hover-effect red_cross") {
      setName("yellow from short")
    }else if (className == "vertigo_A-ramp-flash__lhiku img-fluid smaller-image hover-effect red_cross") {
      setName("A from ramp")
    }else if (className == "vertigo_A-51-flash__lPrxZ img-fluid smaller-image hover-effect red_cross") {
      setName("A from 51")
    }else if (className == "vertigo_A-headshot-flash__Y8PJy img-fluid smaller-image hover-effect red_cross") {
      setName("A from headshot")
    }else if (className == "vertigo_B-stairs-flash__u_O_s img-fluid smaller-image hover-effect red_cross") {
      setName("B from stairs")
    }else if (className == "vertigo_B-mid-flash__0JjKA img-fluid smaller-image hover-effect red_cross") {
      setName("B from mid")
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
        setRampMolo(false)
      } else if (utility === "flash") {
        setSeeOtherSmoke(false);
        setSeeOtherMolo(false);
        setSeeOtherFlash(true);
        setYellowFlash(false)
        setAFlash(false)
        setBFlash(false)
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
          <img src='/csImages/vertigo_layout.webp' className="" alt="Background"></img>
                    
          <SmokeElementVertigo
            seeOtherSmoke={seeOtherSmoke}
            handleMouseEnter={handleMouseEnter}
            showVideo={showVideo}
            name={name}
          />

          {/* START OF MOLOTOVS */}

          <MoloElementVertigo
            seeOtherMolo={seeOtherMolo}
            handleMouseEnterMolo={handleMouseEnterMolo}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            rampMolo={rampMolo}
          />

          {/* START OF Flashes */}
          
          <FlashElementVertigo
            seeOtherFlash={seeOtherFlash}
            handleMouseEnterFlash={handleMouseEnterFlash}
            showVideo={showVideo}
            name={name}
            handlecross={handlecross}
            yellowFlash={yellowFlash}
            aFlash={aFlash}
            bFlash={bFlash}
          />

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}