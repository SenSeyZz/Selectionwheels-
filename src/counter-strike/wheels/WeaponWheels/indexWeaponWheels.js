import Link from 'next/link';
import fadeIn from '../../../fadeIn';

export default function App() {

  fadeIn()

  return (
    <div className='black-bg'>
      <div>
        <ul>
          <li><Link href="/"> Home Page </Link></li>
          <li><Link href="/counter-strike/Wheels/"> Previous </Link></li>
        </ul>
      </div>
      <h1 class="text-center text-light mt-4 mb-5">On this page, you can use the wheels to decide which weapon <br/> you are going to play for the following round ! </h1>

      <div>

      <div class="container">
        <div class="row">
          <div class="col">
            <Link href="/counter-strike/Wheels/weaponWheels/riflesWheel" style={{ textDecoration: 'none' }}> 
              <img src='/csImages/ak-47.webp' className="img-fluid weapon-container grayscale " alt="Responsive image"></img>
              <p className = "wheel-name text-light">Rifle Wheel</p>
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/csAllWeaponsWheel" style={{ textDecoration: 'none' }}>
            <img src='/csImages/allweapons.png' className="img-fluid weapon-container rounded-circle grayscale" alt="Responsive image"></img>
            <p className = "wheel-name text-light">All weapons Wheel</p>
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/SMGsWheel" style={{ textDecoration: 'none' }}>
          <img src='/csImages/smg.webp' className="img-fluid weapon-container grayscale " alt="Responsive image"></img>
          <p className = "wheel-name-small text-light">SMGs wheel</p>
          </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/pistolsWheel" style={{ textDecoration: 'none' }}> 
          <img src='/csImages/usp.webp' className="img-fluid weapon-container grayscale " alt="Responsive image"></img>
          <p className = "wheel-name-small text-light">Pistols Wheel</p>
          </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/heavyWheel" style={{ textDecoration: 'none' }}> 
          <img src='/csImages/heavy.webp' className="img-fluid weapon-container grayscale " alt="Responsive image"></img>
          <p className = "wheel-name-small text-light">Heavy Wheel</p>
          </Link>
          </div>
      </div>
    </div>
    
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>

        <br/>
        <br/>
        <br/>

        <br/>
      </div>
    

      </div>
    </div>
  );
}
