import Link from 'next/link';

export default function App() {

  return (
    <div className="App">
      
      <div>
      <ul>
        <li><Link href="/lolWheel"> LOL Wheel </Link></li>
        <li><Link href="/CSGOWheel"> CSGO Wheel </Link></li>
      </ul>
      </div>
      
    </div>
  );
}
