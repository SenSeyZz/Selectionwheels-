import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { useState } from 'react';
import styles from "./ancient.module.css"



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)
  const [ctThrow, setCtThrow] = useState (false)
  const [cross, setCross] = useState (false)

  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    if(className == "ancient_ancient-backsiteA-smoke__KDmjs img-fluid smaller-image hover-effect"){
      setName("ancient-backsiteA-smoke")
    }if (className == "ancient_ancient-ctFromDonut-smoke__RhFsC img-fluid smaller-image hover-effect") {
      setCtThrow(true)
      console.log(cross);
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
    }
    
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
    setName("")
    setSeeOtherSmoke(true)
    setCross(false)
  };

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
          <div className="col d-flex justify-content-center align-items-center">
          <img src='/csImages/layout_ancient.webp' alt="Responsive image"></img>
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-backsiteA-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-backsiteA-smoke" && (
          <iframe className={styles["youtube-vid-ancient-bakcsiteA-smoke"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?autoplay=1&mute=1&end=20"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
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
          <iframe className={styles["youtube-vid-ancient-ctFromDonut-smoke"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=21&end=38&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}

          {showVideo &&  name === "ancient-ctFromMid-smoke" && cross && (
          <iframe className={styles["youtube-vid-ancient-ctFromMid-smoke"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=57&end=75&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
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
          <iframe className={styles['youtube-vid-ancient-tunnel-smoke']}  
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=39&end=56&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
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
          <iframe className={styles["youtube-vid-ancient-bLong-smoke"]} 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=78&end=93&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
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
          <iframe className={styles["youtube-vid-ancient-bShort-smoke"]} 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=94&end=108&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
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
          <iframe className={styles["youtube-vid-ancient-cave-smoke"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=109&end=125&autoplay=1&mute=1"
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