import React from 'react';
import styles from './overpass.module.css'; 

const SmokeElementOverpass = ({seeOtherSmoke, handleMouseEnter, showVideo, name}) => {
    return(
        <>
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
            allowfullscreen="1"
          
            
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
            allowfullscreen="1"
          
            
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
            allowfullscreen="1"
            
            
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
            allowfullscreen="1"
            
            
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
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}
          
          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}
        </>
    )
}

export default SmokeElementOverpass; 