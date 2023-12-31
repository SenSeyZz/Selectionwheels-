import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState } from 'react';
import styles from "./overpass.module.css"



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)


  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    if(className == "overpass_overpass-B-site-smoke__IN2Qy img-fluid smaller-image"){
      setName("B site smoke")
      console.log("short");
    }if (className == "img-fluid smaller-image overpass-heaven-B-smoke") {
      setName("heaven smoke")
      console.log("long");
    }if(className == "img-fluid smaller-image overpass-trash-smoke"){
      setName("trash smoke")
      console.log("connector");
    }if(className == "img-fluid smaller-image overpass-bank-smoke"){
      setName("bank smoke")
      console.log("B CT");
    }if(className == "img-fluid smaller-image overpass-truck-smoke"){
      setName("truck smoke")
    
    }
    
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
    setName("")
    setSeeOtherSmoke(true)
  };


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
          <div className='col d-flex justify-content-center align-items-center'>
          <img src='/csImages/overpass_layout.webp' className="" alt="Responsive image"></img>
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-B-site-smoke"]} img-fluid smaller-image`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "B site smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          )}
          
          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-heaven-B-smoke"]} img-fluid smaller-image`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "heaven smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-trash-smoke"]} img-fluid smaller-image`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "trash smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-bank-smoke"]} img-fluid smaller-image`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "bank smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["overpass-truck-smoke"]} img-fluid smaller-image `} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === " truck smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
          ></iframe>
          
          )}
          
          

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}