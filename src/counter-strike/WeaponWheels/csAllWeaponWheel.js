import Link from 'next/link';
import WheelContainer from '../../wheelContainer';
import useWheelFunctions from '../../wheelFunctions';

//Lot of repeated code consider making it a separate file that i import 
export default function App() {

  const initialSegments = [
    "Glock / USP",
    "CZ-75",
    "Desert Eagle",
    "Dual Berettas",
    "Five-seven",
    "P250",
    "R8",
    "Tec-9",
    "AK-47",
    "AUG / SG",
    "AWP",
    "Famas / Galil",
    "M4", 
    "Auto-noob",
    "SSG 08", 
    "Mac-10",
    "MP5-SD",
    "MP7",
    "MP9",
    "PP-Bizon",
    "P90",
    "UMP-45",
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

          <h1>CSGO all Weapons wheel</h1>
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
