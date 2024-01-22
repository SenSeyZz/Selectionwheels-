import React from 'react';
import styles from './nuke.module.css'; 

const SmokeElementNuke = ({seeOtherSmoke, handleMouseEnter, showVideo, name}) =>{
    return(
        <>
            {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-outside1-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo && name == "outside1 smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=302&end=314&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}
          
          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-outside2-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "outside2 smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=176&end=188&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-outside3-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "outside3 smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=166&end=174&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"         
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-heaven-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "heaven smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TqkGoHbLFhw?end=20&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
                  
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-hut-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "hut smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=274&end=293&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-lurk-door-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "door smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=43&end=75&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}

          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["nuke-setup-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "setup smoke" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EIHqy_mJnDk?start=145&end=160&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          
          )}
        </>
    )
}

export default SmokeElementNuke; 