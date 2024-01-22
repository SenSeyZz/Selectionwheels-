import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./mirage.module.css"
import TopElementsContainer from './topElementContainer';



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
          
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["window-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "window smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?start=9&end=30&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
          
            
          ></iframe>
          )}
          
          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-short-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "short smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wZ7UnVk-Zoo?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-connector-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "connector smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9vjcZPteWrY?start=59&end=80&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-A-ct-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "Ct A smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=295&end=324&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-A-stairs-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "stairs A smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aTybn7crELo?start=13&end=35&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-A-jungle-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "jungle A smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=276&end=294&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-B-market-smoke"]} img-fluid smaller-image hover-effect`}  
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "market B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=325&end=367&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-B-arch1-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "arch 1 B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vjtu7FsKs40?start=10&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-B-arch2-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "arch 2 B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Vjtu7FsKs40?end=10&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-B-short-smoke"]} img-fluid smaller-image hover-effect`}  
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "short B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=369&end=393&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-palace-ladder-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "palace from ladder" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/ZxsBulS58PM"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-topMid-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "top mid from T" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=62&end=75&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-topConnector-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "top connector" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=145&end=154&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

          {/* START OF MOLOTOVS */}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-underWood-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-underFromPalace-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=11&end=20&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-underFromRamp-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=23&end=33&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {underWoodMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["palace-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {underWoodMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["ramp-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-ramp-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-ramp-molo" &&  (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?end=9&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-window-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {windowMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["left-mid-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {windowMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["top-mid-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "mirage-window-T-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=50&end=60&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-window-top-mid-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=65&end=73&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-aps-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-aps-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=77&end=85&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-jungle-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-jungle-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=130&end=140&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}


          {/* START OF Flashes */}
          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-A-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/3.png' 
            className={`${styles["mirage-A-flash-3"]} img-fluid smaller-image`} 
            alt="Responsive image" 
           >
          </img>
          )}
          
          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["lamp-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-site-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["Ct-ramp-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "mirage-lamp-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=14&end=22&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-A-site-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=50&end=63&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-Ct-ramp-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=100&end=110&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-B-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "mirage-B-site-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=183&end=195&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-B-apps-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "mirage-B-apps-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=215&end=227&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-window-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "mirage-window-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=255&end=265&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}



          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}