import React from 'react';
import Link from 'next/link';

const lolWheel = () => {
    return (
      <div>
        <h2>LOL Wheel</h2>
        <div>
        <Link href="/CSGOWheel">
          CSGO Wheel
        </Link>
        <br/>
        <Link href="/">
          HomePage
        </Link>
        </div>
      </div>
    );
  };
  
  export default lolWheel;