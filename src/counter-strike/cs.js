import Link from 'next/link';
import fadeIn from '../fadeIn';

export default function App() {
  fadeIn()
  return (
    <div className="container-fluid black-bg">
        <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
      </ul>
      </div>
      <div className="row">
      <h1 class="text-center text-light mt-4">In this part you can choose between learning utilities <br/>
      or having fun with the Wheels !  </h1>
      
        <div className="col-md-6" style={{ height: '899px' }}>
          <h2 className='bottomMarginForWheel text-center text-light'>To learn utilities follow this path ;)</h2>
          <Link href="/counter-strike/utility"> 
          
            <div className="ml-3 test-container grayscale image-container rounded-circle" style={{ 
              backgroundImage: 'url(/csImages/utility.webp)', 
              backgroundSize: 'cover', 
              height: '70%', 
              width:"70%",
              padding: '20px',
              
              }}>
            </div>
          
          </Link>
         
        </div>

        <div className="col-md-6">
          {/* Content on the right side */}
          <h2 className='bottomMarginForWheel text-light'>To have fun with the wheels follow this path ;)</h2>
          <Link href="/counter-strike/Wheels">
            <div  className="image-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/wheel.png)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center center', 
              height: '70%', 
              width:"70%",
              padding: '20px' 
              }}>
            </div>

          </Link>
          
           
        
        </div>
      </div>
    </div>
  );
}
