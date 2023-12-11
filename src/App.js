import Link from 'next/link';

export default function App() {

  return (
    <div className="App">
      <h1>Home Page</h1>
      <div>
      <Link href="/lolWheel">
          LOL Wheel
      </Link>
      <br></br>
      <Link href="/CSGOWheel">
          CSGO Wheel
      </Link>
      </div>
      
    </div>
  );
}
