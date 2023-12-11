import Link from 'next/link';

export default function App() {

  return (
    <div className="App">
      
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/weaponWheels/csAllWeaponsWheel"> Wheel all weapons </Link></li>
        <li><Link href="/counter-strike/weaponWheels/heavyWheel"> Wheel heavy weapons </Link></li>
        <li><Link href="/counter-strike/weaponWheels/pistolsWheel"> Wheel pistols </Link></li>
        <li><Link href="/counter-strike/weaponWheels/riflesWheel"> Wheel rifles weapons </Link></li>
        <li><Link href="/counter-strike/weaponWheels/SMGsWheel"> Wheel SMGs </Link></li>
      </ul>
      </div>
      
    </div>
  );
}
