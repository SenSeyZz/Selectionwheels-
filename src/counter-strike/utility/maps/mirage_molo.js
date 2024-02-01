import React from 'react';
import styles from './mirage.module.css'; // Replace with the actual path to your stylesheet

const MoloElementMirage = ({seeOtherMolo, handleMouseEnterMolo, showVideo, name, handlecross, underWoodMolo, windowMolo}) => {
    return(
        <>
            { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-underWood-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          { seeOtherMolo &&(
          <h1 
            className={`${styles["mirage-underWood-molo-2"]} img-fluid smaller-image`} 
            > 2
          </h1>
          )}

          {showVideo &&  name === "mirage-underFromPalace-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=11&end=20&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-underFromRamp-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=23&end=33&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {underWoodMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["palace-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {underWoodMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["ramp-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-ramp-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-ramp-molo" &&  (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?end=9&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-window-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          { seeOtherMolo &&(
          <h1 
            className={`${styles["mirage-window-molo-2"]} img-fluid smaller-image`} 
            > 2
          </h1>
          )}

          {windowMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["left-mid-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {windowMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["top-mid-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "mirage-window-T-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=50&end=60&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           {showVideo &&  name === "mirage-window-top-mid-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=65&end=73&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-aps-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-aps-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=77&end=85&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}

           { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["mirage-jungle-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mirage-jungle-molo" && (
          <iframe className={`${styles["youtube-vid"]}`}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/3_8KvM3aMAg?start=130&end=140&autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen="1"
           
            
          ></iframe>
           )}
        </>
    )
}

export default MoloElementMirage