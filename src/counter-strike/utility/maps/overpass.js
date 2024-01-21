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
  const [defaultB, setDefaultB] = useState (false)
  const [shortMolo, setShortMolo] = useState (false)
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
    }if(className == "overpass_overpass-B-ramp-smoke__cjFEJ img-fluid smaller-image hover-effect"){
      setName("B ramp smoke")
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
    }if(className == "overpass_overpass-toilet-smoke__UjjdQ img-fluid smaller-image hover-effect"){
      setName("toilet smoke")
    }if(className == "overpass_overpass-door-smoke__860pS img-fluid smaller-image hover-effect"){
      setName("door smoke")
    }if(className == "overpass_overpass-ABC-smoke__8q8Jz img-fluid smaller-image hover-effect"){
      setName("ABC smoke")
    }if(className == "overpass_overpass-monster-smoke__JHtuC img-fluid smaller-image hover-effect"){
      setName("monster smoke")
    }if(className == "overpass_overpass-Tstairs-smoke__h__fW img-fluid smaller-image hover-effect"){
      setName("Tstairs smoke")
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
    }else if(className == "overpass_overpass-B-default-molo__o8UOq img-fluid smaller-image hover-effect"){
      setDefaultB(true)
    }else if(className == "overpass_overpass-A-default-molo__YM1Xc img-fluid smaller-image hover-effect"){
      setName("default from trash")
    }else if(className == "overpass_overpass-short-molo__LsHgE img-fluid smaller-image hover-effect"){
      setShortMolo(true)
    }else if(className == "overpass_overpass-sorti-short-molo__cCQaB img-fluid smaller-image hover-effect"){
      setName("sortie short")
    }else if(className == "overpass_overpass-toxic-molo__n0iJ3 img-fluid smaller-image hover-effect"){
      setName("toxic")
    }else if(className == "overpass_overpass-graffiti-molo__eBB8G img-fluid smaller-image hover-effect"){
      setName("graffiti")
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

const handlecross = (event) => {
    
  setDefaultB(false)
  setShortMolo(false)
  const element = event.target;
  const className = element.className;
  console.log(className);

  if(className == "overpass_coin-pute-cross__GPzaB img-fluid smaller-image hover-effect red_cross"){
    setName("default from coin pute")
  }else if (className =="overpass_toilet-cross__JByeV img-fluid smaller-image hover-effect red_cross") {
    setName("default from toilet")
  }else if (className =="overpass_short-A-bench__gnxxs img-fluid smaller-image hover-effect red_cross") {
    setName("short from A bench")
  }else if (className =="overpass_short-A-vent__33tBm img-fluid smaller-image hover-effect red_cross") {
    setName("short from A vent")
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
      setDefaultB(false)
      setShortMolo(false)
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
            src="https://www.youtube.com/embed/bDD2Yd4rDvc?end=13&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
          
            
          ></iframe>
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-B-ramp-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "B ramp smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bDD2Yd4rDvc?start=15&end=28&autoplay=1"
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
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=29&end=42&autoplay=1"
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
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=245&end=254&autoplay=1"
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
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=294&end=304&autoplay=1"
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
            src="https://www.youtube.com/embed/UgkHW-JjEYA?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-toilet-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "toilet smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=8&end=20&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-door-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "door smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=70&end=83&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-ABC-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ABC smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=117&end=125&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-monster-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "monster smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=346&end=356&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
           
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-Tstairs-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "Tstairs smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3TP7jIDzMpY?start=372&end=387&autoplay=1"
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
            className={`${styles["overpass-B-default-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {defaultB &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["coin-pute-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {defaultB &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["toilet-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}
          
          {showVideo &&  name === "default from coin pute" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IyP8c83vkAQ?start=29&end=41&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          
          {showVideo &&  name === "default from toilet" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F9NFxqFNA3A?autoplay=1"
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
            className={`${styles["overpass-A-default-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "default from trash" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IyP8c83vkAQ?start=14&end=23&autoplay=1"
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
            className={`${styles["overpass-short-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {shortMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["short-A-bench"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {shortMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["short-A-vent"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "short from A bench" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-voDF9YETk?start=29&end=42&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen
            
          ></iframe>
          )}

          
          {showVideo &&  name === "short from A vent" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-voDF9YETk?start=68&end=84&autoplay=1"
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
            className={`${styles["overpass-sorti-short-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "sortie short" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-voDF9YETk?start=47&end=63&autoplay=1"
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
            className={`${styles["overpass-toxic-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "toxic" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jl6s_x-j2i0?end=11&autoplay=1"
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
            className={`${styles["overpass-graffiti-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "graffiti" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jl6s_x-j2i0?start=68&end=76&autoplay=1"
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