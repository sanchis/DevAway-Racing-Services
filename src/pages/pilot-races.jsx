import Pilot from "components/pilot";
import Race from 'components/race'
import { useContext } from "react";
import KartsContext from 'context/karts.context';


export default function PilotRaces() {
    const context = useContext(KartsContext);

    const renderRaces = (pilot) =>
        pilot.races.map((race, index) =>
            <Race name={`Race ${index + 1}`} key={pilot.name + index} race={race} hightLightPilot={pilot.name} ></Race>
        );

    return (
        <>
            <h1 className="is-size-1">Pilot Ranking</h1>
            {context.globalRanking.map((pilot, position) =>
                <div key={pilot._id + position}>
                    <Pilot position={position + 1} pilot={pilot} ></Pilot>
                    {renderRaces(pilot)}
                </div>
            )}
        </>
    );
}