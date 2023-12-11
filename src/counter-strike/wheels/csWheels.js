import Link from 'next/link';

export default function App() {

  return (
    <div>
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/">Previous </Link></li>
        <li><Link href="/counter-strike/Wheels/stratWheels/"> CSGO strategies Wheel </Link></li>
        <li><Link href="/counter-strike/Wheels/weaponWheels"> CSGO Weapon Wheels </Link></li>
      </ul>
      </div>
      
    </div>
  );
}