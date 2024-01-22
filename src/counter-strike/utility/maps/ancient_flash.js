import React from 'react';
import styles from './ancient.module.css'; 

const FlashElementAncient = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name}) =>{
    return(
        <>
            { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["ancient-a-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "flash A" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/aJdnuhMl6Ho"
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

export default FlashElementAncient; 