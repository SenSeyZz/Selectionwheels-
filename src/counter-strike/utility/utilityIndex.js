import Link from 'next/link';
import fadeIn from '../../fadeIn';

export default function App() {
  fadeIn()
  return (
    
    <div className='black-bg'>
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/">Previous </Link></li>
      </ul>

      
      <h1 class="text-center text-light mt-4">Learn the most useful utilities on each map !  </h1>
      <h4 class="text-center text-light">Select the map that you want</h4>
      

      </div>
      <div class="container" style={{ height: '132vh' }}>
        <div class="row mb-4" style={{ height: '40vh' }}>
          <div class="col">
            <Link href="/counter-strike/utility/mirage" style={{ textDecoration: 'none' }}> 
              
              <div className="left-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/mirage.jpg)', 
              backgroundSize: 'cover', 
              height: '100%', 
              backgroundPosition: 'center',
              width:"100%"
              
              }}>
            </div>
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/utility/inferno" style={{ textDecoration: 'none' }}>
          <div className="right-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/inferno.jpg)', 
              backgroundSize: 'cover', 
              height: '100%', 
              backgroundPosition: 'center',
              width:"100%"
              
              }}>
            </div>
            </Link>
          </div>
        </div>
        <div class="row mb-4" style={{ height: '40vh' }}>
          <div class="col">
            <Link href="/counter-strike/utility/nuke" style={{ textDecoration: 'none' }}> 

            <div className="left-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/nuke.png)', 
              backgroundSize: 'cover', 
              height: '100%', 
              backgroundPosition: 'center',
              width:"100%"
              }}>
            </div>
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/utility/overpass" style={{ textDecoration: 'none' }}>
            
            <div className="right-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/overpass.avif)', 
              backgroundSize: 'cover', 
              height: '100%', 
              backgroundPosition: 'center',
              width:"100%"
              }}>
            </div>
            </Link>
          </div>
        </div>
        <div class="row mb-4" style={{ height: '40vh' }}>
          <div class="col">
            <Link href="/counter-strike/utility/vertigo" style={{ textDecoration: 'none' }}> 

            <div className="left-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/vertigo.webp)', 
              backgroundSize: 'cover', 
              height: '100%', 
              backgroundPosition: 'center',
              width:"100%"
              }}>
            </div>
            </Link>

          </div>
          <div class="col">
          <Link href="/counter-strike/utility/ancient" style={{ textDecoration: 'none' }}>
          <div className="right-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/ancient.avif)', 
              backgroundSize: 'cover', 
              height: '100%', 
              backgroundPosition: 'center',
              width:"100%"
              }}>
            </div>
            </Link>
          </div>
        </div>
    </div>
      
    </div>
  );
}