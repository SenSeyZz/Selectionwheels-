import React from 'react';
import styles from './anubis.module.css'; 

const SmokeElementAnubis = ({seeOtherSmoke, handleMouseEnter, showVideo, name, handlecross, windowSmoke, connectorSmoke, templeSmoke}) => {
    return(
        <>
             {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis_window_smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {windowSmoke &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["T-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {windowSmoke &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["mid-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "anubis window from mid smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=22&end=30&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
    
          ></iframe>
          
          )}

          {showVideo &&  name === "anubis window from T smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=12&end=20&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis_connector_smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {connectorSmoke &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["T-connector-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {connectorSmoke &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["mid-A-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "anubis connector from mid A smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=72&end=82&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
    
          ></iframe>
          
          )}

          {showVideo &&  name === "anubis connector from T smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=47&end=60&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis_temple_smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {templeSmoke &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["T-temple-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {templeSmoke &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["mid-temple-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "anubis temple from mid smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=124&end=135&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
    
          ></iframe>
          
          )}

          {showVideo &&  name === "anubis temple from T smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=139&end=150&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis-B-left-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "anubis B left smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=169&end=180&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis-B-temple-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "anubis B temple smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=210&end=221&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis-B-ct-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "anubis B ct smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=231&end=245&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis-B-right-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "anubis B right smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=254&end=270&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis-A-heaven-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "anubis A heaven smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=355&end=362&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["anubis-A-camera-smoke"]} img-fluid smaller-image hover-effect`}
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "anubis A camera smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5E022N6atDA?start=384&end=390&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}


        </>
    )
}

export default SmokeElementAnubis; 