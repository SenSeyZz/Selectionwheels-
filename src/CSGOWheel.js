import Link from 'next/link';
import WheelComponent from "react-wheel-of-prizes";
import randomColor from "randomcolor";
import React, { useState, useEffect } from 'react';


export default function App() {

  const [segments, setSegments] = useState([
    "Exec A",
    "Exec B",
    "Rush A",
    "Rush B",
    "Only scout",
    "At least 1 knife kill"
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
    }else{
      console.log("nope");
    }
    
  }

  useEffect(() => {
    // This will log the updated state after each render
    console.log("Updated segments:", segments);
  }, [segments]);


  return (
    <div className="App">
      <h1>CSGO strat wheel</h1>
      <div>
        <Link href="/lolWheel">
          LOL Wheel
        </Link>
        <br/>
        <Link href="/">
          HomePage
        </Link>

        <WheelComponent
          key={segments.join(",")}
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />

        <textarea
        rows={4}
        cols={50}
        placeholder="Type the strat that you want to add: "
        value={textValue}  // Bind the value to the state
        onChange={handleTextAreaChange}  // Set the event handler for changes
      />
      <p>Value entered: {textValue}</p>

      <button onClick={submit}>
        submit 
      </button>
      <button onClick={deleteAStrat}>
        Delete 
      </button>
      </div>
      
    </div>
  );
}
