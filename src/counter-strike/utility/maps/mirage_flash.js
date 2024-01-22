import React from 'react';
import styles from './mirage.module.css';

const FlashElementMirage = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name, handlecross, aFlash}) => {
    return(
        <>
            { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-A-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/3.png' 
            className={`${styles["mirage-A-flash-3"]} img-fluid smaller-image`} 
            alt="Responsive image" 
           >
          </img>
          )}
          
          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["lamp-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-site-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["Ct-ramp-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "mirage-lamp-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=14&end=22&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-A-site-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=50&end=63&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-Ct-ramp-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=100&end=110&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-B-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "mirage-B-site-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=183&end=195&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-B-apps-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "mirage-B-apps-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=215&end=227&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["mirage-window-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "mirage-window-flash" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/u4iqihJis2k?start=255&end=265&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}
        </>
    )
}

export default FlashElementMirage; 