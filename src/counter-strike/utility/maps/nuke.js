import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect } from 'react';
import styles from "./nuke.module.css"; 
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
          <img src='/csImages/nuke_layout.svg'  alt="Background"></img>
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-outside1-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "outside1 smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=302&end=314&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}
          
          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-outside2-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "outside2 smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=176&end=188&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-outside3-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "outside3 smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=166&end=174&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"         
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-heaven-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "heaven smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TqkGoHbLFhw?end=20&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
                  
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-hut-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "hut smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=274&end=293&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-lurk-door-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "door smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=43&end=75&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-setup-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "setup smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=145&end=160&autoplay=1"
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

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["nuke-A-roof-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo A site from roof" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/9C4fKR267Mk?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["nuke-secret-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo secret" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/q0jNYGkNEWY?autoplay=1"
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