// MoloElement.js
import React from 'react';
import styles from './inferno.module.css'; // Replace with the actual path to your stylesheet

const MoloElementInferno = ({
  seeOtherMolo,
  handleMouseEnterMolo,
  showVideo,
  name,
  handlecross,
  newBoxMolo,
  darkMolo,
}) => {
  return (
    <>
          { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["inferno-banana-terro-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "molo banane from T" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/Yl0VuWAAqiU?autoplay=1"
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
            className={`${styles["inferno-newBox-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          { seeOtherMolo &&(
          <h1 
            className={`${styles["inferno-newBox-molo-3"]} img-fluid smaller-image`} 
            > 3
          </h1>
          )}

          {newBoxMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["newBox-Ct-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {newBoxMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["newBox-garden-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {newBoxMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["newBox-terro-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "molo new box terro" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/9cLtu5PwtUU?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "new box Ct" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=203&end=219&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"          
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "new box garden" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=234&end=248&autoplay=1"
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
            className={`${styles["inferno-dark-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          { seeOtherMolo &&(
          <h1 
            className={`${styles["inferno-dark-molo-2"]} img-fluid smaller-image`} 
            > 2
          </h1>
          )}

          {darkMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["dark-Ct-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {darkMolo &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["dark-sandbag-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "dark ct" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=266&end=277&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"          
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "dark sandbag" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/VDHQN0LAjLc?autoplay=1"
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
            className={`${styles["inferno-pit-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "pit" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=71&end=93&autoplay=1"
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
            className={`${styles["inferno-C1-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "C1" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/cP19bypfPr4?autoplay=1"
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
            className={`${styles["inferno-banane-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "banane" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=124&end=140&autoplay=1"
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
            className={`${styles["inferno-default-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "default" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=146&end=160&autoplay=1"
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
            className={`${styles["inferno-backsiteA-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "backsiteA" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/QvuetsRnc70?start=165&end=176&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"       
            allowfullscreen="1"
            
          ></iframe>
          )}

    </>
  );
};

export default MoloElementInferno;
