import Pilot from "components/pilot";
import { getGlobalRanking } from "data/karts.utils";


const pilots = getGlobalRanking();
export default function GlobalRanking() {
    return (
        <>
            <h1 className="is-size-1">Global Ranking</h1>
            {pilots.map((pilot, position) => <Pilot key={pilot.name} position={position + 1} pilot={pilot} ></Pilot>)}
        </>
    );
}