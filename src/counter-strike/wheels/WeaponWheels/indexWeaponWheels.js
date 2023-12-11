import Link from 'next/link';

export default function App() {
  return (
    <div className='black-bg'>
      <div>
        <ul>
          <li><Link href="/"> Home Page </Link></li>
          <li><Link href="/counter-strike/Wheels/"> Previous </Link></li>
        </ul>
      </div>
      <div>

      <div class="container">
        <div class="row">
          <div class="col">
            <Link href="/counter-strike/Wheels/weaponWheels/riflesWheel"> 
              <img src='/csImages/ak-47.webp' class="img-fluid weapon-container " alt="Responsive image"></img>
              <p className = "wheel-name">Rifle Wheel</p>
            </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/csAllWeaponsWheel">
            <img src='/csImages/allweapons.png' class="img-fluid weapon-container rounded-circle" alt="Responsive image"></img>
            <p className = "wheel-name">All weapons Wheel</p>
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/SMGsWheel">
          <img src='/csImages/smg.webp' class="img-fluid weapon-container " alt="Responsive image"></img>
          <p className = "wheel-name-small">SMGs wheel</p>
          </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/pistolsWheel"> 
          <img src='/csImages/usp.webp' class="img-fluid weapon-container " alt="Responsive image"></img>
          <p className = "wheel-name-small">Pistols Wheel</p>
          </Link>
          </div>
          <div class="col">
          <Link href="/counter-strike/Wheels/weaponWheels/heavyWheel"> 
          <img src='/csImages/heavy.webp' class="img-fluid weapon-container " alt="Responsive image"></img>
          <p className = "wheel-name-small">Heavy Wheel</p>
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
