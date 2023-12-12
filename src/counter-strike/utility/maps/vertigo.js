import Link from 'next/link';


export default function App() {
  
  return (
    
    <div className='black-bg'>
      <div>
      <ul>
        <li><Link href="/"> Home Page </Link></li>
        <li><Link href="/counter-strike/utility">Previous </Link></li>
      </ul>
      </div>
        <h1>Vertigo </h1>
      
    </div>
  );
}