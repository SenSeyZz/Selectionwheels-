import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { useState } from 'react';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");

  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    if(className == "img-fluid smaller-image ancient-backsiteA-smoke "){
      setName("ancient-backsiteA-smoke")
    }if (className == "img-fluid smaller-image ancient-ctFromDonut-smoke ") {
      setName("ancient-ctFromDonut-smoke")
    }if(className == "img-fluid smaller-image ancient-tunnel-smoke "){
      setName("ancient-tunnel-smoke")
    }if(className == "img-fluid smaller-image ancient-ctFromMid-smoke "){
      setName("ancient-ctFromMid-smoke")
      console.log("test");
    }if(className == "img-fluid smaller-image ancient-bLong-smoke"){
      setName("ancient-bLong-smoke")
    }if(className == "img-fluid smaller-image ancient-bShort-smoke"){
      setName("ancient-bShort-smoke")
    }if (className == "img-fluid smaller-image ancient-cave-smoke") {
      setName("ancient-cave-smoke")
      console.log("test");
    }
    
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
    setName("")
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
          <img src='/csImages/layout_ancient.webp' className="img-fluid " alt="Responsive image"></img>
          
        
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-backsiteA-smoke " 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-backsiteA-smoke" && (
          <iframe className='youtube-vid-ancient-bakcsiteA-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?autoplay=1&mute=1&end=20"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}
          

          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-ctFromDonut-smoke " 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-ctFromDonut-smoke" && (
          <iframe className='youtube-vid-ancient-ctFromDonut-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=21&end=38&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-tunnel-smoke " 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-tunnel-smoke" && (
          <iframe className='youtube-vid-ancient-tunnel-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=39&end=56&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-ctFromMid-smoke " 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-ctFromMid-smoke" && (
          <iframe className='youtube-vid-ancient-ctFromMid-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=57&end=75&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-bLong-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-bLong-smoke" && (
          <iframe className='youtube-vid-ancient-bLong-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=78&end=93&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-bShort-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-bShort-smoke" && (
          <iframe className='youtube-vid-ancient-bShort-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=94&end=108&autoplay=1&mute=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            
          ></iframe>
          
          )}

          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image ancient-cave-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>

          {showVideo &&  name === "ancient-cave-smoke" && (
          <iframe className='youtube-vid-ancient-cave-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qGst7qOFkgw?start=109&end=125&autoplay=1&mute=1"
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