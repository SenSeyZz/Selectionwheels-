import React from 'react';
import styles from './nuke.module.css'; 

const FlashElementNuke = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name, handlecross, aFlash}) => {
    return(
        <>
            { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["nuke-ramp-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "ramp flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/o99fySj53VQ?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
           
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["nuke-lobby-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "lobby flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/JPJfdLMqO34?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
           
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["nuke-main-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "main flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/1yGFrbhgdxw?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen
           
          ></iframe>
          )}

          { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["nuke-B-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-outside-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-roof-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )} 

          {showVideo &&  name === "A from roof" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/4xGCiOa1pdo?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "A from outside" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/4xGCiOa1pdo?autoplay=1"
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

export default FlashElementNuke; 