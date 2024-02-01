import React from 'react';
import styles from './ancient.module.css'; // Replace with the actual path to your stylesheet

const MoloElementAncient = ({seeOtherMolo, handleMouseEnterMolo, showVideo, name, handlecross, ninja, ASite}) => {
    return(
        <>
        { seeOtherMolo &&(
          <img 
            src='/csImages/incendiary.webp' 
            className={`${styles["ancient-ninja-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          { seeOtherMolo &&(
          <h1 
            className={`${styles["ancient-ninja-molo-2"]} img-fluid smaller-image`} 
            > 2
          </h1>
          )}

          {ninja &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["T-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {ninja &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["cat-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "ninja from T molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/mW52eCD2Dr0?start=443&end=451&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"    
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "ninja from cat molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/mW52eCD2Dr0?start=472&end=481&autoplay=1"
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
            className={`${styles["ancient-cat-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          {showVideo &&  name === "cat molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/2_dRZRki5bk?autoplay=1"
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
            className={`${styles["ancient-elbow-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}
          
          {showVideo &&  name === "elbow molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/7VtNkeiYHSc?autoplay=1"
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
            className={`${styles["ancient-chubby-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}
          
          {showVideo &&  name === "chubby molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/03e5uWH-pHQ?autoplay=1"
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
            className={`${styles["ancient-orange-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          
          {showVideo &&  name === "orange molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/s-Hkg1ajBhM?autoplay=1"
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
            className={`${styles["ancient-A-site-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}

          { seeOtherMolo &&(
          <h1 
            className={`${styles["ancient-A-site-molo-3"]} img-fluid smaller-image`} 
            > 3
          </h1>
          )}

          {ASite &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-Ct-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {ASite &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-T-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {ASite &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-door-cross"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}

          {showVideo &&  name === "A site from ct molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/MW0NNSjHxVc?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"    
            allowfullscreen="1"
            
          ></iframe>
          )}
          
          {showVideo &&  name === "A site from T molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/Wa_HzfLtqUQ?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"    
            allowfullscreen="1"
            
          ></iframe>
          )}

          {showVideo &&  name === "A site from door molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/8ri3IqrUIKs?autoplay=1"
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
            className={`${styles["ancient-short-molo"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterMolo}>
          </img>
          )}
          
          {showVideo &&  name === "short molo" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/5AK8bhOP0GQ?autoplay=1"
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

export default MoloElementAncient; 