import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./vertigo.module.css"
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
    if(className == "nuke_nuke-hut-roof-molo__OTrZd img-fluid smaller-image hover-effect"){
      setName("molo hut from roof")
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
          <img src='/csImages/vertigo_layout.webp' className="" alt="Background"></img>
                    
          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-mid-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "mid smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=342&end=359&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-left-mid-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "left mid smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=380&end=400&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-right-mid-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "right mid smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=363&end=378&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
            
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-A-smoke1"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "A left smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=170&end=183&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-A-smoke2"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "A right smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=185&end=199&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-yellow-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "yellow smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=15&end=38&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-Tramp-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "T ramp smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=75&end=98&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-elevator-A-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "elevator A smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=215&end=226&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-right-B-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "right B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=291&end=301&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-left-B-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "left B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=303&end=317&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["vertigo-ramp-terro-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ramp terro smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MxLga5CnMFs?start=402&end=422&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          {/* START OF MOLOTOVS */}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["inferno-banana-terro-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo banane from T" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/Yl0VuWAAqiU"
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