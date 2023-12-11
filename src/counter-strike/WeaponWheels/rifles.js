import Link from 'next/link';
import WheelContainer from '../../wheelContainer';
import useWheelFunctions from '../../wheelFunctions';

//Lot of repeated code consider making it a separate file that i import 
export default function App() {

  const initialSegments = [
    "AK-47",
    "AUG / SG",
    "AWP",
    "Famas / Galil",
    "M4", 
    "Auto-noob",
    "SSG 08", 
  ];


  const {
    segments,
    segColors,
    textValue,
    handleTextAreaChange,
    onFinished,
    submit,
    deleteAStrat,
  } = useWheelFunctions(initialSegments);

  return (
    <div>
      <div>

        <ul>
          <li><Link href="/"> Home Page </Link></li>
          <li><Link href="/counter-strike/weaponWheels/"> Previous </Link></li>
        </ul>

        <div className="centered-heading">

          <h1>CSGO rifles Weapons wheel</h1>
          <WheelContainer
          segments={segments}
          segColors={segColors}
          onFinished={onFinished}
          textValue={textValue}
          handleTextAreaChange={handleTextAreaChange}
          submit={submit}
          deleteAStrat={deleteAStrat}
          />
      
        </div>
      
      </div>
      
    </div>
  );
}
