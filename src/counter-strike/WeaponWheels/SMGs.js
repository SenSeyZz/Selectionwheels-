import Link from 'next/link';
import WheelComponent from "react-wheel-of-prizes";
import randomColor from "randomcolor";
import React, { useState, useEffect } from 'react';

//Lot of repeated code consider making it a separate file that i import 
export default function App() {

  const [segments, setSegments] = useState([
    "Mac-10",
    "MP5-SD",
    "MP7",
    "MP9",
    "PP-Bizon",
    "P90",
    "UMP-45",
  ]);


  const segColors = []
  
  for(let i = 0; i <segments.length ; i++){
    segColors.push(randomColor())
      
  }

  
  const [textValue, setTextValue] = useState('');
  
  
  const handleTextAreaChange = (event) => {
    // Update the state with the current value of the textarea
    setTextValue(event.target.value);
  };

  const onFinished = (winner) => {
    console.log(winner);
  };

  const submit = () =>{
    setSegments([...segments, textValue.trim()]); // Use setSegments to update the state
    setTextValue('')
  }

  

  const deleteAStrat = () =>{
    const stratToDelete = textValue.trim()
    console.log(stratToDelete);
    let indexToDelete = segments.indexOf(stratToDelete)
    console.log(indexToDelete);
    if (indexToDelete !== -1) {
      const updatedSegments = [...segments];
      updatedSegments.splice(indexToDelete, 1); // Remove 1 element at indexToDelete
      setSegments(updatedSegments);
      setTextValue('')
    }else{
      console.log("nope");
    }
    
  }

  useEffect(() => {
    // This will log the updated state after each render
    console.log("Updated segments:", segments);
  }, [segments]);


  return (
    <div>
      <div>

        <ul>
          <li><Link href="/"> Home Page </Link></li>
          <li><Link href="/counter-strike/weaponWheels/"> Previous </Link></li>
        </ul>

        <div className="centered-heading">

          <h1>CSGO SMGs wheel</h1>
          <div className="wheel-container">

            <WheelComponent 
              key={segments.join(",")}
              segments={segments}
              segColors={segColors}
              onFinished={(winner) => onFinished(winner)}
              primaryColor="black"
              contrastColor="black"
              buttonText="Spin"
              isOnlyOnce={false}
              size={190}
              upDuration={500}
              downDuration={600}
              fontFamily="Arial"
            />
            <div className="button-container d-flex flex-column align-items-center">

              <textarea
                rows={2}
                cols={40}
                placeholder="Type the Weapon that you want to add/delete: "
                value={textValue}  // Bind the value to the state
                onChange={handleTextAreaChange}  // Set the event handler for changes
              />

              <div className="d-flex justify-content-center mt-2">

                <button className="btn btn-primary mr-2" onClick={submit}>
                  Submit 
                </button>

                <button className="btn btn-primary" onClick={deleteAStrat}>
                  Delete 
               </button>

              </div>
      
            </div>
        
          </div>
      
        </div>
      
      </div>
      
    </div>
  );
}
