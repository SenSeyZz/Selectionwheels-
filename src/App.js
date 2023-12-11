import Link from 'next/link';

export default function App() {

  return (
    <div className="App">
      
      <div>
      <ul>
        <li><Link href="/league-of-legends"> LOL Wheel </Link></li>
        <li><Link href="/counter-strike"> CSGO </Link></li>
      </ul>
      </div>
      
    </div>
  );
}
