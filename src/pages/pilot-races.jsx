import Pilot from "components/pilot";
import { getRankingByPilot, getGlobalRanking } from "data/karts.utils";
import Race from 'components/race'


const pilots = getGlobalRanking();
export default function PilotRaces() {

    const renderRaces = (pilot) =>
        getRankingByPilot(pilot._id).races.map((race, index) =>
            <Race name={`Race ${index + 1}`} key={pilot.name + index} race={race} hightLightPilot={pilot.name} ></Race>
        );

    return (
        <>
            <h1 className="is-size-1">Pilot Ranking</h1>
            {pilots.map((pilot, position) =>
                <div key={pilot._id + position}>
                    <Pilot position={position + 1} pilot={pilot} ></Pilot>
                    {renderRaces(pilot)}
                </div>
            )}
        </>
    );
}