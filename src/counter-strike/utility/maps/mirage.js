import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { useState } from 'react';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);

  const handleMouseEnter = () => {
    setShowVideo(true);
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
  };
  return (
    
    <div className='black-bg'>
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/utility">Previous </Link></li>
      </ul>
      </div>

      <div class='container'>
        <div class = "row">
          <div class = "col">
          <div className='col d-flex justify-content-center align-items-center'>
          <img src='/csImages/layout_mirage.webp' className="img-fluid " alt="Responsive image"></img>
          
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image window-smoke " 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          )}

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}