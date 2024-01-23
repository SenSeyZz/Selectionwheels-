import React from 'react';
import styles from './ancient.module.css'; 

const FlashElementAncient = ({seeOtherFlash, handleMouseEnterFlash, showVideo, name, handlecross, aFlash, midFlash, bFlash}) =>{
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

         {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-mid-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-donut-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {aFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["A-idk-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  
          
            { seeOtherFlash &&(
          <img 
            src='/csImages/flash.webp' 
            className={`${styles["ancient-a-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "A site from idk flash" && (
          <iframe className={styles["youtube-vid"]}
            width="315" 
            height="560"
            src="https://www.youtube.com/embed/aJdnuhMl6Ho?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"   
            allowfullscreen="1"
          
          ></iframe>
          )}

          {showVideo &&  name === "A site from donut flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/lYzzwMvXikI?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"   
            allowfullscreen="1"
          
          ></iframe>
          )}

          {showVideo &&  name === "A site from mid flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/IqWmQZSifhk?autoplay=1"
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
            className={`${styles["ancient-exitA-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {showVideo &&  name === "exit A flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/jn2AhNPlq6Q?autoplay=1"
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
            className={`${styles["ancient-mid-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

         {midFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["cave-mid-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {midFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["wood-mid-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {midFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["alley-mid-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {midFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["T-mid-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )} 

          {showVideo &&  name === "mid from cave flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/VNbMLrbuwS8?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"   
            allowfullscreen="1"
          
          ></iframe>
          )}

          {showVideo &&  name === "mid from wood flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/CjVPUKmj_Ks?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"   
            allowfullscreen="1"
          
          ></iframe>
          )}

          {showVideo &&  name === "mid from alley flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/vNri9rvP0ck?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"   
            allowfullscreen="1"
          
          ></iframe>
          )}

          {showVideo &&  name === "mid from T flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/b6_BY0axvXQ?autoplay=1"
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
            className={`${styles["ancient-b-flash"]} img-fluid smaller-image hover-effect`} 
            alt="Responsive image" 
            onClick={handleMouseEnterFlash}>
          </img>
          )}

          {bFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["cave-b-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )}  

          {bFlash &&(
          <img 
            src='/csImages/red_cross.png' 
            className={`${styles["ramp-b-flash"]} img-fluid smaller-image hover-effect red_cross`} 
            alt="Responsive image" 
            onClick={handlecross}>
          </img>
          )} 

          {showVideo &&  name === "b from ramp flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/EOW3Cx6EPQs?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
            frameborder="0"   
            allowfullscreen="1"
          
          ></iframe>
          )}

          {showVideo &&  name === "b from cave flash" && (
          <iframe className={styles["youtube-vid"]}
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/mDPt4pgSYKs?autoplay=1"
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