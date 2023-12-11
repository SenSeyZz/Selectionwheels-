import React from 'react';
import Link from 'next/link';

const lolWheel = () => {
    return (
      <div>
        <ul>
          <li><Link href="/CSGOWheel"> CSGO Wheel </Link></li>
          <li><Link href="/"> HomePage </Link></li>
        </ul>
        <h1>LOL Wheel</h1>
      </div>
    );
  };
  
  export default lolWheel;