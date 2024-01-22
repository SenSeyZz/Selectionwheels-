import Link from 'next/link';
import fadeIn from '../fadeIn';

export default function App() {
  fadeIn()
  return (
    <div className="container-fluid black-bg"  style={{ height: '132vh' }}>
        <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
      </ul>
      </div>
      <div className="row">
      <h1 class="text-center text-light mt-4">In this part you can choose between learning utilities <br/>
      or having fun with the Wheels !  </h1>
      
        <div className="col-md-6" style={{ height: '60vh' }}>
          <h2 className='bottomMarginForWheel text-center text-light'>To learn utilities follow this path ;)</h2>
          <Link href="/counter-strike/utility"> 
          
            <div className="left-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/utility.webp)', 
              backgroundSize: 'cover', 
              height: '100%', 
              width:"100%"
              }}>
            </div>
          
          </Link>
         
        </div>

        <div className="col-md-6">
          {/* Content on the right side */}
          <h2 className='bottomMarginForWheel text-light'>To have fun with the wheels follow this path</h2>
          <Link href="/counter-strike/Wheels">
            <div  className="right-container grayscale fun-wheel" style={{ 
              backgroundImage: 'url(/csImages/wheel.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              height: '100%', 
              width: "100%"
              }}>
            </div>

          </Link>
          
           
        
        </div>
      </div>
    </div>
  );
}
