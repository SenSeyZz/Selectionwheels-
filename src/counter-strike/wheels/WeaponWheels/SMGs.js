import Link from 'next/link';
import WheelContainer from '../../../wheelContainer';
import useWheelFunctions from '../../../wheelFunctions';

//Lot of repeated code consider making it a separate file that i import 
export default function App() {

  const initialSegments=[
    "Mac-10",
    "MP5-SD",
    "MP7",
    "MP9",
    "PP-Bizon",
    "P90",
    "UMP-45",
  ];


  const {
    segments,
    segColors,
    textValue,
    handleTextAreaChange,
    onFinished,
    submit,
    deleteAStrat,
    deleteWinner,
  } = useWheelFunctions(initialSegments);

  return (
    <div>
      <div>

        <ul>
          <li><Link href="/"> Home Page </Link></li>
          <li><Link href="/counter-strike/Wheels/weaponWheels/"> Previous </Link></li>
        </ul>

        <div className="centered-heading">

          <h1>CSGO SMGs wheel</h1>
          <WheelContainer
          segments={segments}
          segColors={segColors}
          onFinished={onFinished}
          textValue={textValue}
          handleTextAreaChange={handleTextAreaChange}
          submit={submit}
          deleteAStrat={deleteAStrat}
          deleteWinner={deleteWinner}
          />
      
        </div>
      
      </div>
      
    </div>
  );
}
