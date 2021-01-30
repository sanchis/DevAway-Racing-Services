import Race from 'components/race'
import { useContext } from "react";
import kartsContext from "context/karts.context";

export default function Races() {
    const context = useContext(kartsContext);

    return (
        <>
            <h1 className="is-size-1">Races</h1>
            {context.races.map((race, raceNumber) =>
                <Race key={`races ${raceNumber}`} race={race} name={`Race ${raceNumber + 1}`}></Race>
            )}
        </>
    );
}