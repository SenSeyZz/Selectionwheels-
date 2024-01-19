import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState } from 'react';
import styles from "./mirage.module.css"



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
          <img src='/csImages/layout_mirage.webp' className="" alt="Responsive image"></img>
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["window-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "window smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-short-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "short smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-connector-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "connector smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-A-ct-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "Ct A smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-A-stairs-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "stairs A smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-A-jungle-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "jungle A smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-B-market-smoke"]} img-fluid smaller-image hover-effect`}  
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "market B smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-B-arch1-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "arch 1 B smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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
            className={`${styles["mirage-B-arch2-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "arch 2 B smoke" && (
          <iframe className={`${styles["youtube-vid-mirage-window-smoke"]}`}
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