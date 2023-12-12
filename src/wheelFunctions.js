import { useState, useEffect } from 'react';
import randomColor from 'randomcolor';

const useWheelFunctions = (initialSegments = []) => {
  const [segments, setSegments] = useState(initialSegments);
  const [textValue, setTextValue] = useState('');
  const [wheelWinner, setWheelWinner] = useState('');

  const segColors = segments.map(() => randomColor());

  const handleTextAreaChange = (event) => {
    setTextValue(event.target.value);
  };

  const onFinished = (winner) => {
    console.log(winner);
    console.log(wheelWinner);
    setWheelWinner(winner)
    console.log(wheelWinner);
  };

  const submit = () => {
    setSegments([...segments, textValue.trim()]);
    setTextValue('');
  };

  const deleteAStrat = () => {
    const stratToDelete = textValue.trim();
    const indexToDelete = segments.indexOf(stratToDelete);

    if (indexToDelete !== -1) {
      const updatedSegments = [...segments];
      updatedSegments.splice(indexToDelete, 1);
      setSegments(updatedSegments);
      setTextValue('');
    } else {
      console.log("Strat not found");
    }
  };


const deleteWinner = () => {
  if (wheelWinner) {
    const indexToDelete = segments.indexOf(wheelWinner);

    if (indexToDelete !== -1) {
      const updatedSegments = [...segments];
      updatedSegments.splice(indexToDelete, 1);
      setSegments(updatedSegments);
      setWheelWinner(''); // Clear the winner after deletion
    } else {
      console.log("Winner not found");
    }
  } else {
    console.log("No winner selected");
  }
};


  return {
    segments,
    segColors,
    textValue,
    handleTextAreaChange,
    onFinished,
    submit,
    deleteAStrat,
    deleteWinner
  };
};

export default useWheelFunctions;
