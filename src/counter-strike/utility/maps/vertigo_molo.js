import React from 'react';
import styles from './vertigo.module.css'; 

const MoloElementVertigo = ({seeOtherMolo, handleMouseEnterMolo, showVideo, name, handlecross, rampMolo}) => {
    return(
        <>
          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-heaven-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo heaven" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=69&end=80&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-ramp-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {seeOtherMolo &&(
          <h1 
            className={`${styles["vertigo-ramp-molo-2"]} img-fluid smaller-image`} 
            > 2
          </h1>
          )}

          {rampMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["molo-ramp-short-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {rampMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["molo-ramp-site-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "molo ramp from short" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=43&end=50&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "molo ramp from site" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=31&end=39&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            
            allowfullscreen="1"
            
          ></iframe>
          )}

          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-short-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo short" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=83&end=91&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-elevator-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "elevator molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=99&end=107&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-mid-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "mid molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=125&end=135&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-B-site-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "B site molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=139&end=148&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          {seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["vertigo-heaven-mid-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "heaven mid molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b2n-4rZSEjk?start=153&end=163&autoplay=1"
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

export default MoloElementVertigo; 