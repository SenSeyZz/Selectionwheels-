import React from 'react';
import WheelComponent from "react-wheel-of-prizes";

const WheelContainer = ({
    segments,
    segColors,
    onFinished,
    textValue,
    handleTextAreaChange,
    submit,
    deleteAStrat,
    deleteWinner
  }) => {

    return(
        <div className="wheel-container">
    
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
                   <button className="btn btn-primary" onClick={deleteWinner}>
                      Delete Winner 
                   </button>
    
                  </div>
          
                </div>
            
              </div>
    )

  }


export default WheelContainer;