import Pilot from "components/pilot";
import { getRankingByPilot, getGlobalRanking } from "data/karts.utils";
import Race from 'components/race'


const pilots = getGlobalRanking();
export default function PilotRaces() {
    return (
        <>
            <h1 className="is-size-1">Pilot Ranking</h1>
            {pilots.map((pilot, positon) =>
                <>
                    <Pilot key={pilot.name} position={positon + 1} pilot={pilot} ></Pilot>
                    {getRankingByPilot(pilot.name).races.map((race, index) =>
                        <Race name={`Race ${index + 1}`} key={pilot.name + index} race={race} hightLightPilot={pilot.name} ></Race>
                    )}

                </>
            )}
        </>
    );
}