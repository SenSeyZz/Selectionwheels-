import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { useState, useEffect } from 'react';
import styles from "./ancient.module.css"
import TopElementsContainer from './topElementContainer';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [seeOtherMolo, setSeeOtherMolo] = useState (false)
  const [seeOtherFlash, setSeeOtherFlash] = useState (false)
  const [ctThrow, setCtThrow] = useState (false)
  const [cross, setCross] = useState (false)
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
    if(className == "inferno_inferno-banana-terro-molo__sm2Xd img-fluid smaller-image hover-effect"){
      setName("molo banane from T")
      console.log("short");
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
      } else if (utility === "flash") {
        setSeeOtherSmoke(false);
        setSeeOtherMolo(false);
        setSeeOtherFlash(true);
      }
    }
  }, [showVideo, utility]);

  const handlecross = (event) => {
    setCross(true)
    setCtThrow(false)
    const element = event.target;
    const className = element.className;
    console.log(className);

    if(className == "ancient_donut-cross__VE7l1 img-fluid smaller-image hover-effect red_cross"){
      setName("ancient-ctFromDonut-smoke")
    }else if (className =="ancient_mid-cross__hzqYA img-fluid smaller-image hover-effect red_cross") {
      setName("ancient-ctFromMid-smoke")
    }
  
  }


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
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-backsiteA-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-backsiteA-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?autoplay=1&mute=1&end=20"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-ctFromDonut-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-ctFromDonut-smoke" && cross && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=21&end=38&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {showVideo &&  name === "ancient-ctFromMid-smoke" && cross && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=57&end=75&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {ctThrow &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["donut-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {ctThrow &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["mid-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-tunnel-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-tunnel-smoke" && (
          <iframe className={styles['youtube-vid']}  
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=39&end=56&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-bLong-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-bLong-smoke" && (
          <iframe className={styles["youtube-vid"]} 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=78&end=93&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-bShort-smoke"]} img-fluid smaller-image hover-effect`}  
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-bShort-smoke" && (
          <iframe className={styles["youtube-vid"]} 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=94&end=108&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-cave-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-cave-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=109&end=125&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-cat-spawn-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-cat-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="315"
            height="560"
            src="https://www.youtube.com/embed/SiDXHgojLd4?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {/* START OF MOLOTOVS */}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["nuke-hut-roof-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo hut from roof" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/_Y1CP-0zJAI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"    
            allowfullscreen="1"
            
          ></iframe>
          )}

          {/* START OF Flashes */}
          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["ancient-a-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "flash A" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/aJdnuhMl6Ho"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
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