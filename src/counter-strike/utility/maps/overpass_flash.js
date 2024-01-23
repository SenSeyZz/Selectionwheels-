import React from 'react';
import styles from './overpass.module.css'; 

const FlashElementOverpass = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name}) => {
    return(
        <>
        { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["overpass-water-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "overpass-water-flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/p9zc32_FPWk?start=37&end=53&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
          
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["overpass-Bsite-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "overpass-Bsite-flash" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/PPCnfEH93TY?start=5&end=16&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
          
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["overpass-Asite-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "overpass-Asite-flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/k1IJ8uM1SZo?start=7&end=23&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
          
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["overpass-long-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "overpass-long-flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/k1IJ8uM1SZo?start=46&end=64&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
          
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["overpass-long2-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "overpass-long2-flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/7jSaSF7HPeM?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
          
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["overpass-toilet-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "overpass-toilet-flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/j_QeLVAeGnU?end=15&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
          
          ></iframe>
          )}
        </>
    )
}

export default FlashElementOverpass; 