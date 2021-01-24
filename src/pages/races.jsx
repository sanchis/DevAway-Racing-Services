import { getRaces } from "data/karts.utils";
import Race from 'components/race'

const races = getRaces();
export default function Races() {

    return (
        <>
            <h1 className="is-size-1">Races</h1>
            {races.map((race, raceNumber) =>
                <Race race={race} name={`Race ${raceNumber + 1}`}></Race>
            )}
        </>
    );
}