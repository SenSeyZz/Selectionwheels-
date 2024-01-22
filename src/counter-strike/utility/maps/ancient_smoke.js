import React from 'react';
import styles from './ancient.module.css'; 

const SmokeElementAncient = ({seeOtherSmoke, handleMouseEnter, showVideo, name, handlecross, ctThrow}) => {
    return(
        <>
            {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-backsiteA-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-backsiteA-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?autoplay=1&mute=1&end=20"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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

          {showVideo &&  name === "ancient-ctFromDonut-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=21&end=38&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {showVideo &&  name === "ancient-ctFromMid-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=57&end=75&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
          <iframe className={styles['youtube-vid']}  
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=39&end=56&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
          <iframe className={styles["youtube-vid"]} 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=78&end=93&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
          <iframe className={styles["youtube-vid"]} 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=94&end=108&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
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
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=109&end=125&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}

          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className={`${styles["ancient-cat-spawn-smoke"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnter}>
          </img>
          )}

          {showVideo &&  name === "ancient-cat-smoke" && (
          <iframe className={styles["youtube-vid"]}
            width="315"
            height="560"
            src="https://www.youtube.com/embed/SiDXHgojLd4?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
            
            
          ></iframe>
          
          )}
        </>
    )
}

export default SmokeElementAncient; 