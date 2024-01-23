import React from 'react';
import styles from './vertigo.module.css'; 

const FlashElementVertigo = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name, handlecross, yellowFlash, aFlash, bFlash}) => {
    return(
        <>
        { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["vertigo-yellow-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {yellowFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-yellow-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}    

          {showVideo &&  name === "yellow from A" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/M10oji07ct4?autoplay=1"
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
            className={`${styles["vertigo-A-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-ramp-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-51-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-headshot-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {showVideo &&  name === "A from ramp" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/jYNUN_lL3kg?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}
          
          {showVideo &&  name === "A from 51" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/2Itowz_d5xs?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "A from headshot" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/UJOMJOzcapk?autoplay=1"
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
            className={`${styles["vertigo-b-stairs-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "b stairs" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/yWEpzhzUudA?autoplay=1"
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
            className={`${styles["vertigo-b-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {bFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["B-stairs-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {bFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["B-mid-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {showVideo &&  name === "B from stairs" && (
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
          
          {showVideo &&  name === "B from mid" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/FtDXBt3gGXE?autoplay=1"
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

export default FlashElementVertigo; 