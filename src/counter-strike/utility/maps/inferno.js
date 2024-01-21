import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState, useEffect, useRef  } from 'react';
import styles from "./inferno.module.css"
import TopElementsContainer from './topElementContainer';



export default function App() {

  const videoRef = useRef(null);
  
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
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-short-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "short smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            ref={videoRef}
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
            className= {`${styles["inferno-long-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "long smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=157&end=173&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-plaine-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "plaine smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=193&end=205&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-B-ct-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "Ct B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=90&end=100&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
            
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-B-coffins-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "coffins B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=48&end=71&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-arch-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "arch smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=228&end=240&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-library-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "library smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=240&end=254&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-default-A-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "default A smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=255&end=266&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["inferno-T-stairs-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "T stairs smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
          ref={videoRef}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JF9BdvhQwOM?start=321&end=343&autoplay=1"
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
            src="https://www.youtube.com/embed/Yl0VuWAAqiU?autoplay=1"
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
            className={`${styles["inferno-newBox-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {newBoxMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["newBox-Ct-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {newBoxMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["newBox-garden-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {newBoxMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["newBox-terro-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "molo new box terro" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/9cLtu5PwtUU?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          {showVideo &&  name === "new box Ct" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=203&end=219&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          {showVideo &&  name === "new box garden" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=234&end=248&autoplay=1"
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
            className={`${styles["inferno-dark-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {darkMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["dark-Ct-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {darkMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["dark-sandbag-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "dark ct" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=266&end=277&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          {showVideo &&  name === "dark sandbag" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/VDHQN0LAjLc?autoplay=1"
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
            className={`${styles["inferno-pit-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "pit" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=71&end=93&autoplay=1"
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
            className={`${styles["inferno-C1-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "C1" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/cP19bypfPr4?autoplay=1"
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
            className={`${styles["inferno-banane-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "banane" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=124&end=140&autoplay=1"
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
            className={`${styles["inferno-default-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "default" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=146&end=160&autoplay=1"
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
            className={`${styles["inferno-backsiteA-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "backsiteA" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=165&end=176&autoplay=1"
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
            src="https://www.youtube.com/embed/2D3cE9q7Mr4?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["inferno-banane-T-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "flash banane from T" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/M3R_MrNltDw?start=10&end=54&autoplay=1"
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