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
      <div class="container">
        <div class="row">
          <div class="col">
            <Link href="/counter-strike/utility/mirage" style={{ textDecoration: 'none' }}> 
              <img src='/csImages/mirage.jpg' className="img-fluid left-container grayscale rounded-circle grayscale fade " alt="Responsive image"></img>
              
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/utility/inferno" style={{ textDecoration: 'none' }}>
            <img src='/csImages/inferno.jpg' className="img-fluid right-container rounded-circle grayscale" alt="Responsive image"></img>
            
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Link href="/counter-strike/utility/nuke" style={{ textDecoration: 'none' }}> 
              <img src='/csImages/nuke.png' className="img-fluid left-container grayscale rounded-circle grayscale " alt="Responsive image"></img>
              
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/utility/overpass" style={{ textDecoration: 'none' }}>
            <img src='/csImages/overpass.avif' className="img-fluid right-container rounded-circle grayscale" alt="Responsive image"></img>
            
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Link href="/counter-strike/utility/vertigo" style={{ textDecoration: 'none' }}> 
              <img src='/csImages/vertigo.webp' className="img-fluid left-container grayscale rounded-circle grayscale " alt="Responsive image"></img>
              
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/utility/ancient" style={{ textDecoration: 'none' }}>
            <img src='/csImages/ancient.avif' className="img-fluid right-container rounded-circle grayscale" alt="Responsive image"></img>
            
            </Link>
          </div>
        </div>
    </div>
      
    </div>
  );
}