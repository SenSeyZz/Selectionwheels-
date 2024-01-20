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
    
  };
}

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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
          
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
            
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
            allowfullscreen
           
            
          ></iframe>
          
          )}

          {/* START OF MOLOTOVS */}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-B-arch2-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {/* START OF Flashes */}
          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-B-arch2-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}