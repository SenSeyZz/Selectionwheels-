import React from 'react';
import styles from './overpass.module.css'; 

const FlashElementOverpass = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name}) => {
    return(
        <>
        { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["inferno-banane-coffins-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "flash banane from coffins" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/2D3cE9q7Mr4"
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