
import { MAX_SECONDS_PAGE } from 'config';
import { useCallback, useEffect, useState } from "react";

import SliderControls from 'components/slider-controls'

import Ranking from 'pages/ranking';
import Races from 'pages/races';
import PilotRaces from 'pages/pilot-races';

const components = [
    <Ranking></Ranking>,
    <PilotRaces></PilotRaces>,
    <Races></Races>
];
export default function Home() {
    const [currentComponent, setCurrentComponent] = useState(0);

    const moveNextComponent = useCallback(() => {
        setCurrentComponent(currentComponent =>
            currentComponent === components.length - 1 ? 0 : currentComponent + 1
        );
    }, []);

    const moveBackComponent = useCallback(() => {
        setCurrentComponent(currentComponent =>
            currentComponent === 0 ? components.length - 1 : currentComponent - 1
        );
    }, [])

    return (
        <>
            <SliderControls
                onMoveNext={() => moveNextComponent()}
                onMoveBack={() => moveBackComponent()}
            />
            { components[currentComponent]}
        </>
    );
}