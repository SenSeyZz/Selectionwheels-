import React from 'react';
import styles from './overpass.module.css'; 

const MoloElementOverpass = ({seeOtherMolo, handleMouseEnterMolo, showVideo, name, handlecross, defaultB, shortMolo }) => {
    return(
        <>
        { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-sortie-terro-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}
          
          {showVideo &&  name === "molo sortie terro" && (
          <iframe className={styles["youtube-vid"]}
            width="315"
            height="560"
            src="https://www.youtube.com/embed/O8ZOy5h_hK4?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
           
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-B-default-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {defaultB &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["coin-pute-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {defaultB &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["toilet-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}
          
          {showVideo &&  name === "default from coin pute" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IyP8c83vkAQ?start=29&end=41&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          
          {showVideo &&  name === "default from toilet" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F9NFxqFNA3A?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-A-default-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "default from trash" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IyP8c83vkAQ?start=14&end=23&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-short-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {shortMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["short-A-bench"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {shortMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["short-A-vent"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "short from A bench" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-voDF9YETk?start=29&end=42&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          
          {showVideo &&  name === "short from A vent" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-voDF9YETk?start=68&end=84&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-sorti-short-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "sortie short" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-voDF9YETk?start=47&end=63&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-toxic-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "toxic" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jl6s_x-j2i0?end=11&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
            web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["overpass-graffiti-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "graffiti" && (
          <iframe className={styles["youtube-vid"]}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jl6s_x-j2i0?start=68&end=76&autoplay=1"
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

export default MoloElementOverpass;