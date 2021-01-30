import Pilot from "components/pilot";
import kartsContext from "context/karts.context";
import { useContext } from "react";


export default function Ranking() {
    const context = useContext(kartsContext);

    return (
        <>
            <h1 className="is-size-1">Global Ranking</h1>
            {context.globalRanking.map((pilot, position) => <Pilot key={pilot.name} position={position + 1} pilot={pilot} ></Pilot>)}
        </>
    );
}