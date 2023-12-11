import Link from 'next/link';
import WheelContainer from '../../wheelContainer';
import useWheelFunctions from '../../wheelFunctions';

//Lot of repeated code consider making it a separate file that i import 
export default function App() {

  const initialSegments  = [
    "MAG-7",
    "Nova",
    "Sawed-Off",
    "XM1014",
    "Negev / M249",
    "Knife"
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

          <h1>CSGO heavy Weapons wheel</h1>
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
