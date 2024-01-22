import styles from "./inferno.module.css"
import React, { use, useState, useEffect, useRef  } from 'react';

const SmokeElementInferno = ({ seeOtherSmoke, handleMouseEnter, showVideo, name }) => {

    const videoRef = useRef(null);

    return (
      <>
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
            allowfullscreen="1"
            
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
            allowfullscreen="1"
            
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
            allowfullscreen="1"          
            
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
            allowfullscreen="1"
            
            
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
            allowfullscreen="1"
            
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
            allowfullscreen="1"
            
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
            allowfullscreen="1"
            
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
            allowfullscreen="1"
            
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
            allowfullscreen="1"
            
          ></iframe>
          
          )}
      </>
    );
  };
  
  export default SmokeElementInferno;