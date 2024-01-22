import Link from 'next/link';
import fadeIn from "./fadeIn.js"

export default function App() {

  fadeIn()

  return (
    
    <div className="container-fluid black-bg" style={{ height: '98vh' }}>
  
      <div className="row">
      <h1 className="text-center text-light mt-4">Welcome to this website </h1>
      <h4 className="text-center text-light">Select the game that you want</h4>

      <p class="text-center text-light">My website is there to help you have fun while playing ! <br/> You will also be able to discover multiple important information so do not wait and go ahaead ! </p>
      
        <div className="col-md-6" style={{ height: '70vh' }}>
        
          <Link href="/counter-strike"> 
          
            <div className="ml-3 image-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/cs2.jpg)', 
              backgroundSize: 'cover', 
              height: '100%', 
              padding: '20px',
              
              }}>
            </div>
          
          </Link>
         
        </div>

        <div className="col-md-6">
          
          <Link href="/league-of-legends">
            <div  className="image-container grayscale image-container-right" style={{ 
              backgroundImage: 'url(/lolImages/league.jpg)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center center', 
              height: '100%', 
              padding: '20px' 
              }}>
            </div>

          </Link>
          
           
        
        </div>
      </div>
    </div>
  );
}
