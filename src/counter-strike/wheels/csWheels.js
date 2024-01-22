import Link from 'next/link';
import fadeIn from '../../fadeIn';

export default function App() {
  fadeIn()
  return (
    <div className="container-fluid black-bg"  style={{ height: '100vh' }}>
        <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/">Previous </Link></li>
      </ul>
      </div>
      <div className="row">
      
      
        <div className="col-md-6" style={{ height: '60vh' }}>
          <h2 className='text-center text-light'>Strategies</h2>
          <Link href="/counter-strike/Wheels/stratWheels/"> 
          
            <div className="left-container grayscale" style={{ 
              backgroundImage: 'url(/csImages/strategy.webp)', 
              backgroundSize: 'cover', 
              height: '100%', 
              width:"100%"
              }}>
            </div>
          
          </Link>
         
        </div>

        <div className="col-md-6">
          <h2 className='text-center text-light'>Weapons</h2>
          <Link href="/counter-strike/Wheels/weaponWheels">
            <div  className="right-container grayscale fun-wheel" style={{ 
              backgroundImage: 'url(/csImages/weapons.webp)', 
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
