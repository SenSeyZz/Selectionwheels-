import Link from 'next/link';

export default function App() {

  return (
    <div>
      <div>
      <ul>
      <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/CSGOWheel"> CSGO strategies Wheel </Link></li>
        <li><Link href="/counter-strike/weaponWheels/"> CSGO Weapon Wheels </Link></li>
      </ul>
      </div>
      
    </div>
  );
}
