import React from 'react';
import styles from './mirage.module.css'; // Replace with the actual path to your stylesheet


const SmokeElementMirage = ({seeOtherSmoke, handleMouseEnter, showVideo, name}) =>{

    return(
        <>
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
            src="https://www.youtube.com/embed/F_DVcBW3KAg?start=9&end=30&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
          
            
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
            src="https://www.youtube.com/embed/wZ7UnVk-Zoo?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
            src="https://www.youtube.com/embed/9vjcZPteWrY?start=59&end=80&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=295&end=324&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
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
            src="https://www.youtube.com/embed/aTybn7crELo?start=13&end=35&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
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
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=276&end=294&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=325&end=367&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
            src="https://www.youtube.com/embed/Vjtu7FsKs40?start=10&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
            src="https://www.youtube.com/embed/Vjtu7FsKs40?end=10&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-B-short-smoke"]} img-fluid smaller-image hover-effect`}  
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "short B smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=369&end=393&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
            allowfullscreen="1"
           
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-topMid-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "top mid from T" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=62&end=75&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["mirage-topConnector-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "top connector" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/ypjJca0K_1s?start=145&end=154&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

        </>
    )
}

export default SmokeElementMirage; 