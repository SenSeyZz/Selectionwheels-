import React from 'react';
import styles from './vertigo.module.css'; 

const SmokeElementVertigo = ({seeOtherSmoke, handleMouseEnter, showVideo, name}) => {
    return(
        <>
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
            allowfullscreen="1"
            
            
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
            allowfullscreen="1"
            
            
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
            allowfullscreen="1"
           
            
          ></iframe>
          
          )}
          
          {seeOtherSmoke &&(
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
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
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
            allowfullscreen="1"
           
          ></iframe>
          
          )}
        </>
    )
}

export default SmokeElementVertigo; 