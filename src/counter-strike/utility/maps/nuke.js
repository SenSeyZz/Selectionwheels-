import Link from 'next/link';
import fadeIn from '../../../fadeIn';
import React, { use, useState } from 'react';



export default function App() {
  
  const [showVideo, setShowVideo] = useState(false);
  const [name, setName] = useState("");
  const [seeOtherSmoke, setSeeOtherSmoke] = useState (true)


  const handleMouseEnter = (event) => {
    const element = event.target;
    const className = element.className;
    console.log(className);
    setShowVideo(true);
    setSeeOtherSmoke(false)
    if(className == "img-fluid smaller-image nuke-outside1-smoke "){
      setName("outside1 smoke")
      console.log("short");
    }if (className == "img-fluid smaller-image nuke-outside2-smoke") {
      setName("outside2 smoke")
      console.log("long");
    }if(className == "img-fluid smaller-image nuke-outside3-smoke"){
      setName("outside3 smoke")
      console.log("connector");
    }if(className == "img-fluid smaller-image nuke-heaven-smoke"){
      setName("nuke smoke")
      console.log("B CT");
    }if(className == "img-fluid smaller-image nuke-hut-smoke"){
      setName("hut smoke")
    
    }
    
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
    setName("")
    setSeeOtherSmoke(true)
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
          <img src='/csImages/nuke_layout.webp' className="img-fluid " alt="Responsive image"></img>
          
          {seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image nuke-outside1-smoke " 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>
          )}

          {showVideo && name == "outside1 smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          )}
          
          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image nuke-outside2-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>
          )}

          {showVideo &&  name === "outside2 smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image nuke-outside3-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>
          )}

          {showVideo &&  name === "outside3 smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}

          {seeOtherSmoke && (
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image nuke-heaven-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>
          )}

          {showVideo &&  name === "heaven smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
            
          ></iframe>
          
          )}
          
          { seeOtherSmoke &&(
          <img 
            src='/csImages/smoke.png' 
            className="img-fluid smaller-image nuke-hut-smoke" 
            alt="Responsive image" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          </img>
          )}

          {showVideo &&  name === "hut smoke" && (
          <iframe className='youtube-vid-mirage-window-smoke '
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F_DVcBW3KAg?autoplay=1"
            allow='autoplay'
            frameborder="0"
            allowfullscreen
            onMouseLeave={handleMouseLeave}
          ></iframe>
          
          )}
          
          

          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}