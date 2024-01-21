import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./overpass.module.css"
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
    if(className == "overpass_overpass-B-site-smoke__IN2Qy img-fluid smaller-image hover-effect"){
      setName("B site smoke")
      console.log("short");
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
  }if(className == "overpass_overpass-B-toilet-molo__cZqCJ img-fluid smaller-image hover-effect"){
    setName("molo B from toilet")
    console.log("short");
}
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
          <img src='/csImages/overpass_layout.webp' className="" alt="Background"></img>
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-B-site-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "B site smoke" && (
          <iframe className={styles["youtube-vid"]}
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
            className={`${styles["overpass-heaven-B-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "heaven smoke" && (
          <iframe className={styles["youtube-vid"]}
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
            className={`${styles["overpass-trash-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "trash smoke" && (
          <iframe className={styles["youtube-vid"]}
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
            className={`${styles["overpass-bank-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "bank smoke" && (
          <iframe className={styles["youtube-vid"]}
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
            className={`${styles["overpass-truck-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "truck smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          {/* START OF MOLOTOVS à placer */}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-sortie-terro-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}
          
          {showVideo &&  name === "molo sortie terro" && (
          <iframe className={styles["youtube-vid"]}
            width="315"
            height="560"
            src="https://www.youtube.com/embed/O8ZOy5h_hK4?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen
           
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-B-toilet-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}
          
          {showVideo &&  name === "molo B from toilet" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F9NFxqFNA3A"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          {/* START OF Flashes */}
          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["inferno-banane-coffins-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "flash banane from coffins" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/2D3cE9q7Mr4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
          
          ></iframe>
          )}
          

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}