import Pilot from "components/pilot";
import { getGlobalRanking } from "data/karts.utils";


const pilots = getGlobalRanking();
export default function GlobalRanking() {
    return (
        <>
            <h1>Global Ranking</h1>
            {pilots.map((pilot, positon) => <Pilot key={pilot.name} position={positon + 1} pilot={pilot} ></Pilot>)}
        </>
    );
}