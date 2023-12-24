import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create a table with key 1 to 5 and assign the role to a key, use the key as a foreign key in the groups table 
// to randommly assign a number to a participants and then chekc if it s unique if not replace it with another number 
// get the role that the key means and print it. 

const lol = () => {

  // EVERYTHING THAT IS COMMENTED IS LINKED TO MYSQL i ALSO DELETED FILES TAHT SHOULD GO IN API/GROUPS AND GROUP AND THE MYSQL.JS FILE 
  /*
  const router = useRouter();
  const [groupName, setGroupName] = useState('');

  const handleTextAreaChange = (event) => {
    setGroupName(event.target.value);
  };

  const createGroup = async () => {
    const response = await fetch('http://localhost:3000/api/groups/create', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ groupName }),
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log('Group created. Group ID:', data.groupId);
      router.push(`/group/${data.groupId}`);
    } else {
      console.error('Error creating group:', response.statusText);
    }
  };

  const joinGroup = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/groups/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ groupName }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Participant added to the group:', data.message);
        // You can redirect or perform additional actions as needed
        router.push(`/group/${groupName}`);
      } else {
        
        console.error('Error adding participant:', response.statusText);
      }
    } catch (error) {
      
      console.error('Error adding participant:', error);
    }
  };
  */

    return (
      <div>
        <ul>
          <li><Link href="/"> HomePage </Link></li>
        </ul>
        <h1>League of legends</h1>
         {/*
        <textarea
          rows={2}
          cols={40}
          placeholder="Type the Weapon that you want to add/delete: "
          value={groupName}  // Bind the value to the state
          onChange={handleTextAreaChange}  // Set the event handler for changes
        />
        <button onClick={createGroup}>Create Group</button>

        <button onClick={joinGroup}>Join Group</button> */}
      </div>
    );
  };
  
  export default lol;