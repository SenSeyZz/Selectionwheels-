import Link from 'next/link';
import WheelContainer from '../../../wheelContainer';
import useWheelFunctions from '../../../wheelFunctions';


export default function App() {

  const initialSegments=[
    "Exec A",
    "Exec B",
    "Rush A",
    "Rush B",
    "Only scout",
    "At least 1 knife kill"
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
          <li><Link href="/counter-strike/Wheels/"> Previous </Link></li>
        </ul>

        <div className="centered-heading">

          <h1>CSGO strat wheel</h1>
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
